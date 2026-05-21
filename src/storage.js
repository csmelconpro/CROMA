// storage.js — Abstraction layer for persistence.
// Currently backed by localStorage. Swap the body of each function
// to point at Supabase (or any other backend) without touching the rest
// of the app.

const PREFIX = 'cc_';
const THEME_KEY = 'croma_theme';
const SHOWCOST_KEY = 'croma_showcost';
const MODE_PREFIX = 'croma_mode_';
const VIEW_PREFIX = 'croma_view_';

// --- Owned + Repeats ---

export function loadOwned(collId) {
  try {
    const raw = localStorage.getItem(`${PREFIX}${collId}`) || '{}';
    const d = JSON.parse(raw);
    return d.owned || d;
  } catch {
    return {};
  }
}

export function loadRepeats(collId) {
  try {
    const raw = localStorage.getItem(`${PREFIX}${collId}`) || '{}';
    const d = JSON.parse(raw);
    return d.repeats || {};
  } catch {
    return {};
  }
}

export function saveAll(collId, owned, repeats) {
  try {
    localStorage.setItem(`${PREFIX}${collId}`, JSON.stringify({ owned, repeats }));
  } catch {}
}

// --- Theme ---

export function loadTheme() {
  try { return localStorage.getItem(THEME_KEY) || 'dark'; } catch { return 'dark'; }
}

export function saveTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch {}
}

// --- Show Cost ---

export function loadShowCost() {
  try { return localStorage.getItem(SHOWCOST_KEY) === 'true'; } catch { return false; }
}

export function saveShowCost(val) {
  try { localStorage.setItem(SHOWCOST_KEY, val ? 'true' : 'false'); } catch {}
}

// --- Collection Mode (normal / inverse) ---

export function loadMode(collId) {
  try { return localStorage.getItem(`${MODE_PREFIX}${collId}`) || null; } catch { return null; }
}

export function saveMode(collId, mode) {
  try { localStorage.setItem(`${MODE_PREFIX}${collId}`, mode); } catch {}
}

// --- View Mode (list / grid) ---

export function loadView(collId) {
  try { return localStorage.getItem(`${VIEW_PREFIX}${collId}`) || 'list'; } catch { return 'list'; }
}

export function saveView(collId, mode) {
  try { localStorage.setItem(`${VIEW_PREFIX}${collId}`, mode); } catch {}
}

// Default export: LS-compatible object so App.jsx can use either
// `import * as Storage from './storage.js'` or the LS shim below.
export default {
  loadOwned,
  loadRepeats,
  saveAll,
  loadTheme,
  saveTheme,
  loadShowCost,
  savShowCost: saveShowCost, // keep legacy typo alias used in App.jsx
  loadMode,
  saveMode,
  loadView,
  saveView,
};
