// supabase.js — Supabase client + data-access stubs.
//
// HOW TO ACTIVATE:
//   1. npm install @supabase/supabase-js
//   2. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env
//   3. Uncomment the real implementations and delete the localStorage fallbacks.
//
// Schema expected (create these tables in Supabase):
//   collections (id text PK, user_id uuid, owned jsonb, repeats jsonb, mode text)
//   profiles    (id uuid PK refs auth.users, username text, created_at timestamptz)

// --- Client setup (commented out until credentials are provided) ---
// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

// --- Auth stubs ---

/**
 * Sign up with email + password.
 * Returns { user, error }
 */
export async function signUp(email, password) {
  // REAL: return supabase.auth.signUp({ email, password });
  console.warn('[supabase] signUp not yet wired — using localStorage');
  return { user: null, error: new Error('Supabase not configured') };
}

/**
 * Sign in with email + password.
 * Returns { user, error }
 */
export async function signIn(email, password) {
  // REAL: return supabase.auth.signInWithPassword({ email, password });
  console.warn('[supabase] signIn not yet wired — using localStorage');
  return { user: null, error: new Error('Supabase not configured') };
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  // REAL: return supabase.auth.signOut();
  console.warn('[supabase] signOut not yet wired');
}

/**
 * Get the currently signed-in user, or null.
 */
export async function getUser() {
  // REAL: const { data } = await supabase.auth.getUser(); return data?.user ?? null;
  return null;
}

// --- Collection data stubs ---

/**
 * Load owned + repeats for a collection from the cloud.
 * Falls back to localStorage values passed as second argument.
 *
 * @param {string} collId       - e.g. "laliga", "megacracks"
 * @param {object} localFallback - { owned: {}, repeats: {} }
 * @returns {{ owned: object, repeats: object }}
 */
export async function loadCollection(collId, localFallback = {}) {
  // REAL:
  // const user = await getUser();
  // if (!user) return localFallback;
  // const { data, error } = await supabase
  //   .from('collections')
  //   .select('owned,repeats')
  //   .eq('id', collId)
  //   .eq('user_id', user.id)
  //   .maybeSingle();
  // if (error || !data) return localFallback;
  // return { owned: data.owned || {}, repeats: data.repeats || {} };
  return localFallback;
}

/**
 * Save owned + repeats for a collection to the cloud.
 *
 * @param {string} collId
 * @param {object} owned   - { [cardId]: boolean }
 * @param {object} repeats - { [cardId]: number }
 */
export async function saveCollection(collId, owned, repeats) {
  // REAL:
  // const user = await getUser();
  // if (!user) return;
  // await supabase.from('collections').upsert({
  //   id: collId,
  //   user_id: user.id,
  //   owned,
  //   repeats,
  //   updated_at: new Date().toISOString(),
  // }, { onConflict: 'id,user_id' });
  console.debug('[supabase] saveCollection — not yet wired', collId);
}

/**
 * Load the collection mode ('normal' | 'inverse') from the cloud.
 */
export async function loadMode(collId) {
  // REAL: similar upsert/select pattern
  return null;
}

/**
 * Save the collection mode to the cloud.
 */
export async function saveMode(collId, mode) {
  // REAL: upsert to collections table
  console.debug('[supabase] saveMode — not yet wired', collId, mode);
}
