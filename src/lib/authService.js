import { isSupabaseConfigured, supabase } from './supabaseClient.js'

/** Authenticates the manually created admin account without exposing provider details. */
export async function signInAdmin(email, password) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Authentication is unavailable.')
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    throw new Error('The email or password was not accepted.')
  }
}
