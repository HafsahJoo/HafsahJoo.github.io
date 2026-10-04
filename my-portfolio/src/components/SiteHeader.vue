<script setup>
import { toggleTheme } from '../lib/theme'

defineProps({
  active: { type: String, default: 'home' },
  fixed: { type: Boolean, default: false },
  wide: { type: Boolean, default: true },
})
</script>

<template>
  <header
    :style="fixed
      ? 'position:fixed;top:0;left:0;right:0;z-index:30;pointer-events:none'
      : 'max-width:1240px;margin:0 auto'"
    style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px clamp(14px,3vw,40px)"
  >
    <router-link to="/" :style="fixed ? 'pointer-events:auto' : ''" style="display:flex;align-items:center;gap:12px">
      <span style="width:42px;height:42px;border-radius:13px;background:var(--ink);color:var(--bg);display:grid;place-items:center;font-weight:700;font-size:17px;letter-spacing:-0.03em;flex:none;transition:background .6s,color .6s">HJ</span>
    </router-link>
    <nav :style="fixed ? 'pointer-events:auto' : ''" style="display:flex;align-items:center;gap:2px;padding:5px;border:2px solid var(--line);border-radius:999px;background:var(--card);transition:background .6s">
      <router-link to="/" :style="active === 'home' ? 'background:var(--ink);color:var(--bg)' : ''" style="padding:8px 15px;border-radius:999px;font-weight:600;font-size:15px">Home</router-link>
      <router-link to="/about" :style="active === 'about' ? 'background:var(--ink);color:var(--bg)' : ''" style="padding:8px 15px;border-radius:999px;font-weight:600;font-size:15px">About</router-link>
    </nav>
    <div :style="fixed ? 'pointer-events:auto' : ''" style="display:flex;align-items:center;gap:10px">
      <button @click="toggleTheme" aria-label="Toggle dark mode" title="Toggle day / night" style="position:relative;width:70px;height:38px;border-radius:999px;border:2px solid var(--line);background:var(--track);cursor:pointer;padding:0;transition:background .6s ease;flex:none">
        <span style="position:absolute;top:5px;left:6px;width:24px;height:24px;border-radius:50%;background:var(--knob);box-shadow:var(--knobShadow);transform:translateX(var(--knobX)) rotate(var(--knobR));transition:transform .6s cubic-bezier(.5,1.5,.4,1),background .5s,box-shadow .5s"></span>
      </button>
      <a v-if="wide" href="/uploads/cv.pdf" target="_blank" style="padding:10px 18px;border-radius:999px;background:var(--ink);color:var(--bg);font-weight:700;font-size:15px;border:2px solid var(--line)">Résumé</a>
    </div>
  </header>
</template>
