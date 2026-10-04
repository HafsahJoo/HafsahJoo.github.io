<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { dark } from '../lib/theme'

const U = 9.6
const FAR = { p: [0, 9.6, 0], yaw: 0.78, pitch: 0.5, dist: 43 }
const FAR_NARROW = { p: [0, 6.8, 0], yaw: 0.78, pitch: 0.5, dist: 22 }
const EXIT = { p: [0, -4.6, 0], yaw: 1.3, pitch: 0.62, dist: 36 }
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
const STOPS = [
  { id: 'overview', label: 'Stop 1', hold: [1.0, 1.6], view: { p: [0, 1.5, 0], yaw: 0.78, pitch: 0.5, dist: 20.5 },
    kicker: 'Kicker', title: 'Placeholder title', body: LOREM },
  { id: 'setup', label: 'Stop 2', hold: [2.4, 3.0], view: { p: [-1.6, 1.7, -2.6], yaw: 0.36, pitch: 0.5, dist: 7.0, shift: 1 },
    kicker: 'Kicker', title: 'Placeholder title', cta: 'Link text', href: '/about#experience',
    bullets: ['Placeholder bullet one', 'Placeholder bullet two', 'Placeholder bullet three'] },
  { id: 'skills', label: 'Stop 3', hold: [3.8, 4.4], view: { p: [-2.95, 1.4, -0.75], yaw: 1.12, pitch: 0.2, dist: 7.6, shift: 1 },
    kicker: 'Kicker', title: 'Placeholder title', cta: 'Link text', href: '/about#skills',
    chips: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8'] },
  { id: 'certs', label: 'Stop 4', hold: [5.2, 5.8], view: { p: [-3.2, 2.25, 1.05], yaw: 1.22, pitch: 0.16, dist: 7.0, shift: 1 },
    kicker: 'Kicker', title: 'Placeholder title', cta: 'Link text', href: '/about#certifications',
    bullets: ['Placeholder bullet one', 'Placeholder bullet two', 'Placeholder bullet three', 'Placeholder bullet four'] },
  { id: 'home', label: 'Stop 5', hold: [6.6, 7.2], view: { p: [1.45, 1.85, -3.0], yaw: 0.22, pitch: 0.2, dist: 7.0, shift: 1 },
    kicker: 'Kicker', title: 'Placeholder title', cta: 'Link text', href: '/about#education', body: LOREM },
  { id: 'hobbies', label: 'Stop 6', hold: [8.0, 8.6], view: { p: [-2.95, 2.75, -0.75], yaw: 1.05, pitch: 0.42, dist: 4.2, shift: 1 },
    kicker: 'Kicker', title: 'Placeholder title', cta: 'Link text', href: '/about#beyond', body: LOREM },
]
const LABELS = { pc: 'Label', me: 'Label', switch: 'Label', shelf: 'Label', certs: 'Label', shields: 'Label', window: 'Label', globe: 'Label', travel: 'Label', lego: 'Label' }
const JUMP = { pc: 1, me: 1, switch: 5, shelf: 2, certs: 3, shields: 3, window: 4, globe: 4, travel: 4, lego: 5 }
const CURRENT = [1, 2, 3].map((n) => ({ tag: `0${n} · Tag`, title: 'Placeholder title', body: LOREM, stack: 'Tag · Tag · Tag' }))

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
  keys.push({ u: U, view: EXIT })
  return keys
}

function applyLayout(isWide) {
  room.setLayout(isWide ? { sx: 0.26 } : { sy: 0.34, fit: 1.9 })
  room.setTimeline(buildTimeline(isWide))
}

function progress() {
  const el = sectionRef.value
  if (!el) return 0
  return Math.max(0, Math.min(U, -el.getBoundingClientRect().top / unit()))
}

function update() {
  const u = progress()
  if (room) room.setProgress(u)
  const h = heroRef.value, hint = hintRef.value, rail = railRef.value
  if (h) { const k = Math.min(1, u / 0.7); h.style.opacity = String(1 - k); h.style.transform = `translateY(${-k * 70}px)` }
  if (hint) hint.style.opacity = String(1 - Math.min(1, u / 0.25))
  if (rail) { const on = u > 0.7 && u < U - 0.6; rail.style.opacity = on ? '1' : '0'; rail.style.pointerEvents = on ? 'auto' : 'none' }
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

    <section ref="sectionRef" style="position:relative;height:680vh">
      <div style="position:sticky;top:0;height:100dvh;min-height:520px;overflow:hidden">
        <div ref="stageRef" style="position:absolute;inset:0;z-index:1"></div>

        <div ref="heroRef" style="position:absolute;left:0;right:0;top:0;z-index:3;padding:clamp(96px,14vh,140px) clamp(16px,3vw,40px) 0;display:flex;flex-direction:column;gap:18px;pointer-events:none;will-change:opacity,transform">
          <span style="align-self:flex-start;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:6px 10px;border-radius:8px;border:2px solid var(--line);background:var(--panel)">Role · Location</span>
          <h1 style="margin:0;font-size:clamp(58px,10.5vw,176px);font-family:'Young Serif',serif;font-weight:400;letter-spacing:-0.025em;line-height:.95">Your Name<span style="color:#bc4749">.</span></h1>
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:14px 28px">
            <p style="margin:0;font-size:clamp(17px,1.5vw,20px);line-height:1.45;font-weight:500;max-width:520px;color:var(--muted);text-wrap:pretty">{{ LOREM }}</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;pointer-events:auto">
              <router-link to="/about" style="padding:12px 20px;border-radius:14px;background:#606c38;color:#f2e8cf;font-weight:700;font-size:16px;border:2px solid #24261c;box-shadow:4px 4px 0 #24261c">Button</router-link>
              <a href="/uploads/cv.pdf" target="_blank" style="padding:12px 20px;border-radius:14px;background:var(--card);font-weight:700;font-size:16px;border:2px solid var(--line);box-shadow:4px 4px 0 var(--line)">Button</a>
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

    <section id="currently" style="max-width:1240px;margin:0 auto;padding:clamp(64px,9vw,120px) clamp(16px,3vw,40px) 40px;display:flex;flex-direction:column;gap:36px">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px">
        <h2 style="margin:0;font-size:clamp(40px,5.4vw,76px);font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em;line-height:.95;max-width:780px;text-wrap:balance">Section heading</h2>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--muted)">Company · Team · Date</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:22px">
        <article v-for="p in CURRENT" :key="p.title" style="border:2px solid var(--line);border-radius:22px;background:var(--card);padding:24px;display:flex;flex-direction:column;gap:12px;transition:background .6s">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;color:var(--kick)">{{ p.tag }}</span>
          <h3 style="margin:0;font-size:28px;font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em">{{ p.title }}</h3>
          <p style="margin:0;font-size:16px;line-height:1.5;color:var(--muted);text-wrap:pretty">{{ p.body }}</p>
          <span style="margin-top:auto;padding-top:6px;font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:var(--muted)">{{ p.stack }}</span>
        </article>
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding-top:6px;font-size:16px">
        <span style="color:var(--muted)">Placeholder text.</span>
        <router-link to="/about#experience" style="font-weight:700;border-bottom:2px solid currentColor">Link text →</router-link>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
