<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  photos: { type: Array, required: true },
  index: { type: Number, required: true },
  title: { type: String, default: '' },
})
const emit = defineEmits(['close', 'update:index'])

const current = computed(() => props.photos[props.index])
const go = (step) => emit('update:index', (props.index + step + props.photos.length) % props.photos.length)

function onKey(e) {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'ArrowLeft') go(-1)
}

let startX = null
const onTouchStart = (e) => { startX = e.touches[0].clientX }
const onTouchEnd = (e) => {
  if (startX === null) return
  const dx = e.changedTouches[0].clientX - startX
  if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
  startX = null
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

const btn = 'width:44px;height:44px;border-radius:50%;border:2px solid var(--line);background:var(--card);color:var(--ink);font-size:20px;font-weight:700;cursor:pointer;display:grid;place-items:center;flex:none;padding:0'
</script>

<template>
  <div
    role="dialog"
    aria-modal="true"
    :aria-label="title"
    @click.self="emit('close')"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    style="position:fixed;inset:0;z-index:100;background:rgba(10,11,8,.86);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:16px"
  >
    <div style="width:min(1100px,100%);display:flex;align-items:center;justify-content:space-between;gap:12px;color:#f2e8cf;font-family:'IBM Plex Mono',monospace;font-size:13px">
      <span>{{ title }} · {{ index + 1 }} / {{ photos.length }}</span>
      <button :style="btn" aria-label="Close" @click="emit('close')">✕</button>
    </div>

    <div style="width:min(1100px,100%);display:flex;align-items:center;gap:12px;min-height:0">
      <button v-if="photos.length > 1" :style="btn" aria-label="Previous photo" @click="go(-1)">←</button>
      <img
        :key="current.src"
        :src="current.src"
        :alt="title"
        style="flex:1;min-width:0;max-height:calc(100dvh - 130px);object-fit:contain;border-radius:14px;display:block"
      />
      <button v-if="photos.length > 1" :style="btn" aria-label="Next photo" @click="go(1)">→</button>
    </div>
  </div>
</template>
