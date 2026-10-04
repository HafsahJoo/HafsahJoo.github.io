<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { dark } from '../lib/theme'

const uTotal = ref(11)
const FAR = { p: [0, 9.6, 0], yaw: 0.78, pitch: 0.5, dist: 43 }
const FAR_NARROW = { p: [0, 6.8, 0], yaw: 0.78, pitch: 0.5, dist: 26, shift: -1.4 }
const EXIT = { p: [0, -4.6, 0], yaw: 1.3, pitch: 0.62, dist: 36 }
const STOPS = [
  { id: 'overview', label: 'Room', hold: [1.0, 1.6], view: { p: [0, 1.5, 0], yaw: 0.78, pitch: 0.5, dist: 20.5 },
    kicker: 'Welcome in', title: 'This is my room.', body: 'Scroll to look around, or click on anything.' },
  { id: 'setup', label: 'Work', hold: [2.4, 3.0], view: { p: [-1.6, 1.7, -2.6], yaw: 0.36, pitch: 0.5, dist: 7.0, shift: 1 },
    kicker: 'Work', title: 'ML Engineer at Winners (IBL Group)', cta: 'Full experience', href: '/about#experience',
    bullets: ["Led Retail IQ, now the company's highest-revenue digital initiative", 'Project owner of the promotion optimiser', "Live Oracle → Snowflake pipelines and the team's MLOps"] },
  { id: 'skills', label: 'Skills', hold: [3.8, 4.4], view: { p: [-2.95, 1.4, -0.75], yaw: 1.12, pitch: 0.2, dist: 7.6, shift: 1 },
    kicker: 'Skills', title: 'From source to insight', cta: 'All skills', href: '/about#skills',
    chips: ['Snowflake', 'Microsoft Fabric', 'Power BI', 'Looker', 'Azure', 'AWS', 'Airflow', 'Airbyte', 'Informatica', 'Terraform', 'Docker', 'Kubernetes'] },
  { id: 'certs', label: 'Certs', hold: [5.2, 5.8], view: { p: [-3.2, 2.25, 1.05], yaw: 1.22, pitch: 0.16, dist: 7.0, shift: 1 },
    kicker: 'Certifications', title: '10 certifications', cta: 'All certifications', href: '/about#certifications',
    bullets: ['Machine Learning Specialization, DeepLearning.AI', 'Six Oracle Cloud certifications, including Generative AI and Multicloud Architect', 'AWS Serverless badge and CS50 Ready Player 50', 'ISC2 Certified in Cybersecurity (CC)'] },
  { id: 'awards', label: 'Awards', hold: [6.6, 7.2], view: { p: [-3.25, 1.95, 1.65], yaw: 1.22, pitch: 0.16, dist: 5.0, shift: 1 },
    kicker: 'Awards', title: 'Top student and HSC laureate', cta: 'More', href: '/about#awards',
    bullets: ['Top student in Computer Science for all 3 years at Middlesex University', 'HSC Laureate 2023 (science side), ranked nationally in several subjects and the first girl in physics nationwide'] },
  { id: 'home', label: 'Travel', hold: [8.0, 8.6], view: { p: [1.45, 1.85, -3.0], yaw: 0.22, pitch: 0.2, dist: 7.0, shift: 1 },
    kicker: 'Travel', title: 'I like to travel the world', cta: 'More about me', href: '/about#beyond',
    body: 'We only have one life, so we need to make the most of it. Home is Mauritius, but I always want to see more.' },
  { id: 'hobbies', label: 'Hobbies', hold: [9.4, 10.0], view: { p: [-2.95, 2.75, -0.75], yaw: 1.05, pitch: 0.42, dist: 4.2, shift: 1 },
    kicker: 'Off the clock', title: 'Lego & gaming', cta: 'More about me', href: '/about#beyond',
    body: 'I play lots of games with my friends, and I have a Lego collection that I build in my free time.' },
]
const LABELS = { pc: 'Gaming setup', me: 'Hafsah', switch: 'Switch 2', shelf: 'Bookshelf', certs: 'Certificates', shields: 'Awards', window: 'Window', globe: 'Globe', travel: 'Suitcase', lego: 'Lego' }
const JUMP = { pc: 1, me: 1, switch: 6, shelf: 2, certs: 3, shields: 4, window: 5, globe: 5, travel: 5, lego: 6 }
const FLOW = ['Source', 'Pipelines', 'Warehouse', 'Insights', 'Dashboards', 'Production']
const EXPERTISE = [
  { title: 'Data engineering', body: 'Pipelines that move data reliably from source systems into the warehouse, ready for analytics.', tools: ['Airbyte', 'Airflow', 'Informatica'] },
  { title: 'Data modelling', body: 'Structuring warehouse data so it is fast to query and easy for everyone to understand.', tools: ['Snowflake', 'SQL', 'Oracle'] },
  { title: 'Cloud architecture', body: 'Designing the architecture behind the data, so it is secure, scalable and cost-aware.', tools: ['Azure', 'AWS', 'Oracle Cloud'] },
  { title: 'Insights & analytics', body: 'Digging into the numbers to find what is really going on, and explaining it simply.', tools: ['Analysis', 'Reporting', 'Storytelling'] },
  { title: 'Dashboards', body: 'Turning business data into clear dashboards that people actually use to make decisions.', tools: ['Power BI', 'Looker', 'Fabric'] },
  { title: 'Workflow automation', body: 'Automating repetitive tasks and whole workflows for departments, so teams can spend their time on real work.', tools: ['Airflow', 'Zapier'] },
  { title: 'DevOps & MLOps', body: 'Taking work all the way to production: automated testing, deployment and infrastructure as code.', tools: ['GitHub CI/CD', 'Docker', 'Kubernetes', 'Terraform'] },
]

const stageRef = ref(null), tipRef = ref(null), sectionRef = ref(null)
const heroRef = ref(null), hintRef = ref(null), railRef = ref(null)
const wide = ref(true)
const hover = ref(null)
const stop = ref(-1)
const shownStop = ref(0)

let room = null, dead = false, vh = 0, laidOut = false

const unit = () => Math.max(520, vh || window.innerHeight) * 0.6

function buildTimeline(isWide) {
  const keys = [{ u: 0, view: isWide ? FAR : FAR_NARROW }]
  STOPS.forEach((s) => {
    const v = isWide ? s.view : { ...s.view, shift: 1 }
    keys.push({ u: s.hold[0], view: v }, { u: s.hold[1], view: v })
  })
  keys.push({ u: uTotal.value, view: EXIT })
  return keys
}

function applyLayout(isWide) {
  room.setLayout(isWide ? { sx: 0.26 } : { sy: 0.34, fit: 1.9 })
  room.setTimeline(buildTimeline(isWide))
}

function progress() {
  const el = sectionRef.value
  if (!el) return 0
  return Math.max(0, Math.min(uTotal.value, -el.getBoundingClientRect().top / unit()))
}

function update() {
  const u = progress()
  if (room) room.setProgress(u)
  const h = heroRef.value, hint = hintRef.value, rail = railRef.value
  if (h) { const k = Math.min(1, u / 0.7); h.style.opacity = String(1 - k); h.style.transform = `translateY(${-k * 70}px)` }
  if (hint) hint.style.opacity = String(1 - Math.min(1, u / 0.25))
  if (rail) { const on = u > 0.7 && u < 10.4; rail.style.opacity = on ? '1' : '0'; rail.style.pointerEvents = on ? 'auto' : 'none' }
  let s = -1
  STOPS.forEach((st, i) => { if (u >= st.hold[0] - 0.28 && u <= st.hold[1] + 0.28) s = i })
  if (s !== stop.value) { stop.value = s; if (s >= 0) shownStop.value = s }
}

function scrollToStop(i) {
  const el = sectionRef.value
  if (!el) return
  const s = STOPS[i]
  const top = el.getBoundingClientRect().top + window.scrollY + ((s.hold[0] + s.hold[1]) / 2) * unit()
  window.scrollTo({ top, behavior: 'smooth' })
}

function jump(id) {
  const i = JUMP[id]
  if (i != null) scrollToStop(i)
}

function onResize() {
  const w = window.innerWidth, h = window.innerHeight
  if (!vh || Math.abs(h - vh) / vh > 0.25) vh = h
  const isWide = w >= 900
  uTotal.value = isWide ? 11 : 10.5
  if (isWide !== wide.value || !laidOut) {
    laidOut = true
    wide.value = isWide
    if (room) applyLayout(isWide)
  }
  update()
}

onMounted(async () => {
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', onResize)
  onResize()
  const mod = await import('../lib/room2.js')
  if (dead || !stageRef.value) return
  room = mod.createRoom(stageRef.value, {
    dark: dark.value, fov: 32, tipEl: tipRef.value, blobOpacity: 0.26,
    onHover: (id) => { hover.value = id },
    onSelect: (id) => jump(id),
  })
  applyLayout(wide.value)
  update()
})

onBeforeUnmount(() => {
  dead = true
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', onResize)
  if (room) room.dispose()
})

watch(dark, (d) => { if (room) room.setTheme(d) })

const on = computed(() => stop.value >= 0)
const cap = computed(() => {
  const s = STOPS[shownStop.value] || STOPS[0]
  return {
    ...s,
    chips: (s.chips || []).slice(0, wide.value ? 99 : 9),
    count: String(shownStop.value + 1).padStart(2, '0') + ' / ' + String(STOPS.length).padStart(2, '0'),
  }
})
const capStyle = computed(() => {
  const w = wide.value
  return {
    left: w ? 'clamp(16px,4vw,64px)' : '14px',
    right: w ? 'auto' : '14px',
    top: w ? '50%' : 'auto',
    bottom: w ? 'auto' : '18px',
    transform: `translateY(${w ? (on.value ? '-50%' : 'calc(-50% + 16px)') : (on.value ? '0px' : '16px')})`,
    width: w ? 'min(400px,36vw)' : 'auto',
    opacity: on.value ? 1 : 0,
    pointerEvents: on.value ? 'auto' : 'none',
  }
})
const capCardStyle = computed(() => {
  const w = wide.value
  return { padding: w ? '22px 24px 24px' : '16px 18px 18px', gap: w ? '14px' : '10px', maxHeight: w ? 'calc(100dvh - 190px)' : '42dvh' }
})
const capTitleSize = computed(() => (wide.value ? 'clamp(26px,2.4vw,34px)' : '23px'))
const capTextSize = computed(() => (wide.value ? '15.5px' : '14.5px'))
const railStyle = computed(() => {
  const w = wide.value
  return {
    left: w ? 'auto' : '50%', right: w ? 'clamp(12px,2.4vw,32px)' : 'auto',
    top: w ? '50%' : '78px', transform: w ? 'translateY(-50%)' : 'translateX(-50%)',
    flexDirection: w ? 'column' : 'row', padding: w ? '8px 10px' : '4px 10px',
  }
})
</script>

<template>
  <div style="min-height:100vh;background:var(--bg);color:var(--ink);font-family:'IBM Plex Sans',system-ui,sans-serif;transition:background-color .6s ease,color .6s ease">
    <SiteHeader active="home" fixed :wide="wide" />

    <section ref="sectionRef" :style="{ height: (1 + 0.6 * uTotal) * 100 + 'vh' }" style="position:relative">
      <div style="position:sticky;top:0;height:100svh;min-height:520px;overflow:hidden">
        <div ref="stageRef" style="position:absolute;inset:0;z-index:1"></div>

        <div ref="heroRef" style="position:absolute;left:0;right:0;top:0;z-index:3;padding:clamp(96px,14vh,140px) clamp(16px,3vw,40px) 0;display:flex;flex-direction:column;gap:18px;pointer-events:none;will-change:opacity,transform">
          <span style="align-self:flex-start;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:6px 10px;border-radius:8px;border:2px solid var(--line);background:var(--panel)">Machine Learning Engineer · Mauritius</span>
          <h1 style="margin:0;font-size:clamp(58px,10.5vw,176px);font-family:'Young Serif',serif;font-weight:400;letter-spacing:-0.025em;line-height:.95">Hafsah Joomun<span style="color:#bc4749">.</span></h1>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:14px 28px">
            <p style="margin:0;font-size:clamp(17px,1.5vw,20px);line-height:1.45;font-weight:500;max-width:520px;color:var(--muted);text-wrap:pretty">I take data from source to insight: pipelines, warehouses, dashboards and models.</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;pointer-events:auto">
              <router-link to="/about" style="padding:12px 20px;border-radius:14px;background:#606c38;color:#f2e8cf;font-weight:700;font-size:16px;border:2px solid #24261c;box-shadow:4px 4px 0 #24261c">About me</router-link>
              <a href="/uploads/Hafsah_Joomun_CV.pdf" target="_blank" style="padding:12px 20px;border-radius:14px;background:var(--card);font-weight:700;font-size:16px;border:2px solid var(--line);box-shadow:4px 4px 0 var(--line)">Download CV</a>
            </div>
          </div>
        </div>

        <div ref="hintRef" style="position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:3;display:flex;align-items:center;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.04em;padding:8px 14px;border-radius:999px;background:var(--card);border:2px solid var(--line);pointer-events:none;white-space:nowrap">
          <span>Scroll to step inside</span><span style="font-size:14px">↓</span>
        </div>

        <div ref="tipRef" :style="{ opacity: hover ? 1 : 0 }" style="position:absolute;left:0;top:0;z-index:5;pointer-events:none;transition:opacity .15s ease">
          <div style="transform:translate(14px,-46px);display:flex;align-items:center;gap:8px;background:#24261c;color:#f2e8cf;border-radius:10px;padding:7px 12px;font-weight:700;font-size:14px;white-space:nowrap">
            <span style="width:7px;height:7px;border-radius:2px;background:#bc4749"></span><span>{{ hover ? LABELS[hover] || '' : '' }}</span>
          </div>
        </div>

        <aside :style="capStyle" style="position:absolute;z-index:4;transition:opacity .35s ease,transform .35s ease">
          <div :style="capCardStyle" style="background:var(--card);border:2px solid var(--line);border-radius:22px;box-shadow:6px 6px 0 var(--line);display:flex;flex-direction:column;overflow:auto;transition:background .6s">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;text-transform:uppercase">
              <span style="color:var(--kick);font-weight:600">{{ cap.kicker }}</span>
              <span style="color:var(--muted)">{{ cap.count }}</span>
            </div>
            <h2 :style="{ fontSize: capTitleSize }" style="margin:0;font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em;line-height:1.02;text-wrap:balance">{{ cap.title }}</h2>
            <p v-if="cap.body" style="margin:0;font-size:16.5px;line-height:1.5;color:var(--muted);text-wrap:pretty">{{ cap.body }}</p>
            <div v-if="cap.bullets" style="display:flex;flex-direction:column;gap:9px">
              <div v-for="b in cap.bullets" :key="b" :style="{ fontSize: capTextSize }" style="display:flex;gap:10px;line-height:1.42">
                <span style="flex:none;width:8px;height:8px;margin-top:7px;border-radius:2px;background:#bc4749"></span><span style="text-wrap:pretty">{{ b }}</span>
              </div>
            </div>
            <div v-if="cap.chips.length" style="display:flex;flex-wrap:wrap;gap:6px">
              <span v-for="c in cap.chips" :key="c" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;padding:5px 9px;border-radius:8px;border:1.5px solid var(--line)">{{ c }}</span>
            </div>
            <router-link v-if="cap.cta" :to="cap.href" style="align-self:flex-start;font-weight:700;font-size:15px;border-bottom:2px solid currentColor;padding-bottom:1px">{{ cap.cta }} →</router-link>
          </div>
        </aside>

        <nav ref="railRef" aria-label="Room tour" :style="railStyle" style="position:absolute;z-index:4;display:flex;gap:2px;border-radius:16px;background:var(--card);border:2px solid var(--line);opacity:0;pointer-events:none;transition:opacity .3s ease,background .6s">
          <button v-for="(r, i) in STOPS" :key="r.id" @click="scrollToStop(i)" :title="r.label" style="display:flex;align-items:center;justify-content:flex-end;gap:10px;padding:6px 4px;border:0;background:transparent;cursor:pointer;color:var(--ink);font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.04em">
            <span v-if="wide" :style="{ opacity: stop === i ? 1 : 0.5 }" style="transition:opacity .25s">{{ r.label }}</span>
            <span :style="{ width: stop === i ? '14px' : '10px', height: stop === i ? '14px' : '10px', background: stop === i ? '#606c38' : 'var(--card)' }" style="border-radius:50%;border:2px solid var(--line);transition:all .25s ease"></span>
          </button>
        </nav>
      </div>
    </section>

    <section id="expertise" style="max-width:1240px;margin:0 auto;padding:clamp(24px,9vw,120px) clamp(16px,3vw,40px) 40px;display:flex;flex-direction:column;gap:36px">
      <div style="display:flex;flex-direction:column;gap:14px">
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--kick)">What I do</span>
        <h2 style="margin:0;font-size:clamp(40px,5.4vw,76px);font-family:'Young Serif',serif;font-weight:400;letter-spacing:-0.025em;line-height:.95">The whole lifecycle<span style="color:#bc4749">.</span></h2>
        <p style="margin:0;font-size:clamp(17px,1.5vw,20px);line-height:1.5;color:var(--muted);max-width:640px;text-wrap:pretty">I build the data, the architecture behind it and everything on top, and I take it all the way to production.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px 6px">
        <template v-for="(f, i) in FLOW" :key="f">
          <span class="flow-pill" :class="{ final: i === FLOW.length - 1 }">{{ f }}</span>
          <span v-if="i < FLOW.length - 1" style="font-family:'IBM Plex Mono',monospace;color:var(--muted)">→</span>
        </template>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:22px">
        <article v-for="(item, i) in EXPERTISE" :key="item.title" class="expertise-card">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--kick)">0{{ i + 1 }}</span>
          <h3 style="margin:0;font-size:30px;font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em;line-height:1.05">{{ item.title }}</h3>
          <p style="margin:0;font-size:16px;line-height:1.5;color:var(--muted);text-wrap:pretty">{{ item.body }}</p>
          <div style="margin-top:auto;padding-top:6px;display:flex;flex-wrap:wrap;gap:6px">
            <span v-for="t in item.tools" :key="t" style="font-family:'IBM Plex Mono',monospace;font-size:12.5px;padding:5px 9px;border-radius:8px;border:1.5px solid var(--line)">{{ t }}</span>
          </div>
        </article>
        <router-link to="/about" class="expertise-card" style="border-style:dashed">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--kick)">+</span>
          <h3 style="margin:0;font-size:30px;font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em;line-height:1.05">And more</h3>
          <span style="margin-top:auto;font-weight:700;font-size:15px">More about me →</span>
        </router-link>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.expertise-card {
  border: 2px solid var(--line);
  border-radius: 22px;
  background: var(--card);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 0 var(--line);
  transition: transform .2s ease, box-shadow .2s ease, background .6s;
}
.expertise-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 6px 6px 0 var(--line);
}
.flow-pill {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  padding: 7px 12px;
  border-radius: 999px;
  border: 2px solid var(--line);
  background: var(--card);
}
.flow-pill.final {
  background: #bc4749;
  border-color: #bc4749;
  color: #faf5e6;
}
</style>
