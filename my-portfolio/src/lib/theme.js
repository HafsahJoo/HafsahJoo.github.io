import { ref } from 'vue'

export const VARS = {
  light: { bg: '#f2e8cf', ink: '#24261c', muted: '#5e5c4c', card: '#faf5e6', panel: '#ccd5ae', line: '#24261c', rule: 'rgba(36,38,28,.16)', kick: '#335c67', track: '#ccd5ae', knob: '#d4a373', knobShadow: '0 0 0 2px #24261c', knobX: '0px', knobR: '0deg' },
  dark: { bg: '#171912', ink: '#ece4cc', muted: '#aaa791', card: '#212419', panel: '#353b2a', line: '#ece4cc', rule: 'rgba(236,228,204,.16)', kick: '#9cc3cc', track: '#353b2a', knob: 'transparent', knobShadow: 'inset -8px -3px 0 0 #f2e8cf', knobX: '30px', knobR: '-30deg' },
}

export const dark = ref(false)

function apply(isDark) {
  const v = VARS[isDark ? 'dark' : 'light']
  const root = document.documentElement
  Object.keys(v).forEach((k) => root.style.setProperty('--' + k, v[k]))
  root.classList.toggle('dark', isDark)
  document.body.style.background = v.bg
}

export function initTheme() {
  let saved = false
  try { saved = localStorage.getItem('hj-theme') === 'dark' } catch (e) {}
  dark.value = saved
  apply(saved)
}

export function toggleTheme() {
  dark.value = !dark.value
  apply(dark.value)
  try { localStorage.setItem('hj-theme', dark.value ? 'dark' : 'light') } catch (e) {}
}
