import { isSupabaseConfigured, supabase } from './supabaseClient.js'

/** Inserts only the public fields approved by the messages-table contract. */
export async function createContactMessage({ email, message, name }) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('CONTACT_UNAVAILABLE')
  }

  const { error } = await supabase.from('messages').insert({ email, message, name })

  if (error) {
    throw new Error('CONTACT_SUBMISSION_FAILED')
  }
}
