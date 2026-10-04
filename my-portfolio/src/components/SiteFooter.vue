<script setup>
defineProps({ backLink: { type: Boolean, default: false }, top: { type: String, default: '80px' } })
</script>

<template>
  <footer :style="{ paddingTop: top }" style="max-width:1240px;margin:0 auto;padding-left:clamp(16px,3vw,40px);padding-right:clamp(16px,3vw,40px);padding-bottom:40px;display:flex;flex-direction:column;gap:40px">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px;border-top:2px solid var(--line);padding-top:40px">
      <h2 style="margin:0;font-size:clamp(44px,7vw,104px);font-family:'Young Serif',serif;font-weight:400;letter-spacing:-0.025em;line-height:.95">Let's talk<span style="color:#bc4749">.</span></h2>
      <div style="display:flex;flex-wrap:wrap;gap:10px">
        <a href="mailto:hafsah260103@gmail.com" style="padding:12px 18px;border-radius:14px;background:#606c38;color:#f2e8cf;font-weight:700;border:2px solid #24261c;box-shadow:4px 4px 0 #24261c">hafsah260103@gmail.com</a>
        <a href="https://www.linkedin.com/in/hafsah-joomun/" target="_blank" rel="noopener" style="padding:12px 18px;border-radius:14px;font-weight:700;border:2px solid var(--line)">LinkedIn</a>
        <a href="https://github.com/hafsahjoo" target="_blank" rel="noopener" style="padding:12px 18px;border-radius:14px;font-weight:700;border:2px solid var(--line)">GitHub</a>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--muted)">
      <span>© 2026 Hafsah Joomun</span>
      <router-link v-if="backLink" to="/">← Back to the room</router-link>
      <span v-else>Built in a tiny room in Mauritius</span>
    </div>
  </footer>
</template>
