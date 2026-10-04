import * as THREE from 'three';

const V3 = THREE.Vector3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutBack = (t) => { const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const smooth = (t) => t * t * (3 - 2 * t);
function rng(seed) { return () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export const PALETTE = {
  wall: '#f2e8cf', wallSide: '#e7dcbf', trim: '#24261c', floor: '#d4a373', floor2: '#c8975f', floorEdge: '#7d5a38',
  wood: '#c99a68', woodDark: '#7d5a38', frame: '#24261c', cabinet: '#faf5e6', desk: '#2c2e24', metal: '#3c3f33',
  beige: '#ece3c8', beigeDark: '#cfc6a8', dark: '#26281e', white: '#faf5e6',
  accent: '#bc4749', slate: '#335c67', sand: '#e0cfa6', sage: '#ccd5ae', mustard: '#d4a373',
  leaf: '#7d8f4a', leaf2: '#5b6b33', pot: '#ece3c8', rug: '#ccd5ae', rug2: '#e3e7cc', cork: '#cfa978',
  sea: '#4f8f99', beach: '#efdcb5', mountain: '#5b7a3f', trunk: '#7d5a38', sun: '#ffd27a', moon: '#f4efe0',
  skyDayTop: '#a9cdd3', skyDayBot: '#f6e3c4', skyNightTop: '#101a1e', skyNightBot: '#2b3a36',
  led: '#ffcf8a', rgb: '#b8d26b', screenBg: '#161912', globeSea: '#335c67', globeLand: '#a3b06b', beanbag: '#335c67',
  hemiDay: '#fff7e6', hemiNight: '#4c5a50', neon: '#ff7a5c', skin: '#c68b62', top: '#335c67', hijab: '#8e5468', shirt: '#e9a3ad', chairPipe: '#e9a3ad', pants: '#3a3d31',
};

export function createRoom(container, opts = {}) {
  const P = Object.assign({}, PALETTE, opts.palette || {});
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const geos = new Set(), mats = {};
  const C = (h) => new THREE.Color(h);

  function rbox(w, h, d, r = 0.05) {
    r = Math.max(0.002, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001));
    const ww = w - 2 * r, hh = h - 2 * r, rc = Math.min(r * 0.9, ww / 2, hh / 2);
    const s = new THREE.Shape(), x = -ww / 2, y = -hh / 2;
    if (rc > 0.002) {
      s.moveTo(x + rc, y); s.lineTo(x + ww - rc, y); s.quadraticCurveTo(x + ww, y, x + ww, y + rc);
      s.lineTo(x + ww, y + hh - rc); s.quadraticCurveTo(x + ww, y + hh, x + ww - rc, y + hh);
      s.lineTo(x + rc, y + hh); s.quadraticCurveTo(x, y + hh, x, y + hh - rc);
      s.lineTo(x, y + rc); s.quadraticCurveTo(x, y, x + rc, y);
    } else { s.moveTo(x, y); s.lineTo(x + ww, y); s.lineTo(x + ww, y + hh); s.lineTo(x, y + hh); s.lineTo(x, y); }
    const dd = Math.max(0.0005, d - 2 * r);
    const g = new THREE.ExtrudeGeometry(s, { depth: dd, bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 3, curveSegments: 3 });
    g.translate(0, 0, -dd / 2); geos.add(g); return g;
  }
  const box = (w, h, d) => { const g = new THREE.BoxGeometry(w, h, d); geos.add(g); return g; };
  const G = (g) => { geos.add(g); return g; };
  const M = (k, o = {}) => { const key = k + JSON.stringify(o); return (mats[key] ||= new THREE.MeshStandardMaterial({ color: P[k] || k, roughness: 0.78, metalness: 0, ...o })); };
  const glow = (k, i = 0) => new THREE.MeshStandardMaterial({ color: P[k] || k, emissive: P[k] || k, emissiveIntensity: i, roughness: 0.4 });
  function add(parent, geo, mat, x = 0, y = 0, z = 0, o = {}) {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
    m.castShadow = o.cast ?? true; m.receiveShadow = o.recv ?? true;
    if (o.rx) m.rotation.x = o.rx; if (o.ry) m.rotation.y = o.ry; if (o.rz) m.rotation.z = o.rz;
    if (o.s) m.scale.set(o.s[0], o.s[1], o.s[2]);
    parent.add(m); return m;
  }
  function rod(parent, a, b, r, mat, seg = 8) {
    const va = new V3(...a), vb = new V3(...b);
    const m = new THREE.Mesh(G(new THREE.CylinderGeometry(r, r, va.distanceTo(vb), seg)), mat);
    m.position.copy(va).add(vb).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new V3(0, 1, 0), vb.clone().sub(va).normalize());
    m.castShadow = true; parent.add(m); return m;
  }

  const lowPower = opts.lowPower ?? (Math.min(window.innerWidth, window.innerHeight) < 700);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.autoUpdate = !lowPower; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  Object.assign(canvas.style, { width: '100%', height: '100%', display: 'block', touchAction: 'pan-y', outline: 'none' });
  container.appendChild(canvas);
  const scene = new THREE.Scene();
  const world = new THREE.Group(); scene.add(world);
  const animated = [];
  let delayCursor = 0.35;
  function piece(id, x, y, z, ry = 0, kind = 'drop') {
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry;
    g.userData = { id, baseY: y, delay: kind === 'scale' ? 0 : (delayCursor += 0.06), kind };
    world.add(g); animated.push(g); return g;
  }

  const W = 7, D = 7, H = 4.2, T = 0.25, X0 = -3.5, Z0 = -3.5;
  const WX0 = 0.3, WX1 = 2.3, WY0 = 1.5, WY1 = 3.1, WCX = 1.3, WCY = 2.3, BZ = Z0 + T / 2;

  const shell = piece(null, 0, 0, 0, 0, 'scale');
  add(shell, rbox(W, 0.4, D, 0.1), M('floorEdge'), 0, -0.2, 0);
  for (let i = 0; i < 7; i++) add(shell, box(0.93, 0.03, 6.65), M(i % 2 ? 'floor2' : 'floor'), -3.25 + 0.475 + i * 0.95, 0, 0.075, { cast: false });
  add(shell, box(WX0 - X0, H, T), M('wall'), (X0 + WX0) / 2, H / 2, BZ);
  add(shell, box(3.5 - WX1, H, T), M('wall'), (WX1 + 3.5) / 2, H / 2, BZ);
  add(shell, box(WX1 - WX0, WY0, T), M('wall'), WCX, WY0 / 2, BZ);
  add(shell, box(WX1 - WX0, H - WY1, T), M('wall'), WCX, (WY1 + H) / 2, BZ);
  add(shell, box(T, H, D - T), M('wallSide'), X0 + T / 2, H / 2, Z0 + T + (D - T) / 2);
  add(shell, rbox(W + 0.06, 0.14, T + 0.1, 0.045), M('trim'), 0, H + 0.07, BZ);
  add(shell, rbox(T + 0.1, 0.14, D + 0.02, 0.045), M('trim'), X0 + T / 2, H + 0.07, 0);
  add(shell, rbox(0.13, H + 0.14, T + 0.1, 0.045), M('trim'), 3.5 - 0.035, H / 2, BZ);
  add(shell, rbox(T + 0.1, H + 0.14, 0.13, 0.045), M('trim'), X0 + T / 2, H / 2, 3.5 - 0.035);
  add(shell, box(W - T, 0.16, 0.04), M('white'), X0 + T + (W - T) / 2, 0.08, Z0 + T + 0.02);
  add(shell, box(0.04, 0.16, D - T), M('white'), X0 + T + 0.02, 0.08, Z0 + T + (D - T) / 2);
  const ledMat = glow('led');
  add(shell, box(W - T - 0.2, 0.05, 0.05), ledMat, X0 + T + (W - T) / 2, H - 0.12, Z0 + T + 0.04, { cast: false });
  add(shell, box(0.05, 0.05, D - T - 0.2), ledMat, X0 + T + 0.04, H - 0.12, Z0 + T + (D - T) / 2, { cast: false });
  add(shell, G(new THREE.CylinderGeometry(1.7, 1.7, 0.03, 48)), M('rug'), 0.9, 0.03, 0.9, { s: [1, 1, 0.72], cast: false });
  add(shell, G(new THREE.TorusGeometry(1.45, 0.025, 6, 64)), M('beigeDark'), 0.9, 0.05, 0.9, { rx: Math.PI / 2, s: [1, 0.72, 1], cast: false });

  const outside = new THREE.Group(); outside.position.set(WCX, WCY, Z0); outside.userData.id = 'window'; world.add(outside);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: { top: { value: C(P.skyDayTop) }, bot: { value: C(P.skyDayBot) } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bot; varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(0.15, 0.95, vUv.y)), 1.0);\n#include <colorspace_fragment>\n}',
  });
  const nope = { cast: false, recv: false };
  add(outside, G(new THREE.PlaneGeometry(2.8, 2.45)), skyMat, -0.2, -0.075, -0.45, nope);
  add(outside, box(2.8, 0.55, 0.36), M('sea', { roughness: 0.35 }), -0.2, -0.725, -0.25, nope);
  add(outside, box(2.8, 0.2, 0.08), M('beach'), -0.2, -0.68, -0.045, nope);
  add(outside, G(new THREE.CylinderGeometry(0.1, 0.42, 0.62, 5)), M('mountain', { flatShading: true }), -0.35, -0.16, -0.36, { ...nope, s: [1.7, 1, 0.5] });
  add(outside, G(new THREE.CylinderGeometry(0.08, 0.3, 0.3, 5)), M('mountain', { flatShading: true }), 0.35, -0.32, -0.38, { ...nope, s: [1.6, 1, 0.4] });
  const palm = new THREE.Group(); palm.position.set(0.72, -0.6, -0.12); outside.add(palm);
  rod(palm, [0, 0, 0], [0.05, 0.3, 0], 0.025, M('trunk')).castShadow = false;
  rod(palm, [0.05, 0.3, 0], [0.12, 0.6, 0], 0.022, M('trunk')).castShadow = false;
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const l = add(palm, G(new THREE.ConeGeometry(0.05, 0.36, 4)), M('leaf', { flatShading: true }), 0.12 + Math.cos(a) * 0.14, 0.58, Math.sin(a) * 0.08, nope); l.rotation.order = 'YXZ'; l.rotation.set(0, -a, -(Math.PI / 2 + 0.45)); }
  const sun = add(outside, G(new THREE.SphereGeometry(0.2, 20, 14)), new THREE.MeshBasicMaterial({ color: P.sun }), 0, 0, -0.42, nope);
  const sunHalo = add(outside, G(new THREE.CircleGeometry(0.34, 32)), new THREE.MeshBasicMaterial({ color: P.sun, transparent: true, opacity: 0.25 }), 0, 0, -0.44, nope);
  const moon = add(outside, G(new THREE.SphereGeometry(0.15, 20, 14)), new THREE.MeshBasicMaterial({ color: P.moon }), 0, 0, -0.42, nope);
  const craterMat = new THREE.MeshBasicMaterial({ color: '#d6d1c6' });
  [[0.05, 0.04, 0.035], [-0.05, -0.03, 0.025], [0.03, -0.07, 0.018]].forEach(([x, y, r]) => add(moon, G(new THREE.CircleGeometry(r, 14)), craterMat, x, y, 0.152, nope));
  const cloudMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true });
  const clouds = new THREE.Group(); outside.add(clouds);
  [[-0.75, 0.55, 1], [0.15, 0.32, 0.8], [-1.2, 0.2, 0.7]].forEach(([x, y, s]) => [[0, 0, 0.1], [0.11, 0.03, 0.08], [-0.1, -0.01, 0.07]].forEach(([dx, dy, r]) => add(clouds, G(new THREE.SphereGeometry(r * s, 10, 8)), cloudMat, x + dx * s, y + dy * s, -0.4, { ...nope, s: [1.4, 0.8, 0.3] })));
  const starMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true }); const stars = new THREE.Group(); outside.add(stars);
  const rs = rng(7); for (let i = 0; i < 16; i++) add(stars, G(new THREE.SphereGeometry(0.012 + rs() * 0.012, 6, 4)), starMat, -1.3 + rs() * 2.4, -0.3 + rs() * 1.3, -0.43, nope);

  const win = piece('window', WCX, WCY, BZ);
  const fm = M('white');
  add(win, rbox(2.18, 0.12, T + 0.1, 0.03), fm, 0, 0.8, 0); add(win, rbox(2.18, 0.12, T + 0.1, 0.03), fm, 0, -0.8, 0);
  add(win, rbox(0.12, 1.72, T + 0.1, 0.03), fm, -1.0, 0, 0); add(win, rbox(0.12, 1.72, T + 0.1, 0.03), fm, 1.0, 0, 0);
  add(win, box(0.05, 1.6, 0.05), fm, 0, 0, 0.02); add(win, box(2.0, 0.05, 0.05), fm, 0, 0.2, 0.02);
  add(win, rbox(2.4, 0.08, 0.44, 0.03), fm, 0, -0.84, T / 2 + 0.1);
  const cactus = new THREE.Group(); cactus.position.set(0.72, -0.8, 0.2); win.add(cactus);
  add(cactus, G(new THREE.CylinderGeometry(0.07, 0.055, 0.12, 12)), M('accent'), 0, 0.06, 0);
  add(cactus, G(new THREE.CapsuleGeometry(0.045, 0.12, 4, 8)), M('leaf2'), 0, 0.2, 0);
  add(cactus, G(new THREE.CapsuleGeometry(0.025, 0.05, 4, 8)), M('leaf2'), 0.05, 0.22, 0, { rz: -0.9 });

  const fanMat = glow('rgb', 0.6), barMat = glow('led', 0.3), neonMat = glow('neon', 0.5);
  const desk = piece(null, -1.75, 0, -2.6);
  add(desk, rbox(2.8, 0.08, 1.2, 0.03), M('desk'), 0, 1.06, 0);
  [-1.3, 1.3].forEach((x) => { add(desk, rbox(0.07, 1.02, 0.08, 0.02), M('metal'), x, 0.51, -0.45); add(desk, rbox(0.07, 1.02, 0.08, 0.02), M('metal'), x, 0.51, 0.45); add(desk, rbox(0.07, 0.06, 1.0, 0.02), M('metal'), x, 0.05, 0); });
  add(desk, rbox(2.55, 0.06, 0.05, 0.02), M('metal'), 0, 0.85, -0.5);
  add(desk, box(2.6, 0.02, 0.02), fanMat, 0, 1.01, -0.57, { cast: false });

  const pc = piece('pc', -1.75, 1.1, -2.6);
  add(pc, box(1.8, 0.008, 0.5), M('#2f3327'), -0.05, 0.004, 0.33, { cast: false });
  add(pc, rbox(0.42, 0.025, 0.26, 0.012), M('dark'), 0, 0.0125, -0.36);
  rod(pc, [0, 0.02, -0.42], [0, 0.6, -0.42], 0.03, M('dark'));
  add(pc, rbox(0.5, 0.34, 0.06, 0.02), M('dark'), 0, 0.82, -0.42);
  add(pc, rbox(1.26, 0.72, 0.045, 0.02), M('dark'), 0, 0.82, -0.37);
  const scrMain = makeScreen(P, 'main'); geos.add(scrMain.tex);
  const mainMat = new THREE.MeshBasicMaterial({ map: scrMain.tex, toneMapped: false });
  add(pc, G(new THREE.PlaneGeometry(1.2, 0.66)), mainMat, 0, 0.82, -0.346, { cast: false });
  add(pc, rbox(0.46, 0.035, 0.07, 0.015), M('dark'), 0, 1.2, -0.33);
  add(pc, box(0.4, 0.006, 0.03), barMat, 0, 1.18, -0.31, { cast: false });
  const m2 = new THREE.Group(); m2.position.set(-1.05, 0, -0.28); m2.rotation.y = 0.5; pc.add(m2);
  add(m2, rbox(0.3, 0.025, 0.2, 0.012), M('dark'), 0, 0.0125, -0.05);
  rod(m2, [0, 0.02, -0.08], [0, 0.48, -0.08], 0.025, M('dark'));
  add(m2, rbox(0.74, 0.46, 0.04, 0.02), M('dark'), 0, 0.66, -0.04);
  const scrCode = makeScreen(P, 'code'); geos.add(scrCode.tex);
  const codeMat = new THREE.MeshBasicMaterial({ map: scrCode.tex, toneMapped: false });
  add(m2, G(new THREE.PlaneGeometry(0.69, 0.41)), codeMat, 0, 0.66, -0.018, { cast: false });
  const tw = new THREE.Group(); tw.position.set(1.06, 0, -0.16); pc.add(tw);
  const TWW = 0.4, TWH = 0.9, TWD = 0.74;
  add(tw, rbox(0.02, TWH, TWD, 0.008), M('dark'), -TWW / 2 + 0.01, TWH / 2, 0);
  add(tw, rbox(TWW, 0.05, TWD, 0.015), M('dark'), 0, 0.025, 0);
  add(tw, rbox(TWW, 0.04, TWD, 0.015), M('dark'), 0, TWH - 0.02, 0);
  add(tw, box(TWW, TWH, 0.02), M('dark'), 0, TWH / 2, -TWD / 2 + 0.01);
  [[TWW / 2 - 0.012, TWD / 2 - 0.012], [TWW / 2 - 0.012, -TWD / 2 + 0.012], [-TWW / 2 + 0.012, TWD / 2 - 0.012]].forEach(([x, z]) => add(tw, box(0.024, TWH, 0.024), M('metal'), x, TWH / 2, z));
  add(tw, box(0.01, 0.62, 0.52), M('#2a3326'), -TWW / 2 + 0.03, 0.52, -0.06, { cast: false });
  add(tw, rbox(0.28, 0.07, 0.52, 0.012), M('metal'), -0.03, 0.34, -0.06);
  add(tw, box(0.004, 0.014, 0.46), fanMat, 0.112, 0.34, -0.06, { cast: false });
  [-0.2, 0.08].forEach((z) => add(tw, G(new THREE.TorusGeometry(0.07, 0.008, 8, 28)), fanMat, -0.03, 0.377, z, { rx: Math.PI / 2, cast: false }));
  for (let i = 0; i < 4; i++) { add(tw, box(0.05, 0.13, 0.012), M('dark'), -0.14, 0.7, 0.05 + i * 0.024); add(tw, box(0.05, 0.012, 0.012), fanMat, -0.14, 0.77, 0.05 + i * 0.024, { cast: false }); }
  add(tw, G(new THREE.CylinderGeometry(0.06, 0.06, 0.045, 24)), M('dark'), -0.15, 0.58, -0.16, { rz: Math.PI / 2 });
  add(tw, G(new THREE.TorusGeometry(0.052, 0.009, 8, 28)), fanMat, -0.124, 0.58, -0.16, { ry: Math.PI / 2, cast: false });
  rod(tw, [-0.14, 0.62, -0.18], [-0.04, 0.83, -0.24], 0.012, M('dark')); rod(tw, [-0.14, 0.62, -0.13], [-0.04, 0.83, -0.02], 0.012, M('dark'));
  add(tw, box(0.32, 0.04, 0.62), M('metal'), 0, 0.85, -0.02);
  [0.2, 0.45, 0.7].forEach((y) => {
    add(tw, G(new THREE.TorusGeometry(0.1, 0.012, 8, 32)), fanMat, 0, y, TWD / 2 - 0.04, { cast: false });
    add(tw, G(new THREE.CylinderGeometry(0.035, 0.035, 0.012, 14)), M('metal'), 0, y, TWD / 2 - 0.04, { rx: Math.PI / 2 });
    for (let k = 0; k < 3; k++) add(tw, box(0.17, 0.028, 0.004), M('#4a4e40'), 0, y, TWD / 2 - 0.043, { rz: (k * Math.PI) / 3 + 0.3 });
  });
  add(tw, box(0.006, TWH - 0.1, 0.006), fanMat, TWW / 2 - 0.028, TWH / 2, TWD / 2 - 0.028, { cast: false });
  const glass = new THREE.MeshStandardMaterial({ color: '#1d2026', transparent: true, opacity: 0.26, roughness: 0.05, metalness: 0.3, depthWrite: false });
  add(tw, G(new THREE.PlaneGeometry(TWD - 0.03, TWH - 0.08)), glass, TWW / 2 - 0.002, TWH / 2, 0, { ry: Math.PI / 2, cast: false, recv: false });
  add(tw, G(new THREE.PlaneGeometry(TWW - 0.03, TWH - 0.08)), glass, 0, TWH / 2, TWD / 2 - 0.002, { cast: false, recv: false });
  add(pc, rbox(0.86, 0.035, 0.28, 0.015), M('dark'), 0, 0.02, 0.42);
  { const capGeo = rbox(0.043, 0.022, 0.043, 0.008); const capMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.6 });
    const caps = new THREE.InstancedMesh(capGeo, capMat, 75); const mtx = new THREE.Matrix4(); const c = new THREE.Color(); let i = 0;
    for (let r = 0; r < 5; r++) for (let k = 0; k < 15; k++) { mtx.makeTranslation(-0.357 + k * 0.051, 0.048, 0.318 + r * 0.051); caps.setMatrixAt(i, mtx); caps.setColorAt(i, c.set((r === 0 && k === 0) || (r === 3 && k === 14) ? P.accent : r === 4 && k > 3 && k < 11 ? P.beigeDark : (r === 2 && k > 1 && k < 4) || (r === 1 && k === 2) ? P.sage : P.beige)); i++; }
    caps.castShadow = true; caps.receiveShadow = true; pc.add(caps); }
  add(pc, rbox(0.065, 0.035, 0.11, 0.025), M('dark'), 0.62, 0.02, 0.4);
  add(pc, G(new THREE.CylinderGeometry(0.07, 0.065, 0.17, 16)), M('white'), -0.62, 0.085, 0.36);
  add(pc, G(new THREE.TorusGeometry(0.045, 0.013, 8, 16)), M('white'), -0.69, 0.09, 0.36, { ry: Math.PI / 2 });
  { const rc = new THREE.Group(); rc.position.set(-0.5, 0.045, 0.04); rc.rotation.y = 0.4; pc.add(rc);
    add(rc, rbox(0.09, 0.09, 0.09, 0.008), M('dark'), 0, 0, 0);
    const cols = ['accent', 'mustard', 'sage', 'top', 'white', 'leaf'], rr = rng(5), st = G(new THREE.BoxGeometry(0.026, 0.026, 0.026));
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
      add(rc, st, M(cols[Math.floor(rr() * 6)]), a * 0.029, 0.034, b * 0.029, { s: [1, 0.25, 1], cast: false });
      add(rc, st, M(cols[Math.floor(rr() * 6)]), a * 0.029, b * 0.029, 0.034, { s: [1, 1, 0.25], cast: false });
      add(rc, st, M(cols[Math.floor(rr() * 6)]), 0.034, a * 0.029, b * 0.029, { s: [0.25, 1, 1], cast: false });
    } }

  const sw = piece('switch', -2.78, 1.1, -2.2, 0.55);
  { const dockM = M('#1d1f19', { roughness: 0.5 });
    add(sw, rbox(0.5, 0.025, 0.16, 0.01), M('dark'), 0, 0.012, 0);
    add(sw, rbox(0.48, 0.2, 0.13, 0.03), dockM, 0, 0.125, -0.005);
    add(sw, box(0.2, 0.012, 0.004), M('#5c5f55'), 0, 0.17, 0.062, { cast: false });
    add(sw, G(new THREE.CylinderGeometry(0.007, 0.007, 0.004, 10)), glow('#5fd394', 1.2), 0.2, 0.05, 0.062, { rx: Math.PI / 2, cast: false });
    const con = new THREE.Group(); con.position.set(0, 0.075, 0.012); con.rotation.x = -0.06; sw.add(con);
    add(con, rbox(0.46, 0.26, 0.03, 0.014), M('dark'), 0, 0.15, 0);
    var swScr = makeSwitchScreen(); geos.add(swScr.tex);
    var swMat = new THREE.MeshBasicMaterial({ map: swScr.tex, toneMapped: false });
    add(con, G(new THREE.PlaneGeometry(0.42, 0.236)), swMat, 0, 0.15, 0.0155, { cast: false });
    [-1, 1].forEach((sd) => {
      add(con, rbox(0.085, 0.26, 0.036, 0.03), M('#26281f'), sd * 0.274, 0.15, 0);
      add(con, box(0.006, 0.24, 0.038), M(sd < 0 ? 'top' : 'accent'), sd * 0.232, 0.15, 0, { cast: false });
      add(con, G(new THREE.CylinderGeometry(0.02, 0.02, 0.012, 14)), M('#121310'), sd * 0.274, sd < 0 ? 0.21 : 0.11, 0.021, { rx: Math.PI / 2 });
      [[0, 0.018], [0, -0.018], [0.018, 0], [-0.018, 0]].forEach(([dx, dy]) => add(con, G(new THREE.CylinderGeometry(0.007, 0.007, 0.01, 8)), M('#121310'), sd * 0.274 + dx, (sd < 0 ? 0.11 : 0.21) + dy, 0.021, { rx: Math.PI / 2, cast: false }));
    });
    add(sw, rbox(0.12, 0.012, 0.08, 0.006), M('#33362b'), 0.36, 0.006, 0.1); }

  const CX = -1.75, CZ = -1.9, CR = 0.04, SY = 0.12;
  const chair = piece(null, CX, 0, CZ, CR);
  const chairM = M('dark', { roughness: 0.7 }), pipe = M('chairPipe', { roughness: 0.6 }), alu = M('#8d9086', { metalness: 0.7, roughness: 0.3 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.3, ex = Math.cos(a) * 0.36, ez = Math.sin(a) * 0.36;
    const leg = add(chair, rbox(0.38, 0.045, 0.07, 0.02), alu, ex / 2, 0.1, ez / 2); leg.rotation.y = -a;
    add(chair, rbox(0.05, 0.07, 0.05, 0.015), alu, ex, 0.085, ez);
    [-0.018, 0.018].forEach((o) => add(chair, G(new THREE.CylinderGeometry(0.035, 0.035, 0.022, 14)), M('dark'), ex - Math.sin(a) * o, 0.035, ez + Math.cos(a) * o, { rz: Math.PI / 2, ry: -a }));
  }
  add(chair, G(new THREE.CylinderGeometry(0.06, 0.07, 0.06, 16)), alu, 0, 0.11, 0);
  add(chair, G(new THREE.CylinderGeometry(0.05, 0.05, 0.22, 14)), M('dark'), 0, 0.24, 0);
  add(chair, G(new THREE.CylinderGeometry(0.028, 0.028, 0.3, 12)), alu, 0, 0.48 + SY / 2, 0, { s: [1, 1 + SY, 1] });
  add(chair, rbox(0.3, 0.06, 0.3, 0.02), M('metal'), 0, 0.53 + SY, 0);
  add(chair, rbox(0.035, 0.02, 0.16, 0.008), M('metal'), 0.17, 0.52 + SY, -0.05);
  add(chair, rbox(0.54, 0.1, 0.56, 0.05), chairM, 0, 0.61 + SY, 0);
  [-1, 1].forEach((sd) => {
    add(chair, rbox(0.1, 0.12, 0.56, 0.05), chairM, sd * 0.27, 0.65 + SY, 0);
    add(chair, box(0.012, 0.1, 0.5), pipe, sd * 0.322, 0.65 + SY, 0, { cast: false });
  });
  add(chair, rbox(0.34, 0.025, 0.46, 0.012), M('#33362b', { roughness: 0.8 }), 0, 0.667 + SY, 0.02);
  [-1, 1].forEach((sd) => {
    add(chair, rbox(0.04, 0.1, 0.12, 0.012), M('metal'), sd * 0.33, 0.58 + SY, 0.12);
    add(chair, rbox(0.04, 0.24, 0.05, 0.015), M('dark'), sd * 0.36, 0.76 + SY, 0.1);
    add(chair, rbox(0.1, 0.04, 0.27, 0.02), M('dark', { roughness: 0.9 }), sd * 0.36, 0.9 + SY, 0.06);
  });
  const back = new THREE.Group(); back.position.set(0, 0.66 + SY, 0.33); back.rotation.x = -0.1; chair.add(back);
  { const bs = new THREE.Shape();
    bs.moveTo(-0.22, 0); bs.lineTo(0.22, 0); bs.quadraticCurveTo(0.2, 0.12, 0.21, 0.22); bs.quadraticCurveTo(0.29, 0.36, 0.28, 0.5);
    bs.quadraticCurveTo(0.27, 0.6, 0.18, 0.62); bs.lineTo(-0.18, 0.62); bs.quadraticCurveTo(-0.27, 0.6, -0.28, 0.5); bs.quadraticCurveTo(-0.29, 0.36, -0.21, 0.22); bs.quadraticCurveTo(-0.2, 0.12, -0.22, 0);
    const bg = new THREE.ExtrudeGeometry(bs, { depth: 0.08, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 4, curveSegments: 14 }); bg.translate(0, 0, -0.04); geos.add(bg);
    add(back, bg, chairM, 0, 0, 0);
    add(back, bg, pipe, 0, -0.008, -0.02, { s: [1.05, 1.03, 0.9] });
    const sl = new THREE.Shape(); sl.moveTo(-0.022, -0.045); sl.lineTo(0.022, -0.045); sl.quadraticCurveTo(0.03, 0, 0.022, 0.045); sl.lineTo(-0.022, 0.045); sl.quadraticCurveTo(-0.03, 0, -0.022, -0.045);
    const slg = new THREE.ShapeGeometry(sl, 6); geos.add(slg);
    [-0.12, 0.12].forEach((x) => { add(back, slg, M('#111210'), x, 0.5, 0.072, { cast: false }); add(back, slg, M('#111210'), x, 0.5, -0.072, { ry: Math.PI, cast: false }); });
    [-0.085, 0.085].forEach((x) => add(back, rbox(0.06, 0.44, 0.012, 0.006), pipe, x, 0.24, 0.071, { cast: false }));
    add(back, G(new THREE.CylinderGeometry(0.045, 0.045, 0.012, 24)), pipe, 0, 0.36, 0.072, { rx: Math.PI / 2, cast: false });
    add(back, G(new THREE.CylinderGeometry(0.03, 0.03, 0.014, 24)), chairM, 0, 0.36, 0.074, { rx: Math.PI / 2, cast: false });
    add(back, rbox(0.3, 0.12, 0.08, 0.04), M('dark', { roughness: 0.9 }), 0, 0.14, -0.08);
    [-0.15, 0.15].forEach((x) => add(back, rbox(0.06, 0.12, 0.06, 0.015), M('metal'), x, -0.03, -0.02)); }

  const me = piece('me', CX, SY, CZ, CR);
  const cloth = M('shirt', { roughness: 0.85 }), hij = M('hijab', { roughness: 0.9, side: THREE.DoubleSide }), skin = M('skin');
  add(me, G(new THREE.SphereGeometry(0.17, 16, 12)), M('pants'), 0, 0.78, 0.02, { s: [1.1, 0.62, 1] });
  [-0.1, 0.1].forEach((x) => {
    rod(me, [x, 0.78, 0.02], [x * 1.1, 0.77, -0.36], 0.085, M('pants'), 12);
    add(me, G(new THREE.SphereGeometry(0.085, 12, 10)), M('pants'), x * 1.1, 0.77, -0.36);
    rod(me, [x * 1.1, 0.77, -0.38], [x * 1.25, 0.0, -0.44], 0.066, M('pants'), 12);
    add(me, rbox(0.1, 0.08, 0.2, 0.035), M('white'), x * 1.25, -0.08, -0.5);
  });
  const torso = new THREE.Group(); torso.position.set(0, 0.7, 0.08); torso.rotation.x = -0.1; me.add(torso);
  const tp = [[0.001, 0], [0.16, 0.01], [0.17, 0.12], [0.155, 0.27], [0.18, 0.4], [0.2, 0.48], [0.12, 0.55], [0.001, 0.56]].map(([a, b]) => new THREE.Vector2(a, b));
  add(torso, G(new THREE.LatheGeometry(tp, 24)), cloth, 0, 0, 0, { s: [1.12, 1, 0.72] });
  const arm = (s, e, h) => {
    add(me, G(new THREE.SphereGeometry(0.07, 14, 10)), cloth, ...s);
    rod(me, s, e, 0.055, cloth, 12); add(me, G(new THREE.SphereGeometry(0.055, 12, 10)), cloth, ...e);
    rod(me, e, h, 0.045, cloth, 12);
    add(me, G(new THREE.SphereGeometry(0.042, 12, 10)), skin, h[0], h[1], h[2] - 0.03, { s: [1, 0.65, 1.3] });
  };
  arm([-0.2, 1.13, 0.05], [-0.28, 0.97, -0.02], [-0.2, 1.08, -0.25]);
  arm([0.2, 1.13, 0.05], [0.34, 0.97, 0.0], [0.6, 1.05, -0.3]);
  const HY = 1.44, HZ = -0.01;
  const hp = [[0.001, 0.142], [0.06, 0.13], [0.105, 0.095], [0.13, 0.04], [0.136, -0.02], [0.13, -0.08], [0.124, -0.12], [0.145, -0.16], [0.18, -0.195], [0.205, -0.225], [0.212, -0.25], [0.2, -0.265]].map(([a, b]) => new THREE.Vector2(a, b));
  add(me, G(new THREE.LatheGeometry(hp, 32)), hij, 0, HY, HZ, { s: [1, 1, 0.82] });
  add(me, G(new THREE.CircleGeometry(0.2, 28)), hij, 0, HY - 0.262, HZ, { rx: Math.PI / 2, s: [1, 0.82, 1], cast: false });
  [-0.08, 0.08].forEach((x) => add(me, G(new THREE.CapsuleGeometry(0.01, 0.05, 4, 8)), M('#7a4659', { roughness: 0.9 }), x, HY - 0.2, HZ + 0.17, { rx: -0.6, cast: false }));
  add(me, G(new THREE.TorusGeometry(0.158, 0.018, 8, 32, Math.PI)), M('dark'), 0, HY + 0.005, HZ);
  [-1, 1].forEach((sx) => {
    add(me, G(new THREE.CylinderGeometry(0.066, 0.066, 0.055, 22)), M('dark'), sx * 0.158, HY - 0.025, HZ, { rz: Math.PI / 2 });
    add(me, G(new THREE.TorusGeometry(0.047, 0.009, 8, 24)), fanMat, sx * 0.188, HY - 0.025, HZ, { ry: Math.PI / 2, cast: false });
  });

  const cab = piece(null, WCX, 0, -2.88);
  add(cab, rbox(1.9, 0.82, 0.68, 0.04), M('cabinet'), 0, 0.41, 0);
  add(cab, rbox(0.86, 0.66, 0.02, 0.01), M('beige'), -0.46, 0.41, 0.345); add(cab, rbox(0.86, 0.66, 0.02, 0.01), M('beige'), 0.46, 0.41, 0.345);
  add(cab, rbox(0.14, 0.025, 0.025, 0.01), M('dark'), -0.1, 0.55, 0.365); add(cab, rbox(0.14, 0.025, 0.025, 0.01), M('dark'), 0.1, 0.55, 0.365);
  const globe = piece('globe', 1.8, 0.82, -2.85);
  add(globe, G(new THREE.CylinderGeometry(0.14, 0.17, 0.05, 20)), M('dark'), 0, 0.025, 0);
  rod(globe, [0, 0.05, 0], [0, 0.18, 0], 0.025, M('dark'));
  const tilt = new THREE.Group(); tilt.position.set(0, 0.5, 0); tilt.rotation.z = 0.41; globe.add(tilt);
  add(tilt, G(new THREE.TorusGeometry(0.35, 0.014, 6, 40, Math.PI)), M('mustard', { metalness: 0.4, roughness: 0.35 }), 0, 0, 0, { rz: Math.PI / 2 });
  const spin = new THREE.Group(); tilt.add(spin);
  const gg = new THREE.IcosahedronGeometry(0.3, 2); geos.add(gg);
  { const pos = gg.attributes.position, cols = [], cs = C(P.globeSea), cl = C(P.globeLand);
    for (let i = 0; i < pos.count; i += 3) {
      const x = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 0.9, y = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 0.9, z = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 0.9;
      const c = Math.sin(x * 3 + 1) + Math.sin(y * 2.6 + 2) + Math.sin(z * 2.9) > 0.75 ? cl : cs; for (let k = 0; k < 3; k++) cols.push(c.r, c.g, c.b);
    }
    gg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); }
  add(spin, gg, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.6 }), 0, 0, 0);
  [[0.4, 1.0], [-0.35, 2.2], [0.75, 3.6], [0.1, 4.6], [-0.6, 5.5]].forEach(([lat, lon]) => {
    const d = new V3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
    rod(spin, d.clone().multiplyScalar(0.29).toArray(), d.clone().multiplyScalar(0.36).toArray(), 0.006, M('dark'), 4);
    add(spin, G(new THREE.SphereGeometry(0.025, 8, 6)), M('accent'), ...d.clone().multiplyScalar(0.37).toArray());
  });
  const snake = piece(null, 0.75, 0.82, -2.85);
  add(snake, G(new THREE.CylinderGeometry(0.12, 0.09, 0.2, 12)), M('pot'), 0, 0.1, 0, { recv: false });
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; add(snake, G(new THREE.ConeGeometry(0.035, 0.42 + (i % 3) * 0.08, 4)), M(i % 2 ? 'leaf' : 'leaf2', { flatShading: true }), Math.cos(a) * 0.05, 0.4, Math.sin(a) * 0.05, { rx: Math.sin(a) * 0.18, rz: -Math.cos(a) * 0.18 }); }

  const tree = piece(null, 2.95, 0, -2.85);
  add(tree, G(new THREE.CylinderGeometry(0.26, 0.2, 0.5, 14)), M('pot'), 0, 0.25, 0, { recv: false });
  add(tree, G(new THREE.CylinderGeometry(0.23, 0.23, 0.02, 14)), M('woodDark'), 0, 0.506, 0, { cast: false });
  rod(tree, [0, 0.5, 0], [0.02, 1.4, 0], 0.03, M('trunk'));
  const fol = new THREE.Group(); tree.add(fol);
  [[0, 1.55, 0, 0.38, 'leaf'], [0.17, 1.28, 0.12, 0.28, 'leaf2'], [-0.15, 1.88, -0.05, 0.27, 'leaf2'], [-0.12, 1.3, -0.1, 0.22, 'leaf']].forEach(([x, y, z, r, c]) => add(fol, G(new THREE.IcosahedronGeometry(r, 0)), M(c, { flatShading: true }), x, y, z));

  const shelf = piece('shelf', -2.95, 0, -0.75);
  add(shelf, rbox(0.55, 2.7, 0.08, 0.025), M('wood'), 0, 1.35, -0.91); add(shelf, rbox(0.55, 2.7, 0.08, 0.025), M('wood'), 0, 1.35, 0.91);
  add(shelf, rbox(0.6, 0.08, 1.98, 0.025), M('wood'), 0, 2.66, 0); add(shelf, rbox(0.58, 0.11, 1.96, 0.02), M('woodDark'), 0, 0.06, 0);
  add(shelf, box(0.03, 2.55, 1.78), M('woodDark'), -0.255, 1.35, 0);
  [0.75, 1.4, 2.05].forEach((y) => add(shelf, rbox(0.5, 0.05, 1.78, 0.015), M('wood'), 0, y, 0));
  const rb = rng(11), bookCols = ['white', 'beige', 'sand', 'dark', 'top', 'beigeDark', 'accent', 'sage', 'mustard'];
  const books = (y0, z0, z1) => { let z = z0; while (z < z1) { const w = 0.07 + rb() * 0.06, h = 0.34 + rb() * 0.16; if (z + w > z1) break; add(shelf, box(0.32, h, w), M(bookCols[Math.floor(rb() * bookCols.length)]), 0.02, y0 + h / 2, z + w / 2); z += w + 0.004; } };
  books(0.12, -0.84, -0.2);
  for (let i = 0; i < 6; i++) add(shelf, box(0.3, 0.026, 0.2), M(i % 2 ? 'dark' : 'top'), 0.02, 0.134 + i * 0.028, 0.15, { ry: (i % 3) * 0.04 });
  add(shelf, rbox(0.36, 0.3, 0.32, 0.03), M('sage'), 0.02, 0.27, 0.62);
  { const cards = new THREE.Group(); cards.position.set(0.06, 0.775, -0.45); cards.scale.setScalar(1.45); shelf.add(cards);
    const cardTex = (seed, frame, art) => { const c = document.createElement('canvas'); c.width = 64; c.height = 88; const x = c.getContext('2d'); const rr = rng(seed);
      x.fillStyle = frame; x.fillRect(0, 0, 64, 88); x.fillStyle = '#faf5e6'; x.fillRect(5, 5, 54, 78);
      const g = x.createLinearGradient(0, 12, 0, 50); g.addColorStop(0, art[0]); g.addColorStop(1, art[1]); x.fillStyle = g; x.fillRect(8, 12, 48, 36);
      x.fillStyle = 'rgba(255,255,255,0.75)'; x.beginPath(); x.arc(32, 32, 9 + rr() * 4, 0, 7); x.fill();
      x.fillStyle = '#24261c'; x.fillRect(8, 6, 30, 4); x.fillStyle = frame; x.beginPath(); x.arc(52, 8, 3, 0, 7); x.fill();
      for (let i = 0; i < 4; i++) { x.fillStyle = 'rgba(36,38,28,0.35)'; x.fillRect(9, 54 + i * 6, 30 + rr() * 16, 2.5); }
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; geos.add(t); return t; };
    const defs = [[3, '#d4a373', ['#ffd27a', '#e9a3ad']], [8, '#335c67', ['#9cc3cc', '#335c67']], [13, '#bc4749', ['#e9a3ad', '#bc4749']]];
    const holo = new THREE.MeshStandardMaterial({ color: '#ffffff', transparent: true, opacity: 0.18, roughness: 0.05, metalness: 0.5 });
    defs.forEach(([seed, fr, art], i) => {
      const z = (i - 1) * 0.15, g = new THREE.Group(); g.position.set(0, 0, z); g.rotation.z = 0.12; cards.add(g);
      add(g, rbox(0.06, 0.02, 0.12, 0.006), M('#cfd2c8', { metalness: 0.3, roughness: 0.3 }), -0.01, 0.01, 0);
      add(g, rbox(0.012, 0.19, 0.135, 0.004), new THREE.MeshStandardMaterial({ color: '#ffffff', transparent: true, opacity: 0.35, roughness: 0.1 }), 0, 0.115, 0, { cast: false });
      add(g, G(new THREE.PlaneGeometry(0.11, 0.152)), new THREE.MeshStandardMaterial({ map: cardTex(seed, fr, art), roughness: 0.4 }), 0.0075, 0.112, 0, { ry: Math.PI / 2, cast: false });
      add(g, G(new THREE.PlaneGeometry(0.11, 0.152)), holo, 0.0085, 0.112, 0, { ry: Math.PI / 2, cast: false });
    });
    add(cards, rbox(0.09, 0.12, 0.08, 0.008), M('top'), -0.02, 0.06, 0.28);
    add(cards, box(0.004, 0.03, 0.05), M('mustard'), 0.026, 0.08, 0.28, { cast: false }); }
  books(0.775, 0.22, 0.84);
  { const vt = (top) => { const c = document.createElement('canvas'); c.width = c.height = 16; const x = c.getContext('2d'); const rr = rng(top ? 21 : 9);
      for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) { const g = top || j < 3 + Math.floor(rr() * 2); x.fillStyle = g ? ['#6f9a4a', '#7fae55', '#5f8a3f'][Math.floor(rr() * 3)] : ['#8a6240', '#7a5536', '#6b4a30', '#9a7350'][Math.floor(rr() * 4)]; x.fillRect(i, j, 1, 1); }
      const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace; geos.add(t); return t; };
    const side = new THREE.MeshStandardMaterial({ map: vt(false), roughness: 0.9 }), topM = new THREE.MeshStandardMaterial({ map: vt(true), roughness: 0.9 });
    const vb = new THREE.Mesh(G(new THREE.BoxGeometry(0.2, 0.2, 0.2)), [side, side, topM, side, side, side]); vb.position.set(0.02, 1.525, -0.55); vb.rotation.y = 0.3; vb.castShadow = vb.receiveShadow = true; shelf.add(vb); }
  [['top', 0.06], ['sand', 0.05], ['accent', 0.045], ['white', 0.04]].forEach(([c, h], i, arr) => { const y = 1.425 + arr.slice(0, i).reduce((s, a) => s + a[1], 0) + h / 2; add(shelf, box(0.34 - i * 0.02, h, 0.26 - i * 0.015), M(c), 0.02, y, 0.0, { ry: (i - 1.5) * 0.05 }); });
  books(1.425, 0.3, 0.84);
  books(2.075, -0.84, -0.32);
  { const tp = [[0.001, 0], [0.07, 0], [0.07, 0.02], [0.025, 0.035], [0.018, 0.09], [0.035, 0.11], [0.075, 0.2], [0.07, 0.24], [0.001, 0.15]].map(([a, b]) => new THREE.Vector2(a, b));
    const gold = M('mustard', { metalness: 0.65, roughness: 0.3 });
    add(shelf, G(new THREE.LatheGeometry(tp, 24)), gold, 0.02, 2.075, 0.05);
    [-1, 1].forEach((s) => add(shelf, G(new THREE.TorusGeometry(0.035, 0.008, 6, 16, Math.PI)), gold, 0.02, 2.27, 0.05 + s * 0.075, { rx: Math.PI / 2, rz: s > 0 ? -Math.PI / 2 : Math.PI / 2 })); }
  add(shelf, G(new THREE.CylinderGeometry(0.08, 0.06, 0.12, 10)), M('cabinet'), 0.02, 2.135, 0.55);
  add(shelf, G(new THREE.IcosahedronGeometry(0.1, 0)), M('leaf', { flatShading: true }), 0.02, 2.25, 0.55);

  const lego = piece('lego', -2.95, 2.7, -0.75);
  const U = 0.1, studGeo = G(new THREE.CylinderGeometry(0.03, 0.03, 0.036, 10));
  function brick(parent, nx, nz, col, x, y, z, ry = 0, hgt = 0.12) {
    const b = new THREE.Group(); b.position.set(x, y, z); b.rotation.y = ry; parent.add(b);
    const mt = M(col, { roughness: 0.35 });
    add(b, rbox(nx * U - 0.004, hgt, nz * U - 0.004, 0.012), mt, 0, hgt / 2, 0);
    for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) add(b, studGeo, mt, (i - (nx - 1) / 2) * U, hgt + 0.018, (j - (nz - 1) / 2) * U, { cast: false });
    return b;
  }
  const L = (c) => M(c, { roughness: 0.32 });
  const tinyStud = G(new THREE.CylinderGeometry(0.012, 0.012, 0.012, 8));
  const studs = (p, x0, z0, nx, nz, y, mat, s = 0.03) => { for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) add(p, tinyStud, mat, x0 + i * s, y, z0 + j * s, { cast: false }); };
  [[-0.5, 0.36], [0.06, 0.3], [0.56, 0.26]].forEach(([z, w]) => { add(lego, rbox(0.4, 0.04, w, 0.01), L('dark'), 0, 0.02, z); add(lego, box(0.004, 0.018, w * 0.5), M('mustard', { metalness: 0.6, roughness: 0.3 }), 0.201, 0.02, z, { cast: false }); });
  { const ps = new THREE.Group(); ps.position.set(0.01, 0.04, -0.5); ps.scale.setScalar(1.25); lego.add(ps);
    const grey = L('#c9c7c0'), dgrey = L('#8d8c86');
    add(ps, rbox(0.2, 0.05, 0.28, 0.008), grey, -0.03, 0.025, 0);
    add(ps, box(0.2, 0.006, 0.28), dgrey, -0.03, 0.003, 0);
    add(ps, G(new THREE.CylinderGeometry(0.075, 0.075, 0.008, 28)), dgrey, -0.04, 0.053, -0.04);
    add(ps, G(new THREE.CylinderGeometry(0.06, 0.06, 0.01, 28)), grey, -0.04, 0.055, -0.04);
    add(ps, G(new THREE.CylinderGeometry(0.012, 0.012, 0.012, 12)), dgrey, -0.04, 0.06, -0.04);
    [[0.035, 0.07], [0.035, 0.11]].forEach(([x, z]) => add(ps, G(new THREE.CylinderGeometry(0.014, 0.014, 0.012, 14)), dgrey, x, 0.055, z));
    var lampMat = glow('#5fd394', 0.8);
    add(ps, G(new THREE.SphereGeometry(0.005, 8, 6)), lampMat, 0.035, 0.064, 0.09, { cast: false });
    [['#bc4749', -0.008], ['#e0b45a', 0.004], ['#5f8a3f', 0.016], ['#335c67', 0.028]].forEach(([c, dz]) => add(ps, box(0.008, 0.004, 0.01), L(c), 0.0, 0.051, -0.12 + dz, { cast: false }));
    add(ps, box(0.004, 0.02, 0.05), L('#24261c'), 0.071, 0.03, -0.09, { cast: false }); add(ps, box(0.004, 0.02, 0.05), L('#24261c'), 0.071, 0.03, 0.07, { cast: false });
    studs(ps, -0.11, 0.07, 2, 3, 0.056, grey);
    const ct = new THREE.Group(); ct.position.set(0.12, 0.012, 0.0); ct.rotation.y = 0.15; ps.add(ct);
    add(ct, rbox(0.06, 0.022, 0.16, 0.01), grey, 0, 0.011, 0);
    [-1, 1].forEach((sd) => { const gr = add(ct, rbox(0.07, 0.02, 0.045, 0.012), grey, 0.035, 0.01, sd * 0.06); gr.rotation.y = sd * 0.25; });
    [[0, 0.012], [0, -0.012], [0.012, 0], [-0.012, 0]].forEach(([dx, dz]) => add(ct, box(0.012, 0.006, 0.012), dgrey, dx, 0.024, -0.05 + dz, { cast: false }));
    [['#335c67', 0.012, 0], ['#bc4749', 0, 0.012], ['#e9a3ad', 0, -0.012], ['#5f8a3f', -0.012, 0]].forEach(([c, dx, dz]) => add(ct, G(new THREE.CylinderGeometry(0.006, 0.006, 0.006, 10)), L(c), dx, 0.025, 0.05 + dz, { cast: false }));
    rod(ct, [-0.03, 0.012, 0], [-0.075, 0.03, 0.0], 0.004, L('#8d8c86'), 6); }
  { const car = new THREE.Group(); car.position.set(0.0, 0.04, 0.06); car.rotation.y = 0.25; car.scale.setScalar(1.25); lego.add(car);
    const red = L('#bc4749'), blk = L('#24261c'), wht = L('white'), gl = new THREE.MeshStandardMaterial({ color: '#2b3a36', roughness: 0.05, metalness: 0.4 });
    add(car, rbox(0.15, 0.03, 0.34, 0.008), blk, 0, 0.035, 0);
    add(car, rbox(0.15, 0.04, 0.34, 0.012), red, 0, 0.065, 0);
    add(car, rbox(0.14, 0.022, 0.1, 0.01), red, 0, 0.09, 0.11, { rx: 0.12 });
    add(car, rbox(0.13, 0.05, 0.13, 0.02), gl, 0, 0.11, -0.01);
    add(car, rbox(0.13, 0.012, 0.1, 0.006), red, 0, 0.137, -0.02);
    add(car, box(0.004, 0.06, 0.012), red, 0.066, 0.1, 0.055, { rx: -0.6, cast: false }); add(car, box(0.004, 0.06, 0.012), red, -0.066, 0.1, 0.055, { rx: -0.6, cast: false });
    add(car, box(0.05, 0.088, 0.36), wht, 0, 0.052, 0, { s: [0.4, 1, 1], cast: false });
    add(car, rbox(0.16, 0.012, 0.04, 0.004), blk, 0, 0.13, -0.16);
    [-0.05, 0.05].forEach((x) => add(car, box(0.01, 0.04, 0.012), blk, x, 0.105, -0.155));
    [[0.04, 0.17], [-0.04, 0.17]].forEach(([x, z]) => add(car, box(0.03, 0.012, 0.004), glow('#fff2c4', 0.6), x, 0.07, z, { cast: false }));
    [[0.04, -0.171], [-0.04, -0.171]].forEach(([x, z]) => add(car, box(0.03, 0.01, 0.004), glow('#ff4d3d', 0.6), x, 0.072, z, { cast: false }));
    [[1, 0.1], [-1, 0.1], [1, -0.1], [-1, -0.1]].forEach(([sd, z]) => { add(car, G(new THREE.CylinderGeometry(0.035, 0.035, 0.028, 18)), blk, sd * 0.072, 0.035, z, { rz: Math.PI / 2 }); add(car, G(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 12)), L('#cfd2c8'), sd * 0.073, 0.035, z, { rz: Math.PI / 2, cast: false }); }); }
  { const sh = new THREE.Group(); sh.position.set(0, 0.04, 0.56); sh.scale.setScalar(1.35); lego.add(sh);
    add(sh, rbox(0.12, 0.02, 0.12, 0.006), L('#8d9086'), 0, 0.01, 0);
    rod(sh, [0, 0.02, 0], [0, 0.06, 0], 0.01, L('#8d9086'), 8);
    const s2 = new THREE.Group(); s2.position.set(0, 0.11, 0); s2.rotation.z = -0.35; sh.add(s2);
    add(s2, G(new THREE.CylinderGeometry(0.11, 0.1, 0.03, 20)), L('#f2e8cf'), 0, -0.005, 0);
    add(s2, G(new THREE.TorusGeometry(0.105, 0.014, 8, 28)), L('white'), 0, 0.012, 0, { rx: Math.PI / 2 });
    const dome = G(new THREE.SphereGeometry(0.1, 12, 7, 0, Math.PI * 2, 0, Math.PI / 2));
    add(s2, dome, M('#4f9a3c', { roughness: 0.35, flatShading: true }), 0, 0.012, 0, { s: [1, 0.75, 1] });
    const hex = G(new THREE.CylinderGeometry(0.03, 0.03, 0.01, 6));
    add(s2, hex, L('#f2e8cf'), 0, 0.09, 0);
    for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2, p = new V3(Math.cos(a) * 0.065, 0.065, Math.sin(a) * 0.065);
      const m = add(s2, hex, L('#f2e8cf'), p.x, p.y, p.z); m.quaternion.setFromUnitVectors(new V3(0, 1, 0), new V3(p.x, p.y * 1.3, p.z).normalize()); m.scale.set(0.8, 1, 0.8); }
    studs(s2, -0.012, -0.012, 2, 2, 0.1, L('#4f9a3c'), 0.024); }
  const bigBrick = piece(null, 0.55, 0, 2.55, 0.5);
  brick(bigBrick, 2, 4, 'accent', 0, 0, 0).scale.setScalar(1.9);

  const certs = piece('certs', -3.22, 2.8, 1.65);
  [[0.31, -0.42, 'accent'], [0.31, 0.42, 'accent'], [-0.31, -0.42, 'accent'], [-0.31, 0.42, 'leaf2']].forEach(([y, z, seal]) => {
    add(certs, rbox(0.05, 0.54, 0.72, 0.02), M('frame'), 0, y, z);
    add(certs, G(new THREE.PlaneGeometry(0.6, 0.42)), M('white'), 0.028, y, z, { ry: Math.PI / 2, cast: false });
    add(certs, box(0.004, 0.022, 0.34), M('dark'), 0.031, y + 0.12, z, { cast: false });
    add(certs, box(0.004, 0.014, 0.42), M('beigeDark'), 0.031, y + 0.05, z, { cast: false });
    add(certs, box(0.004, 0.014, 0.3), M('beigeDark'), 0.031, y, z - 0.06, { cast: false });
    add(certs, G(new THREE.CylinderGeometry(0.05, 0.05, 0.012, 18)), M(seal), 0.034, y - 0.11, z + 0.18, { rz: Math.PI / 2, cast: false });
  });
  const shields = piece('shields', -3.25, 1.66, 1.65);
  add(shields, rbox(0.34, 0.05, 1.6, 0.015), M('wood'), 0.17, 0, 0);
  [-0.6, 0.6].forEach((z) => add(shields, rbox(0.2, 0.12, 0.04, 0.012), M('metal'), 0.1, -0.08, z));
  { const gold = M('mustard', { metalness: 0.7, roughness: 0.28 });
    const shieldShape = (w, h) => { const s = new THREE.Shape(), t = h * 0.5;
      s.moveTo(-w, t); s.quadraticCurveTo(-w * 0.5, t + h * 0.06, 0, t + h * 0.1); s.quadraticCurveTo(w * 0.5, t + h * 0.06, w, t);
      s.lineTo(w, t - h * 0.45); s.quadraticCurveTo(w * 0.95, -t + h * 0.15, 0, -t); s.quadraticCurveTo(-w * 0.95, -t + h * 0.15, -w, t - h * 0.45); s.lineTo(-w, t); return s; };
    const ext = (shape, d, bev) => { const g = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 3, curveSegments: 16 }); g.translate(0, 0, -d / 2); geos.add(g); return g; };
    const wood = (z, wm, plate, emb, h = 0.36) => {
      const g = new THREE.Group(); g.position.set(0.16, 0.025, z); shields.add(g);
      const face = new THREE.Group(); face.position.set(0, h * 0.62, 0); face.rotation.set(0, Math.PI / 2, 0); g.add(face);
      const tilt = new THREE.Group(); tilt.rotation.x = -0.12; face.add(tilt);
      add(tilt, ext(shieldShape(h * 0.36, h), 0.02, 0.012), wm, 0, 0, 0);
      add(tilt, ext(shieldShape(h * 0.3, h * 0.84), 0.004, 0.004), M('#24261c', { roughness: 0.6 }), 0, h * 0.01, 0.018);
      add(tilt, rbox(h * 0.42, h * 0.14, 0.006, 0.003), gold, 0, -h * 0.17, 0.024);
      add(tilt, box(h * 0.3, 0.008, 0.002), M('#24261c'), 0, -h * 0.15, 0.028, { cast: false });
      add(tilt, box(h * 0.22, 0.006, 0.002), M('#24261c'), 0, -h * 0.19, 0.028, { cast: false });
      add(tilt, G(new THREE.CylinderGeometry(h * 0.12, h * 0.12, 0.008, 28)), gold, 0, h * 0.14, 0.024, { rx: Math.PI / 2 });
      add(tilt, G(new THREE.CylinderGeometry(h * 0.085, h * 0.085, 0.01, 28)), M(emb, { roughness: 0.4 }), 0, h * 0.14, 0.027, { rx: Math.PI / 2 });
      const st = new THREE.Shape(); for (let k = 0; k < 10; k++) { const an = (k / 10) * Math.PI * 2 + Math.PI / 2, rr = k % 2 ? h * 0.025 : h * 0.06; k ? st.lineTo(Math.cos(an) * rr, Math.sin(an) * rr) : st.moveTo(Math.cos(an) * rr, Math.sin(an) * rr); }
      add(tilt, ext(st, 0.004, 0.002), gold, 0, h * 0.14, 0.034);
      rod(g, [-0.07, 0, 0], [-0.03, h * 0.6, 0], 0.008, M('woodDark'), 6);
    };
    wood(-0.52, M('#7a4e2e', { roughness: 0.5 }), true, 'top', 0.34);
    wood(0.52, M('#a87443', { roughness: 0.5 }), true, 'accent', 0.3);
    { const g = new THREE.Group(); g.position.set(0.16, 0.025, 0); shields.add(g);
      add(g, rbox(0.12, 0.06, 0.24, 0.01), M('#5b3a2a', { roughness: 0.4 }), 0, 0.03, 0);
      add(g, box(0.004, 0.024, 0.14), gold, 0.061, 0.03, 0, { cast: false });
      const h = 0.4, face = new THREE.Group(); face.position.set(0, 0.06 + h * 0.5, 0); face.rotation.y = Math.PI / 2; g.add(face);
      const glassM = new THREE.MeshPhysicalMaterial({ color: '#d8ecef', transparent: true, opacity: 0.42, roughness: 0.04, metalness: 0.1, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false });
      add(face, ext(shieldShape(h * 0.36, h), 0.022, 0.01), glassM, 0, 0, 0, { cast: false });
      add(face, ext(shieldShape(h * 0.33, h * 0.9), 0.001, 0.001), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.18, depthWrite: false }), 0, h * 0.01, 0.018, { cast: false });
      const st = new THREE.Shape(); for (let k = 0; k < 10; k++) { const an = (k / 10) * Math.PI * 2 + Math.PI / 2, rr = k % 2 ? 0.014 : 0.034; k ? st.lineTo(Math.cos(an) * rr, Math.sin(an) * rr) : st.moveTo(Math.cos(an) * rr, Math.sin(an) * rr); }
      add(face, ext(st, 0.003, 0.001), gold, 0, h * 0.18, 0.016, { cast: false });
      add(face, box(0.12, 0.008, 0.002), M('mustard', { metalness: 0.5, roughness: 0.4 }), 0, h * 0.0, 0.018, { cast: false });
      add(face, box(0.09, 0.006, 0.002), M('mustard', { metalness: 0.5, roughness: 0.4 }), 0, -h * 0.06, 0.018, { cast: false }); } }

  const bean = piece(null, 2.25, 0, 1.85);
  add(bean, G(new THREE.SphereGeometry(0.62, 14, 10)), M('beanbag', { roughness: 0.9 }), 0, 0.34, 0, { s: [1, 0.58, 1] });
  add(bean, G(new THREE.SphereGeometry(0.36, 12, 8)), M('beanbag', { roughness: 0.9 }), -0.2, 0.62, -0.25, { s: [1, 0.55, 0.8] });

  const suit = piece('travel', 2.95, 0, -1.85, -0.35);
  add(suit, rbox(0.46, 0.62, 0.26, 0.06), M('top'), 0, 0.37, 0);
  [-0.12, 0, 0.12].forEach((x) => add(suit, rbox(0.05, 0.56, 0.02, 0.01), M('#2b4f58'), x, 0.37, 0.13));
  rod(suit, [-0.09, 0.68, 0], [-0.09, 0.82, 0], 0.012, M('dark'), 6); rod(suit, [0.09, 0.68, 0], [0.09, 0.82, 0], 0.012, M('dark'), 6); rod(suit, [-0.1, 0.82, 0], [0.1, 0.82, 0], 0.016, M('dark'), 8);
  [[-0.18, -0.09], [0.18, -0.09], [-0.18, 0.09], [0.18, 0.09]].forEach(([x, z]) => add(suit, G(new THREE.SphereGeometry(0.03, 8, 6)), M('dark'), x, 0.03, z));
  [['mustard', -0.1, 0.52, 0.3], ['accent', 0.08, 0.3, -0.2], ['white', 0.12, 0.55, 0.15], ['sage', -0.12, 0.22, 0]].forEach(([c, x, y, rz]) => add(suit, rbox(0.1, 0.07, 0.008, 0.01), M(c), x, y, 0.142, { rz, cast: false }));
  add(suit, G(new THREE.CylinderGeometry(0.045, 0.045, 0.008, 18)), M('mustard'), 0.231, 0.45, 0.02, { rz: Math.PI / 2, cast: false });
  add(suit, rbox(0.008, 0.08, 0.1, 0.01), M('accent'), 0.231, 0.28, -0.04, { cast: false });

  let blobMesh = null;
  if (opts.shadowBlob !== false) {
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const gr = x.createRadialGradient(64, 64, 4, 64, 64, 64); gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); geos.add(t);
    blobMesh = new THREE.Mesh(G(new THREE.PlaneGeometry(11, 11)), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: opts.blobOpacity ?? 0.3 }));
    blobMesh.rotation.x = -Math.PI / 2; blobMesh.position.y = -1.0; blobMesh.raycast = () => {}; scene.add(blobMesh);
  }

  const hemi = new THREE.HemisphereLight(P.hemiDay, P.floor, 1.1); scene.add(hemi);
  const key = new THREE.DirectionalLight('#fff1dc', 1.8); key.position.set(6, 10, 7); key.castShadow = true;
  key.shadow.mapSize.set(lowPower ? 1024 : 2048, lowPower ? 1024 : 2048); Object.assign(key.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.03; scene.add(key); scene.add(key.target);
  const spot = new THREE.SpotLight('#ffd9a0', 1.6, 0, 0.36, 0.3, 0); spot.position.set(WCX + 1.4, 6.2, Z0 - 4.4);
  spot.target.position.set(WCX - 0.7, 0, -0.4); spot.castShadow = !lowPower; spot.shadow.mapSize.set(lowPower ? 512 : 1024, lowPower ? 512 : 1024); spot.shadow.bias = -0.0006; spot.shadow.normalBias = 0.03;
  scene.add(spot); scene.add(spot.target);
  const bias = new THREE.PointLight(P.led, 0, 0, 2); bias.position.set(-1.75, 1.95, -3.13); scene.add(bias);
  const towerLight = new THREE.PointLight(P.rgb, 0, 0, 2); towerLight.position.set(-0.35, 1.6, -2.55); scene.add(towerLight);
  const screenLight = new THREE.PointLight('#cfe3ff', 0, 0, 2); screenLight.position.set(-1.75, 1.9, -2.1); scene.add(screenLight);
  const ledLight = new THREE.PointLight(P.led, 0, 0, 1); ledLight.position.set(-2.2, 3.7, -2.2); scene.add(ledLight);
  const ledLight2 = new THREE.PointLight(P.led, 0, 0, 1); ledLight2.position.set(2.4, 3.7, -2.6); scene.add(ledLight2);

  const TH = {
    hemiSky: [C(P.hemiDay), C(P.hemiNight)], hemiGround: [C(P.floor), C('#1b1a19')], hemiI: [1.15, 0.5],
    keyC: [C('#fff1dc'), C('#9aaad8')], keyI: [1.85, 0.32], spotC: [C('#ffd9a0'), C('#b0bfe8')], spotI: [1.6, 0.6],
    biasI: [0, 1.4], towerI: [0.25, 1.3], neonI: [0, 0.9], neonE: [0.6, 3.2], barE: [0.4, 2.2], screenI: [0.1, 1.1], ledI: [0, 1.2], ledE: [0, 2.2], fanE: [0.9, 2.6], scr: [0.86, 1.0],
    skyTop: [C(P.skyDayTop), C(P.skyNightTop)], skyBot: [C(P.skyDayBot), C(P.skyNightBot)],
  };
  const tmpC = new THREE.Color(); const lc = (pair, n) => tmpC.copy(pair[0]).lerp(pair[1], n);
  let themeN = 0;
  function applyTheme(n) {
    themeN = n;
    hemi.color.copy(lc(TH.hemiSky, n)); hemi.groundColor.copy(lc(TH.hemiGround, n)); hemi.intensity = lerp(TH.hemiI[0], TH.hemiI[1], n);
    key.color.copy(lc(TH.keyC, n)); key.intensity = lerp(TH.keyI[0], TH.keyI[1], n);
    spot.color.copy(lc(TH.spotC, n)); spot.intensity = lerp(TH.spotI[0], TH.spotI[1], n);
    bias.intensity = lerp(TH.biasI[0], TH.biasI[1], n); towerLight.intensity = lerp(TH.towerI[0], TH.towerI[1], n);
    screenLight.intensity = lerp(TH.screenI[0], TH.screenI[1], n);
    barMat.emissiveIntensity = lerp(TH.barE[0], TH.barE[1], n); lampMat.emissiveIntensity = lerp(0.4, 3, n);
    ledLight.intensity = ledLight2.intensity = lerp(TH.ledI[0], TH.ledI[1], n); ledMat.emissiveIntensity = lerp(TH.ledE[0], TH.ledE[1], n);
    const s = lerp(TH.scr[0], TH.scr[1], n); mainMat.color.setScalar(s); codeMat.color.setScalar(s); swMat.color.setScalar(Math.min(1, s + 0.1));
    skyMat.uniforms.top.value.copy(lc(TH.skyTop, n)); skyMat.uniforms.bot.value.copy(lc(TH.skyBot, n));
    const a = n * Math.PI;
    sun.position.set(0.45 + Math.sin(a) * 0.35, lerp(0.45, -1.05, easeInOut(Math.min(1, n * 1.4))), -0.42);
    sunHalo.position.set(sun.position.x, sun.position.y, -0.44);
    const m = clamp((n - 0.25) / 0.75, 0, 1);
    moon.position.set(-0.55 + (1 - m) * 0.3, lerp(-1.05, 0.42, easeInOut(m)), -0.42);
    cloudMat.opacity = 1 - n; clouds.visible = n < 0.99; starMat.opacity = clamp((n - 0.4) / 0.6, 0, 1); stars.visible = n > 0.4;
    if (blobMesh) blobMesh.material.opacity = (opts.blobOpacity ?? 0.3) * lerp(1, 0.6, n);
  }
  let themeP = opts.dark ? 1 : 0, themeTarget = themeP; applyTheme(themeP);

  const camera = new THREE.PerspectiveCamera(opts.fov || 32, 1, 1, 150);
  const HOME = { p: [0, 1.5, 0], yaw: 0.78, pitch: 0.5, dist: 21 };
  let timeline = null, progress = 0, layout = { sx: 0, sy: 0, fit: null };
  const cur = { t: new V3(...HOME.p), yaw: HOME.yaw, pitch: HOME.pitch, dist: HOME.dist };
  const des = { t: new V3(), yaw: 0, pitch: 0, dist: 0 };
  let asp = 1, tf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), snapped = false;
  let sized = false, sizedW = 0, sizedH = 0;
  function resize() {
    const w = container.clientWidth || 1, h = container.clientHeight || 1;
    if (sized && lowPower && w === sizedW && Math.abs(h - sizedH) < 160) return;
    sized = true; sizedW = w; sizedH = h; asp = w / h;
    renderer.setSize(w, h, false); camera.aspect = asp; camera.updateProjectionMatrix();
  }
  resize();
  const tmpV = { p: [0, 0, 0], yaw: 0, pitch: 0, dist: 1, shift: 0 };
  function viewAt(u) {
    if (!timeline || !timeline.length) return { ...HOME, shift: 0 };
    if (u <= timeline[0].u) return timeline[0].view;
    const L = timeline[timeline.length - 1]; if (u >= L.u) return L.view;
    let i = 0; while (i < timeline.length - 2 && u > timeline[i + 1].u) i++;
    const A = timeline[i], B = timeline[i + 1], s = smooth(clamp((u - A.u) / Math.max(1e-6, B.u - A.u), 0, 1));
    const a = A.view, b = B.view;
    for (let k = 0; k < 3; k++) tmpV.p[k] = lerp(a.p[k], b.p[k], s);
    tmpV.yaw = lerp(a.yaw, b.yaw, s); tmpV.pitch = lerp(a.pitch, b.pitch, s);
    tmpV.dist = Math.exp(lerp(Math.log(a.dist), Math.log(b.dist), s)); tmpV.shift = lerp(a.shift || 0, b.shift || 0, s);
    return tmpV;
  }

  const raycaster = new THREE.Raycaster(); const ndc = new THREE.Vector2();
  const ptr = { x: 0, y: 0, nx: 0, ny: 0, inside: false, down: null, moved: true };
  let hoverId = null;
  function pick(nx, ny) {
    ndc.set(nx, -ny); raycaster.setFromCamera(ndc, camera);
    for (const h of raycaster.intersectObject(world, true)) { let o = h.object; if (!o.visible) continue; while (o) { if (o.userData && o.userData.id) return o.userData.id; o = o.parent; } return null; }
    return null;
  }
  function setHover(id) { if (id === hoverId) return; hoverId = id; canvas.style.cursor = id ? 'pointer' : 'default'; opts.onHover && opts.onHover(id); }
  function localXY(e) { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, r.width, r.height]; }
  const onMove = (e) => { if (e.pointerType === 'touch') return; const [x, y, w, h] = localXY(e); Object.assign(ptr, { x, y, nx: (x / w) * 2 - 1, ny: (y / h) * 2 - 1, inside: true, moved: true }); if (opts.tipEl) opts.tipEl.style.translate = `${x}px ${y}px`; };
  const onDown = (e) => { ptr.down = { x: e.clientX, y: e.clientY }; };
  const onUp = (e) => {
    if (ptr.down && Math.hypot(e.clientX - ptr.down.x, e.clientY - ptr.down.y) < 6) { const [x, y, w, h] = localXY(e); opts.onSelect && opts.onSelect(pick((x / w) * 2 - 1, (y / h) * 2 - 1)); }
    ptr.down = null;
  };
  const onLeave = () => { ptr.inside = false; setHover(null); };
  canvas.addEventListener('pointermove', onMove); canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointerup', onUp); canvas.addEventListener('pointerleave', onLeave);
  const ro = new ResizeObserver(resize); ro.observe(container);
  let visible = true; const io = new IntersectionObserver((en) => { visible = en[0].isIntersecting; }); io.observe(container);

  let tStart = null, last = performance.now(), raf = 0, scrTimer = 1, frameN = 0;
  function frame(now) { raf = requestAnimationFrame(frame); step(now); }
  const right = new V3(), up = new V3();
  function step(now) {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (!visible) return;
    if (tStart === null) tStart = now;
    const t = (now - tStart) / 1000; frameN++;
    if (themeP !== themeTarget) { const sg = Math.sign(themeTarget - themeP); themeP = clamp(themeP + (sg * dt) / 1.5, 0, 1); if ((sg > 0 && themeP >= themeTarget) || (sg < 0 && themeP <= themeTarget)) themeP = themeTarget; applyTheme(easeInOut(themeP)); }
    if (ptr.inside && (ptr.moved || frameN % 8 === 0)) { setHover(pick(ptr.nx, ptr.ny)); ptr.moved = false; }
    for (const o of animated) {
      const u = o.userData, p = reduce ? 1 : clamp((t - u.delay) / 0.7, 0, 1), e = p >= 1 ? 1 : easeOutBack(p);
      o.visible = p > 0;
      if (u.kind === 'scale') o.scale.setScalar(Math.max(0.0001, e)); else o.position.y = u.baseY + (1 - e) * 2.4;
    }
    outside.visible = shell.visible && (reduce || t > 0.5);
    spin.rotation.y += dt * 0.3; fol.rotation.z = Math.sin(t * 1.1) * 0.02; palm.rotation.z = Math.sin(t * 1.4) * 0.04;
    { const h = (t * 0.08) % 1; fanMat.color.setHSL(h, 0.9, 0.55); fanMat.emissive.setHSL(h, 1, 0.5); towerLight.color.setHSL(h, 1, 0.55);
      fanMat.emissiveIntensity = lerp(TH.fanE[0], TH.fanE[1], themeN); }
    scrTimer += dt; if (scrTimer > (lowPower ? 0.5 : 0.25)) { scrTimer = 0; scrMain.draw(t, themeN); scrCode.draw(t, themeN); swScr.draw(t); }
    const v = viewAt(progress);
    const af = layout.fit != null ? layout.fit : Math.pow(Math.max(1, (opts.refAspect || 1.6) / asp), 0.8);
    des.t.set(v.p[0], v.p[1], v.p[2]); des.dist = v.dist * af;
    des.yaw = v.yaw + (ptr.inside ? ptr.nx * 0.025 : 0); des.pitch = v.pitch - (ptr.inside ? ptr.ny * 0.015 : 0);
    const sh = v.shift || 0;
    if (sh && (layout.sx || layout.sy)) {
      const halfH = des.dist * tf, halfW = halfH * asp;
      right.set(Math.cos(des.yaw), 0, -Math.sin(des.yaw));
      up.set(-Math.sin(des.pitch) * Math.sin(des.yaw), Math.cos(des.pitch), -Math.sin(des.pitch) * Math.cos(des.yaw));
      des.t.addScaledVector(right, -layout.sx * sh * halfW).addScaledVector(up, -layout.sy * sh * halfH);
    }
    const kc = snapped ? 1 - Math.exp(-dt * 6) : 1; snapped = true;
    cur.t.lerp(des.t, kc); cur.yaw += (des.yaw - cur.yaw) * kc; cur.pitch += (des.pitch - cur.pitch) * kc; cur.dist += (des.dist - cur.dist) * kc;
    camera.position.set(cur.t.x + Math.sin(cur.yaw) * Math.cos(cur.pitch) * cur.dist, cur.t.y + Math.sin(cur.pitch) * cur.dist, cur.t.z + Math.cos(cur.yaw) * Math.cos(cur.pitch) * cur.dist);
    camera.lookAt(cur.t);
    if (lowPower && (t < 2 || frameN % 8 === 0)) renderer.shadowMap.needsUpdate = true;
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  return {
    setTheme(dark, instant) { themeTarget = dark ? 1 : 0; if (instant) { themeP = themeTarget; applyTheme(themeP); } },
    setTimeline(keys) { timeline = keys; },
    setProgress(u) { progress = u; },
    setLayout(l) { layout = { sx: l.sx || 0, sy: l.sy || 0, fit: l.fit ?? null }; },
    dispose() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      canvas.removeEventListener('pointermove', onMove); canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp); canvas.removeEventListener('pointerleave', onLeave);
      geos.forEach((g) => g.dispose && g.dispose()); Object.values(mats).forEach((m) => m.dispose());
      renderer.dispose(); canvas.remove();
    },
  };
}

function makeScreen(P, kind) {
  const W = kind === 'main' ? 640 : 448, H = kind === 'main' ? 352 : 266;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'); const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const code = [
    ['#7b818c', '# train.py'],
    ['#ff8a6b', 'import ', '#ccd5ae', 'torch', '#cfd3da', ', pandas ', '#ff8a6b', 'as ', '#cfd3da', 'pd'],
    ['#ff8a6b', 'def ', '#ccd5ae', 'train', '#cfd3da', '(model, loader):'],
    ['#ff8a6b', '    for ', '#cfd3da', 'x, y ', '#ff8a6b', 'in ', '#cfd3da', 'loader:'],
    ['#cfd3da', '        loss = ', '#ccd5ae', 'criterion', '#cfd3da', '(model(x), y)'],
    ['#cfd3da', '        loss.', '#ccd5ae', 'backward', '#cfd3da', '()'],
    ['#cfd3da', '        opt.', '#ccd5ae', 'step', '#cfd3da', '()'],
    ['#ff8a6b', '    return ', '#cfd3da', 'model'],
    ['#7b818c', '# epoch 12/20  loss 0.214  acc 0.931'],
  ];
  function chrome(title) {
    x.fillStyle = P.screenBg; x.fillRect(0, 0, W, H);
    x.fillStyle = 'rgba(255,255,255,0.06)'; x.fillRect(0, 0, W, 28);
    [P.accent, '#5b5f66', '#5b5f66'].forEach((col, i) => { x.fillStyle = col; x.beginPath(); x.arc(16 + i * 15, 14, 4.5, 0, 7); x.fill(); });
    x.font = '600 13px ui-monospace, Menlo, monospace'; x.fillStyle = 'rgba(255,255,255,0.6)'; x.fillText(title, 66, 19);
  }
  function game(t) {
    const sky = x.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#6aa9ef'); sky.addColorStop(0.6, '#a8d2f5'); sky.addColorStop(1, '#d5ecfb');
    x.fillStyle = sky; x.fillRect(0, 0, W, H);
    x.fillStyle = '#fff4b0'; x.fillRect(W - 110, 30, 36, 36); x.fillStyle = 'rgba(255,244,176,0.35)'; x.fillRect(W - 118, 22, 52, 52);
    x.fillStyle = 'rgba(255,255,255,0.92)'; [[0, 34, 90], [180, 52, 70], [340, 26, 110]].forEach(([o, y, w]) => { const cx = ((o + t * 10) % (W + 140)) - 140; x.fillRect(cx, y, w, 14); x.fillRect(cx + 14, y - 8, w - 34, 10); });
    const pan = (t * 6) % 32;
    x.fillStyle = '#8fb3cf'; for (let i = -1; i < W / 16 + 2; i++) { const h = 5 + Math.round(3 * Math.sin(i * 0.5) + 2 * Math.sin(i * 1.3)); x.fillRect(i * 16 - (pan * 0.3) % 16, 150 - h * 8, 16, h * 8 + 30); }
    const s = 32, base = 170, cols = Math.ceil(W / s) + 2, off = -pan;
    for (let i = 0; i < cols; i++) { const gi = i + Math.floor(t * 6 / 32);
      const h = Math.round(1.5 + 1.2 * Math.sin(gi * 0.45) + 0.8 * Math.sin(gi * 1.1));
      const top = base - h * s + 32, px = off + i * s;
      const water = h <= 0;
      for (let y = top, k = 0; y < H; y += s, k++) blk(px, y, s, water && k === 0 ? 'sand' : k === 0 ? 'grass' : k < 2 ? 'dirt' : 'stone', gi * 31 + k);
      if (water) { x.fillStyle = 'rgba(52,108,214,0.75)'; x.fillRect(px, top - 32, s, 32); }
      if (gi % 7 === 2 && !water) { for (let k = 1; k <= 3; k++) blk(px, top - k * s, s, 'log', gi + k); for (let a = -1; a <= 1; a++) for (let b = 3; b <= 5; b++) if (!(b === 5 && a !== 0)) blk(px + a * s, top - b * s, s, 'leaf', gi * 3 + a + b); }
      if (gi % 11 === 6 && !water) { x.fillStyle = '#e0262c'; x.fillRect(px + 12, top - 12, 8, 6); x.fillStyle = '#3f7d2b'; x.fillRect(px + 15, top - 6, 2, 6); }
    }
    const cr = Math.floor((t * 2) % 6);
    x.strokeStyle = 'rgba(0,0,0,0.55)'; x.lineWidth = 2; x.strokeRect(W / 2 - 16, H / 2 - 16, 32, 32);
    for (let k = 0; k < cr; k++) { x.beginPath(); x.moveTo(W / 2 - 12 + k * 4, H / 2 - 12); x.lineTo(W / 2 + k * 2, H / 2 + 4 - k * 2); x.lineTo(W / 2 + 10 - k, H / 2 + 12); x.stroke(); }
    arm(t, true); hud(1, 10);
  }
  function dash(t) {
    chrome('analysis.ipynb');
    x.font = '12px ui-monospace, Menlo, monospace';
    [['#d4a373', 'accuracy', '0.93'], ['#ccd5ae', 'f1 score', '0.88'], ['#9cc3cc', 'auc', '0.95']].forEach(([col, lab, val], i) => {
      const bx = 18 + i * (W - 36) / 3, bw = (W - 36) / 3 - 12; x.fillStyle = 'rgba(255,255,255,0.05)'; x.fillRect(bx, 40, bw, 70);
      x.fillStyle = 'rgba(255,255,255,0.55)'; x.fillText(lab, bx + 10, 58); x.fillStyle = '#f2e8cf'; x.font = '600 20px ui-monospace, Menlo, monospace'; x.fillText(val, bx + 10, 84); x.font = '12px ui-monospace, Menlo, monospace';
      x.strokeStyle = col; x.lineWidth = 2.5; x.beginPath();
      for (let k = 0; k < 9; k++) { const yy = 100 - 10 * (0.5 + 0.5 * Math.sin(k * 0.9 + i + t * 0.7)); k ? x.lineTo(bx + bw * 0.45 + k * (bw * 0.5 / 8), yy - 18) : x.moveTo(bx + bw * 0.45, yy - 18); } x.stroke();
    });
    const top = 126, bh = H - top - 22, half = W / 2;
    x.fillStyle = 'rgba(255,255,255,0.04)'; x.fillRect(18, top, half - 28, bh); x.fillRect(half + 6, top, half - 24, bh);
    x.fillStyle = 'rgba(255,255,255,0.5)'; x.fillText('training loss', 28, top + 18); x.fillText('feature importance', half + 16, top + 18);
    x.strokeStyle = 'rgba(255,255,255,0.12)'; x.lineWidth = 1; for (let g = 1; g < 4; g++) { x.beginPath(); x.moveTo(28, top + 26 + g * (bh - 40) / 4); x.lineTo(half - 20, top + 26 + g * (bh - 40) / 4); x.stroke(); }
    [['#bc4749', 0], ['#9cc3cc', 0.25]].forEach(([col, o]) => { x.strokeStyle = col; x.lineWidth = 2.5; x.beginPath();
      for (let k = 0; k <= 40; k++) { const px = 30 + k * (half - 54) / 40, py = top + 30 + (bh - 46) * (1 - Math.exp(-k / (9 + o * 8))) * (0.92 - o * 0.25) + Math.sin(k * 1.7 + t) * 1.5; k ? x.lineTo(px, py) : x.moveTo(px, py); } x.stroke(); });
    [0.92, 0.74, 0.6, 0.44, 0.33, 0.21].forEach((v, i) => { const yy = top + 32 + i * ((bh - 42) / 6), w = (half - 70) * v * (0.96 + 0.04 * Math.sin(t + i));
      x.fillStyle = i === 0 ? '#d4a373' : 'rgba(204,213,174,0.8)'; x.fillRect(half + 40, yy, w, (bh - 42) / 6 - 6); x.fillStyle = 'rgba(255,255,255,0.45)'; x.fillText('f' + (i + 1), half + 16, yy + 10); });
  }
  function codeScreen(t) {
    chrome('train.py');
    const fs = Math.round(15 * W / 448), lh = Math.round(fs * 1.65);
    x.font = fs + 'px ui-monospace, Menlo, monospace';
    const shown = Math.min(code.length, 5 + Math.floor((t % 6) * 1.2));
    code.slice(0, shown).forEach((parts, li) => { x.fillStyle = 'rgba(255,255,255,0.25)'; x.fillText(String(li + 1).padStart(2, ' '), 12, 52 + li * lh); let px = 12 + fs * 2; for (let k = 0; k < parts.length; k += 2) { x.fillStyle = parts[k]; x.fillText(parts[k + 1], px, 52 + li * lh); px += x.measureText(parts[k + 1]).width; } });
    if (Math.floor(t * 2) % 2) { x.fillStyle = P.accent; x.fillRect(12 + fs * 2, 52 + (shown - 1) * lh + 6, fs * 0.6, fs); }
  }

  function hash(i, j) { const v = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453; return v - Math.floor(v); }

  function hud(sel, hearts) {
    const hb = 18, hx = W / 2 - (9 * hb) / 2, hy = H - hb - 4;
    x.fillStyle = 'rgba(0,0,0,0.55)'; x.fillRect(hx - 2, hy - 2, 9 * hb + 4, hb + 4);
    const items = [['#8a8d86', '#6b4a30'], ['#d9e3e8', '#6b4a30'], ['#5f8a3f', '#6b4a30'], ['#ffb347', '#7d5a38'], ['#c95a4e', '#c95a4e'], ['#7fd3df', '#7fd3df'], ['#e0b45a', '#e0b45a'], ['#6b4a30', '#6b4a30'], ['#4f9a3c', '#4f9a3c']];
    for (let i = 0; i < 9; i++) { const bx = hx + i * hb; x.fillStyle = 'rgba(139,139,139,0.55)'; x.fillRect(bx + 1, hy + 1, hb - 2, hb - 2);
      const [a, b] = items[i]; if (i < 2) { x.fillStyle = b; for (let k = 0; k < 4; k++) x.fillRect(bx + 4 + k * 2, hy + 13 - k * 2, 2, 2); x.fillStyle = a; x.fillRect(bx + 10, hy + 4, 4, 2); x.fillRect(bx + 12, hy + 4, 2, 4); x.fillRect(bx + 4, hy + 4, 8, 2); }
      else { x.fillStyle = a; x.fillRect(bx + 5, hy + 5, 8, 8); x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(bx + 9, hy + 9, 4, 4); } }
    x.strokeStyle = '#ffffff'; x.lineWidth = 2; x.strokeRect(hx + sel * hb, hy, hb, hb);
    x.fillStyle = '#3d3d3d'; x.fillRect(hx, hy - 7, 9 * hb, 4); x.fillStyle = '#80ff20'; x.fillRect(hx, hy - 7, 9 * hb * 0.62, 4);
    for (let i = 0; i < 10; i++) { const px = hx + i * 8, py = hy - 17; x.fillStyle = '#1b1b1b'; x.fillRect(px, py, 7, 7); x.fillStyle = i < hearts ? '#e0262c' : '#3d1a1a'; x.fillRect(px + 1, py + 1, 2, 2); x.fillRect(px + 4, py + 1, 2, 2); x.fillRect(px + 1, py + 2, 5, 2); x.fillRect(px + 2, py + 4, 3, 1); x.fillRect(px + 3, py + 5, 1, 1); }
    for (let i = 0; i < 10; i++) { const px = hx + 9 * hb - 7 - i * 8, py = hy - 17; x.fillStyle = '#1b1b1b'; x.fillRect(px, py, 7, 7); x.fillStyle = '#b5652a'; x.fillRect(px + 1, py + 1, 5, 4); x.fillStyle = '#e8d6b0'; x.fillRect(px + 4, py + 4, 2, 2); }
    x.fillStyle = 'rgba(255,255,255,0.85)'; x.fillRect(W / 2 - 1, H / 2 - 7, 2, 14); x.fillRect(W / 2 - 7, H / 2 - 1, 14, 2);
  }
  function blk(px, py, s, kind, seed) {
    const p = 4, n = s / p;
    for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) { const h = hash(seed * 7 + a, seed * 13 + b);
      let c;
      if (kind === 'grass') c = b < 1 + (hash(seed + a, 3) > 0.5 ? 1 : 0) ? (h < 0.3 ? '#5f9a3a' : h < 0.7 ? '#6fae45' : '#7cbd4e') : (h < 0.25 ? '#6b4a30' : h < 0.6 ? '#7a5536' : h < 0.85 ? '#8a6240' : '#5d4029');
      else if (kind === 'dirt') c = h < 0.25 ? '#6b4a30' : h < 0.6 ? '#7a5536' : h < 0.85 ? '#8a6240' : '#5d4029';
      else if (kind === 'stone') c = h < 0.3 ? '#7d7d7d' : h < 0.7 ? '#8a8a8a' : h < 0.9 ? '#6e6e6e' : '#9a9a9a';
      else if (kind === 'deep') c = h < 0.35 ? '#4a4a4f' : h < 0.75 ? '#55555a' : '#3d3d42';
      else if (kind === 'leaf') c = h < 0.15 ? 'rgba(0,0,0,0)' : h < 0.5 ? '#3f7d2b' : h < 0.8 ? '#4a8f33' : '#356b24';
      else if (kind === 'log') c = a % 2 ? (h < 0.5 ? '#6b5233' : '#5c4429') : (h < 0.5 ? '#7a5e3a' : '#6b5233');
      else if (kind === 'sand') c = h < 0.4 ? '#dbcf9a' : h < 0.8 ? '#e3d8a6' : '#cfc28c';
      else if (kind.startsWith('ore')) { const oc = { oreD: '#7fe0e8', oreG: '#f2cf4a', oreR: '#e0322c', oreI: '#d9b38c' }[kind]; c = (hash(seed + a * 3, b * 5) > 0.72 && a > 0 && b > 0 && a < n - 1 && b < n - 1) ? oc : (h < 0.35 ? '#4a4a4f' : h < 0.75 ? '#55555a' : '#3d3d42'); }
      if (c !== 'rgba(0,0,0,0)') { x.fillStyle = c; x.fillRect(px + a * p, py + b * p, p, p); }
    }
  }
  function arm(t, swing) {
    const bob = Math.sin(t * 4) * 3, sw = swing ? Math.max(0, Math.sin(t * 9)) * 18 : 0;
    x.save(); x.translate(W - 120 - sw, H - 70 + bob + sw * 0.6); x.rotate(-0.5 - sw * 0.02);
    x.fillStyle = '#6b4a30'; x.fillRect(30, -64, 8, 70);
    x.fillStyle = '#7fe0e8'; x.fillRect(4, -72, 60, 9); x.fillRect(4, -72, 9, 20); x.fillRect(55, -72, 9, 20);
    x.fillStyle = '#4fb8c4'; x.fillRect(4, -64, 60, 3);
    x.restore();
    x.save(); x.translate(W - 70, H - 30 + bob); x.rotate(-0.35);
    x.fillStyle = '#e9a3ad'; x.fillRect(-14, -30, 46, 64); x.fillStyle = '#d58c97'; x.fillRect(-14, -30, 46, 8);
    x.fillStyle = '#c68b62'; x.fillRect(-12, -46, 42, 18); x.restore();
  }
  function cave(t) {
    x.fillStyle = '#1e1f22'; x.fillRect(0, 0, W, H);
    x.fillStyle = '#2b2d31'; x.fillRect(46, 0, 104, H);
    x.fillStyle = '#313338'; x.fillRect(150, 0, W - 150, H);
    [['#5865f2', 'A'], ['#3ba55d', 'B'], ['#bc4749', 'C'], ['#d4a373', 'D']].forEach(([c, l], i) => { const cy = 26 + i * 42; x.fillStyle = c; x.beginPath(); x.arc(23, cy, 16, 0, 7); x.fill(); x.fillStyle = '#fff'; x.font = '600 11px sans-serif'; x.textAlign = 'center'; x.fillText(l, 23, cy + 4); x.textAlign = 'left'; if (i === 1) { x.fillStyle = '#fff'; x.fillRect(0, cy - 10, 3, 20); } });
    x.fillStyle = '#f2f3f5'; x.font = '600 12px sans-serif'; x.fillText('study group', 56, 22);
    x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(46, 32, 104, 1);
    x.font = '11px sans-serif';
    ['# general', '# projects', '# resources', '# random'].forEach((ch, i) => { if (i === 1) { x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(52, 40 + i * 20, 92, 18); } x.fillStyle = i === 1 ? '#f2f3f5' : '#949ba4'; x.fillText(ch, 58, 53 + i * 20); });
    x.fillStyle = '#949ba4'; x.font = '600 9px sans-serif'; x.fillText('VOICE', 56, 140);
    x.font = '11px sans-serif'; x.fillStyle = '#f2f3f5'; x.fillText('\u{1F50A} voice', 56, 157);
    ['user 1', 'user 2', 'user 3'].forEach((n, i) => { const sp = i === 0 || Math.sin(t * 3 + i * 2) > 0.3; x.strokeStyle = sp ? '#3ba55d' : 'transparent'; x.lineWidth = 2; x.fillStyle = ['#e9a3ad', '#9cc3cc', '#d4a373'][i]; x.beginPath(); x.arc(68, 172 + i * 18, 6, 0, 7); x.fill(); x.stroke(); x.fillStyle = '#b5bac1'; x.fillText(n, 80, 176 + i * 18); });
    x.fillStyle = '#232428'; x.fillRect(46, H - 34, 104, 34); x.fillStyle = '#e9a3ad'; x.beginPath(); x.arc(62, H - 17, 9, 0, 7); x.fill(); x.fillStyle = '#3ba55d'; x.beginPath(); x.arc(68, H - 11, 3.5, 0, 7); x.fill(); x.fillStyle = '#f2f3f5'; x.font = '600 10px sans-serif'; x.fillText('user 1', 76, H - 14);
    x.fillStyle = '#f2f3f5'; x.font = '600 12px sans-serif'; x.fillText('# projects', 162, 22); x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(150, 32, W - 150, 1);
    const msgs = [['user 2', '#9cc3cc', 'finished the data pipeline!'], ['user 1', '#e9a3ad', 'nice, the dashboard looks great'], ['user 3', '#d4a373', 'anyone up for a game tonight?'], ['user 1', '#e9a3ad', 'yes, give me ten minutes']];
    const shown = 2 + Math.floor((t / 2.5) % 3);
    msgs.slice(0, shown).forEach(([n, c, m], i) => { const y = 50 + i * 44; x.fillStyle = c; x.beginPath(); x.arc(172, y + 8, 10, 0, 7); x.fill(); x.fillStyle = c; x.font = '600 11px sans-serif'; x.fillText(n, 188, y + 6); x.fillStyle = '#949ba4'; x.font = '9px sans-serif'; x.fillText('Today at 21:' + String(10 + i * 3).padStart(2, '0'), 188 + x.measureText(n).width + 30, y + 6); x.fillStyle = '#dbdee1'; x.font = '11px sans-serif'; x.fillText(m, 188, y + 22); });
    if (shown < 4 && Math.floor(t * 2) % 2) { x.fillStyle = '#949ba4'; x.font = 'italic 10px sans-serif'; x.fillText('user 3 is typing\u2026', 162, H - 44); }
    x.fillStyle = '#383a40'; x.fillRect(160, H - 34, W - 172, 24); x.fillStyle = '#6d6f78'; x.font = '11px sans-serif'; x.fillText('Message #projects', 172, H - 18);
  }
  function draw(t, n) {
    if (kind === 'main') (n > 0.5 ? game : codeScreen)(t); else (n > 0.5 ? cave : dash)(t);
    x.fillStyle = 'rgba(0,0,0,0.08)'; for (let y = 0; y < H; y += 3) x.fillRect(0, y, W, 1);
    tex.needsUpdate = true;
  }
  return { tex, draw };
}

function makeSwitchScreen() {
  const W = 320, H = 180, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.magFilter = THREE.NearestFilter;
  const S = 16;
  const ground = (px, py) => { x.fillStyle = '#c84c0c'; x.fillRect(px, py, S, S); x.fillStyle = '#fca044'; x.fillRect(px, py, S, 2); x.fillRect(px, py, 2, S); x.fillStyle = '#000'; x.fillRect(px + S - 1, py, 1, S); x.fillRect(px, py + 8, S, 1); x.fillRect(px + 8, py + 8, 1, 8); };
  const brickB = (px, py) => { x.fillStyle = '#c84c0c'; x.fillRect(px, py, S, S); x.fillStyle = '#000'; x.fillRect(px, py + 7, S, 1); x.fillRect(px, py + 15, S, 1); x.fillRect(px + 7, py, 1, 7); x.fillRect(px + 3, py + 8, 1, 7); x.fillRect(px + 12, py + 8, 1, 7); x.fillStyle = '#fca044'; x.fillRect(px, py, S, 1); };
  const qBlock = (px, py, t) => { x.fillStyle = '#000'; x.fillRect(px, py, S, S); x.fillStyle = Math.floor(t * 3) % 3 === 2 ? '#c84c0c' : '#fca044'; x.fillRect(px + 1, py + 1, S - 2, S - 2); x.fillStyle = '#000'; x.fillRect(px + 2, py + 2, 1, 1); x.fillRect(px + 13, py + 2, 1, 1); x.fillRect(px + 2, py + 13, 1, 1); x.fillRect(px + 13, py + 13, 1, 1);
    x.fillStyle = '#7a2a00'; [[5, 3], [6, 3], [7, 3], [8, 3], [9, 4], [10, 4], [9, 5], [10, 5], [8, 6], [7, 7], [7, 8], [7, 10], [8, 10]].forEach(([a, b]) => x.fillRect(px + a, py + b + 1, 1.5, 1.5)); };
  const pipe = (px, py, h) => { x.fillStyle = '#000'; x.fillRect(px - 1, py - 1, 34, 18); x.fillRect(px + 1, py + 16, 30, h * S - 16); x.fillStyle = '#00a800'; x.fillRect(px, py, 32, 16); x.fillRect(px + 2, py + 16, 28, h * S - 16); x.fillStyle = '#80d010'; x.fillRect(px + 4, py + 2, 4, 12); x.fillRect(px + 6, py + 16, 4, h * S - 16); };
  const bush = (px, py, w) => { x.fillStyle = '#80d010'; for (let i = 0; i < w; i++) { x.beginPath(); x.arc(px + 8 + i * 14, py, 10, Math.PI, 0); x.fill(); } x.fillRect(px, py - 2, w * 14 + 4, 4); };
  const cloud = (px, py) => { x.fillStyle = '#fff'; x.beginPath(); x.arc(px, py, 9, 0, 7); x.arc(px + 12, py - 5, 11, 0, 7); x.arc(px + 25, py, 9, 0, 7); x.fill(); x.fillRect(px - 6, py, 38, 8); };
  const hill = (px, py) => { x.fillStyle = '#00a800'; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + 40, py - 70, px + 80, py); x.fill(); x.fillStyle = '#004800'; x.fillRect(px + 34, py - 26, 3, 6); x.fillRect(px + 44, py - 26, 3, 6); };
  const hero = (px, py, f, jumping) => {
    const R = '#d82800', Bn = '#887000', Sk = '#fca044', Bl = '#2038ec';
    const rows = jumping ? ['...RRRRR....', '..RRRRRRRRR.', '..BBBSSBS...', '.BSBSSSBSSS.', '.BSBBSSSBSSS', '.BBSSSSBBBB.', '...SSSSSSS..', '..RRBRRRB...', '.RRRBRRBRRR.', 'SSRBBBBBBRSS', 'SSBBBBBBBBSS', '..BBB..BBB..'] :
      ['...RRRRR....', '..RRRRRRRRR.', '..BBBSSBS...', '.BSBSSSBSSS.', '.BSBBSSSBSSS', '.BBSSSSBBBB.', '...SSSSSSS..', '..RRBRRR....', f ? '.RRRBBRRR...' : '.RRRBRRBRR..', f ? 'SRRRBBBBRRS.' : '.SSRBBBBRSS.', f ? '..BBB.BBB...' : '..BBBBBBB...', f ? '.BBB...BBB..' : '...BB..BB...'];
    const cmap = { R, B: Bl, S: Sk, N: Bn };
    rows.forEach((row, j) => [...row].forEach((ch, i) => { if (ch === '.') return; x.fillStyle = ch === 'B' && j < 7 ? Bn : cmap[ch]; x.fillRect(px + i * 1.34, py + j * 1.34, 1.4, 1.4); }));
  };
  const walker = (px, py, f) => { x.fillStyle = '#c84c0c'; x.beginPath(); x.moveTo(px, py + 10); x.quadraticCurveTo(px + 8, py - 6, px + 16, py + 10); x.fill(); x.fillStyle = '#fca044'; x.fillRect(px + 4, py + 10, 8, 3); x.fillStyle = '#000'; x.fillRect(px + (f ? 1 : 3), py + 13, 5, 3); x.fillRect(px + (f ? 10 : 8), py + 13, 5, 3); x.fillStyle = '#fff'; x.fillRect(px + 4, py + 3, 3, 4); x.fillRect(px + 9, py + 3, 3, 4); x.fillStyle = '#000'; x.fillRect(px + 5, py + 4, 2, 3); x.fillRect(px + 9, py + 4, 2, 3); };
  function draw(t) {
    x.fillStyle = '#5c94fc'; x.fillRect(0, 0, W, H);
    const scroll = (t * 28) % 256, gy = H - 2 * S;
    for (let k = -1; k < 3; k++) { const o = k * 256 - scroll * 0.5; hill(o + 10, gy); cloud(o + 60, 34); cloud(o + 190, 24); }
    for (let k = -1; k < 3; k++) { const o = k * 256 - scroll; bush(o + 150, gy, 3);
      qBlock(o + 64, gy - 64, t); brickB(o + 96, gy - 64); qBlock(o + 112, gy - 64, t + 0.3); brickB(o + 128, gy - 64); qBlock(o + 120, gy - 128 + 32, t + 0.6);
      pipe(o + 200, gy - 32, 2); }
    for (let i = -1; i < W / S + 2; i++) { ground(i * S - (scroll % S), gy); ground(i * S - (scroll % S), gy + S); }
    const cyc = (t * 28) % 256, wx = 236 - cyc * 0.6;
    if (wx > -20) walker(((wx % 320) + 320) % 320, gy - 16, Math.floor(t * 6) % 2);
    const ph = (t % 2.6) / 2.6, jump = ph > 0.55 && ph < 0.85, jy = jump ? Math.sin(((ph - 0.55) / 0.3) * Math.PI) * 46 : 0;
    hero(70, gy - 16 - jy, Math.floor(t * 8) % 2, jump);
    x.fillStyle = '#fff'; x.font = 'bold 9px monospace';
    x.fillText('PLAYER 1', 14, 14); x.fillText(String(12450 + Math.floor(t * 10) * 10).padStart(6, '0'), 14, 25);
    x.fillText('\u25CFx' + String(17 + Math.floor(t / 3) % 20).padStart(2, '0'), 92, 25);
    x.fillText('WORLD', 160, 14); x.fillText('1-1', 168, 25); x.fillText('TIME', 250, 14); x.fillText(String(400 - Math.floor(t) % 400).padStart(3, '0'), 254, 25);
    tex.needsUpdate = true;
  }
  draw(0);
  return { tex, draw };
}

function makeWhiteboard(P) {
  const W = 730, H = 430, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  x.fillStyle = '#fbfbf7'; x.fillRect(0, 0, W, H);
  x.lineCap = 'round'; x.lineJoin = 'round';
  const L = [[60, 90], [60, 190], [60, 290]], M1 = [[190, 70], [190, 150], [190, 230], [190, 310]], O = [[320, 140], [320, 240]];
  x.strokeStyle = 'rgba(36,38,28,0.5)'; x.lineWidth = 2;
  [[L, M1], [M1, O]].forEach(([a, b]) => a.forEach((p) => b.forEach((q) => { x.beginPath(); x.moveTo(p[0], p[1]); x.lineTo(q[0], q[1]); x.stroke(); })));
  [[L, '#335c67'], [M1, '#24261c'], [O, '#bc4749']].forEach(([pts, col]) => pts.forEach(([px, py]) => { x.fillStyle = '#fbfbf7'; x.strokeStyle = col; x.lineWidth = 4; x.beginPath(); x.arc(px, py, 17, 0, 7); x.fill(); x.stroke(); }));
  x.font = '600 30px "Comic Sans MS", "Segoe Print", cursive'; x.fillStyle = '#24261c';
  x.fillText('y = σ(Wx + b)', 400, 80);
  x.fillStyle = '#335c67'; x.fillText('∇θ L(θ)', 400, 135);
  x.strokeStyle = '#24261c'; x.lineWidth = 3; x.beginPath(); x.moveTo(420, 190); x.lineTo(420, 360); x.lineTo(680, 360); x.stroke();
  x.strokeStyle = '#bc4749'; x.lineWidth = 4; x.beginPath(); for (let i = 0; i <= 40; i++) { const px = 425 + i * 6.3, py = 200 + 150 * (1 - Math.exp(-i / 9)); i ? x.lineTo(px, py) : x.moveTo(px, py); } x.stroke();
  x.font = '600 22px "Comic Sans MS", "Segoe Print", cursive'; x.fillStyle = '#24261c'; x.fillText('loss', 432, 215); x.fillText('epochs', 600, 392);
  x.fillStyle = '#bc4749'; x.fillText('ship it ✓', 60, 385);
  [['#ccd5ae', 236, 340], ['#d4a373', 286, 352]].forEach(([col, px, py]) => { x.fillStyle = col; x.fillRect(px, py - 50, 44, 44); });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function makePeriodic() {
  const W = 380, H = 260, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  x.fillStyle = '#f2e8cf'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#24261c'; x.font = '700 15px ui-monospace, Menlo, monospace'; x.fillText('PERIODIC TABLE', 14, 22);
  const cs = 19.5, ox = 14, oy = 34, cols = ['#ccd5ae', '#d4a373', '#9cc3cc', '#e0b4a4', '#e7dcbf'];
  for (let r = 0; r < 7; r++) for (let k = 0; k < 18; k++) {
    if (r === 0 && k > 0 && k < 17) continue; if ((r === 1 || r === 2) && k > 1 && k < 12) continue;
    x.fillStyle = k < 2 ? cols[3] : k > 11 ? (k === 17 ? cols[2] : cols[0]) : cols[1]; x.fillRect(ox + k * cs, oy + r * cs, cs - 2, cs - 2);
  }
  for (let r = 0; r < 2; r++) for (let k = 0; k < 15; k++) { x.fillStyle = cols[4]; x.fillRect(ox + (k + 2.5) * cs, oy + (7.6 + r) * cs, cs - 2, cs - 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
