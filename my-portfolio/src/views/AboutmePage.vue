<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const SKILLS = [
  { name: 'Data warehouse', list: 'Snowflake, GCP' },
  { name: 'BI tools', list: 'Power BI, Looker, Microsoft Fabric' },
  { name: 'ETL / ELT', list: 'Airbyte, Informatica, Talend, Apache Airflow' },
  { name: 'Cloud', list: 'Azure, AWS, Oracle Cloud' },
  { name: 'DevOps & MLOps', list: 'Docker, Kubernetes, Terraform, GitHub CI/CD' },
  { name: 'Databases', list: 'Oracle, MongoDB, SQL' },
]
const CERTS = [
  { title: 'Generative AI Professional', issuer: 'Oracle' },
  { title: 'Data Science Professional', issuer: 'Oracle' },
  { title: 'Multicloud Architect Professional', issuer: 'Oracle' },
  { title: 'Certified in Cybersecurity (CC)', issuer: 'ISC2' },
]
const GLANCE = [
  { k: 'Current role', v: 'ML Engineer, Winners (IBL Group)' },
  { k: 'Experience', v: 'Nearly 2 years, Data & AI' },
  { k: 'Location', v: 'Mauritius' },
  { k: 'Education', v: 'BSc CS & System Eng., 2025' },
  { k: 'Certifications', v: '4 (Oracle, ISC2)' },
]
const JOBS = [
  {
    when: 'Nov 2025 – Now', current: true, title: 'Machine Learning Engineer', org: 'Winners (IBL Group) · Data & AI',
    groups: [
      { name: 'Highlights', items: [
        'Led and built <strong>Retail IQ</strong>, the supplier analytics platform, end to end on Microsoft Fabric, Azure and Power BI. It is now among the company\'s highest-revenue digital initiatives.',
        'Project owner of the <strong>promotion optimiser</strong>, which finds the best promotional price for each product and analyses promotions.',
      ] },
      { name: 'Machine learning & BI', items: [
        'Contributed to a churn prediction model for loyalty-programme customers at risk of leaving.',
        'Built a string matching algorithm to match the same product across different systems.',
        'Build Power BI dashboards that turn business data into clear, actionable insights.',
      ] },
      { name: 'Data engineering & MLOps', items: [
        'Build ETL/ELT pipelines and work in Snowflake daily to improve warehouse performance. Designed a full Snowflake backup solution on AWS.',
        'Ingest with Airbyte; building custom CDC-style scripts that bring live Oracle changes into Snowflake.',
        'Own the team\'s MLOps and DevOps: GitHub CI/CD that tests and deploys code, and infrastructure as code with Terraform. Automated manual work for other departments with Apache Airflow.',
      ] },
    ],
  },
  {
    when: 'Aug – Nov 2025', title: 'Data Analyst', org: 'Checkout.com · Data Insights & Analytics',
    groups: [{ name: '', items: [
      'Built a cost-of-service model showing each department what it costs to handle its customer support tickets.',
      'Built dashboards in Looker and Zendesk on Snowflake and GCP data; automated manual tasks with Zapier.',
    ] }],
  },
  {
    when: 'May – Aug 2025', title: 'App Development Associate', org: 'Accenture · Data & AI',
    groups: [{ name: '', items: [
      'Built, tested and deployed interfaces on the Informatica Application Integration platform.',
      'Designed and implemented data pipelines and transformations with Informatica Data Integration.',
    ] }],
  },
]
const BEYOND = [
  { title: 'Lego', text: 'Sets and builds on the shelf.' },
  { title: 'Gaming', text: 'Minecraft on my Switch 2.' },
  { title: 'Travel', text: 'Exploring new places.' },
  { title: 'Videos', text: 'Tech explainers and travel vlogs.' },
]

const wide = ref(true)
const onResize = () => { wide.value = window.innerWidth >= 760 }
onMounted(() => { onResize(); window.addEventListener('resize', onResize) })
onBeforeUnmount(() => window.removeEventListener('resize', onResize))

const H2 = "margin:0;font-family:'IBM Plex Sans Condensed',sans-serif;font-weight:700;letter-spacing:-0.005em"
const MONO = "font-family:'IBM Plex Mono',monospace"
</script>

<template>
  <div style="min-height:100vh;background:var(--bg);color:var(--ink);font-family:'IBM Plex Sans',system-ui,sans-serif;transition:background-color .6s ease,color .6s ease">
    <SiteHeader active="about" :wide="wide" />

    <main style="max-width:1240px;margin:0 auto;padding:0 clamp(16px,3vw,40px)">

      <section style="padding:clamp(28px,5vw,64px) 0 clamp(28px,4vw,44px);display:flex;flex-wrap:wrap;align-items:flex-end;gap:32px 56px">
        <div style="flex:1 1 520px;display:flex;flex-direction:column;gap:18px">
          <span :style="MONO" style="font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--kick)">About</span>
          <h1 style="margin:0;font-size:clamp(52px,7.5vw,104px);font-family:'Young Serif',serif;font-weight:400;letter-spacing:-0.025em;line-height:.95">Hafsah Joomun</h1>
          <div style="font-size:clamp(20px,1.9vw,24px);font-weight:700;letter-spacing:-0.01em">Machine Learning Engineer · Data &amp; AI</div>
          <p style="margin:0;font-size:18px;line-height:1.6;color:var(--muted);max-width:640px;text-wrap:pretty">Nearly two years of hands-on experience across data engineering, business intelligence, machine learning and MLOps. I take data from source to insight and own everything in between, and I built my company's highest-revenue digital initiative end to end.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;padding-top:4px">
            <a href="/uploads/cv.pdf" target="_blank" style="padding:12px 20px;border-radius:14px;background:#606c38;color:#f2e8cf;font-weight:700;font-size:16px;border:2px solid #24261c;box-shadow:4px 4px 0 #24261c">Download CV</a>
            <a href="mailto:hafsah260103@gmail.com" style="padding:12px 20px;border-radius:14px;font-weight:700;font-size:16px;border:2px solid var(--line)">Email</a>
            <a href="https://www.linkedin.com/in/hafsah-joomun/" target="_blank" rel="noopener" style="padding:12px 20px;border-radius:14px;font-weight:700;font-size:16px;border:2px solid var(--line)">LinkedIn</a>
          </div>
        </div>
        <div style="flex:0 1 260px;position:relative;aspect-ratio:1/1;border:2px solid var(--line);border-radius:24px;overflow:hidden;background:var(--card)">
          <img src="/assets/pp/dp.jpeg" alt="Hafsah Joomun" style="width:100%;height:100%;object-fit:cover;display:block" />
        </div>
      </section>

      <section style="display:flex;flex-wrap:wrap;gap:2px;border:2px solid var(--line);border-radius:20px;overflow:hidden;background:var(--line);transition:background .6s">
        <div v-for="g in GLANCE" :key="g.k" style="flex:1 1 180px;padding:18px 20px;display:flex;flex-direction:column;gap:6px;background:var(--card);transition:background .6s">
          <span :style="MONO" style="font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">{{ g.k }}</span>
          <span style="font-size:17px;font-weight:700;line-height:1.3">{{ g.v }}</span>
        </div>
      </section>

      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;gap:48px 56px;padding:clamp(48px,7vw,88px) 0 0">

        <section id="experience" style="flex:1 1 560px;min-width:0;display:flex;flex-direction:column;gap:8px;scroll-margin-top:24px">
          <h2 :style="H2" style="margin-bottom:14px;font-size:clamp(36px,4vw,52px);line-height:1">Experience</h2>
          <article v-for="(j, i) in JOBS" :key="j.title" :style="i === JOBS.length - 1 ? 'border-bottom:2px solid var(--line)' : ''" style="display:flex;flex-wrap:wrap;gap:10px 28px;padding:26px 0;border-top:2px solid var(--line)">
            <div style="flex:0 0 150px;display:flex;flex-direction:column;gap:6px">
              <span :style="MONO" style="font-size:13px;font-weight:600">{{ j.when }}</span>
              <span v-if="j.current" :style="MONO" style="align-self:flex-start;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;padding:3px 7px;border-radius:6px;background:#606c38;color:#f2e8cf">Current</span>
            </div>
            <div style="flex:1 1 380px;min-width:0;display:flex;flex-direction:column;gap:16px">
              <div style="display:flex;flex-direction:column;gap:3px">
                <h3 :style="H2" style="font-size:24px">{{ j.title }}</h3>
                <span style="font-size:17px;font-weight:600;color:var(--muted)">{{ j.org }}</span>
              </div>
              <div v-for="g in j.groups" :key="g.name" style="display:flex;flex-direction:column;gap:8px">
                <span v-if="g.name" :style="MONO" style="font-size:11.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--kick)">{{ g.name }}</span>
                <div v-for="t in g.items" :key="t" style="display:flex;gap:10px;font-size:16.5px;line-height:1.5">
                  <span style="flex:none;width:7px;height:7px;margin-top:9px;border-radius:2px;background:var(--ink)"></span>
                  <span style="text-wrap:pretty" v-html="t"></span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <aside style="flex:1 1 320px;max-width:100%;display:flex;flex-direction:column;gap:20px;position:sticky;top:24px">
          <section id="skills" style="border:2px solid var(--line);border-radius:20px;background:var(--card);overflow:hidden;transition:background .6s;scroll-margin-top:24px">
            <h2 :style="H2" style="padding:16px 20px;font-size:22px;border-bottom:2px solid var(--line)">Skills</h2>
            <div style="display:flex;flex-direction:column">
              <div v-for="g in SKILLS" :key="g.name" style="display:flex;flex-direction:column;gap:3px;padding:12px 20px;border-bottom:1px solid var(--rule)">
                <span :style="MONO" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">{{ g.name }}</span>
                <span style="font-size:15.5px;font-weight:600;line-height:1.4">{{ g.list }}</span>
              </div>
              <div style="display:flex;flex-direction:column;gap:3px;padding:12px 20px 16px">
                <span :style="MONO" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">Strengths</span>
                <span style="font-size:15.5px;font-weight:600;line-height:1.4">Problem solving, teamwork, communication, project management</span>
              </div>
            </div>
          </section>

          <section id="certifications" style="border:2px solid var(--line);border-radius:20px;background:var(--card);overflow:hidden;transition:background .6s;scroll-margin-top:24px">
            <h2 :style="H2" style="padding:16px 20px;font-size:22px;border-bottom:2px solid var(--line)">Certifications</h2>
            <div v-for="c in CERTS" :key="c.title" style="display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:12px 20px;border-bottom:1px solid var(--rule)">
              <span style="font-size:15.5px;font-weight:600;line-height:1.35">{{ c.title }}</span>
              <span :style="MONO" style="flex:none;font-size:11.5px;color:var(--muted)">{{ c.issuer }}</span>
            </div>
          </section>

          <section id="education" style="border:2px solid var(--line);border-radius:20px;background:var(--card);overflow:hidden;transition:background .6s;scroll-margin-top:24px">
            <h2 :style="H2" style="padding:16px 20px;font-size:22px;border-bottom:2px solid var(--line)">Education</h2>
            <div style="display:flex;flex-direction:column;gap:3px;padding:14px 20px;border-bottom:1px solid var(--rule)">
              <div style="display:flex;justify-content:space-between;gap:12px"><span style="font-size:15.5px;font-weight:700;line-height:1.35">BSc Computer Science &amp; System Engineering</span><span :style="MONO" style="flex:none;font-size:12px">2025</span></div>
              <span style="font-size:15px;color:var(--muted)">Middlesex University Mauritius</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:3px;padding:14px 20px 16px">
              <div style="display:flex;justify-content:space-between;gap:12px"><span style="font-size:15.5px;font-weight:700;line-height:1.35">High School</span><span :style="MONO" style="flex:none;font-size:12px">2023</span></div>
              <span style="font-size:15px;color:var(--muted)">Queen Elizabeth College</span>
            </div>
          </section>
        </aside>
      </div>

      <section id="beyond" style="padding:clamp(56px,8vw,100px) 0 0;display:flex;flex-direction:column;gap:22px;scroll-margin-top:24px">
        <h2 :style="H2" style="font-size:clamp(36px,4vw,52px);line-height:1">Off the clock</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px">
          <div v-for="b in BEYOND" :key="b.title" style="display:flex;flex-direction:column;gap:12px">
            <div style="position:relative;aspect-ratio:4/3;border:2px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card);display:grid;place-items:center">
              <img v-if="b.img" :src="b.img" :alt="b.title" style="width:100%;height:100%;object-fit:cover;display:block" />
              <span v-else :style="MONO" style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)">{{ b.title }}</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:2px">
              <span :style="H2" style="font-size:19px">{{ b.title }}</span>
              <span style="font-size:15.5px;color:var(--muted)">{{ b.text }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter back-link top="100px" />
  </div>
</template>
