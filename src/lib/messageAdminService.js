import { isSupabaseConfigured, supabase } from './supabaseClient.js'

function requireClient() {
  if (!isSupabaseConfigured || !supabase) throw new Error('The secure connection is unavailable.')
  return supabase
}

/** Returns the current browser session restored by Supabase. */
export async function getAdminSession() {
  const client = requireClient()
  const { data, error } = await client.auth.getSession()
  if (error) throw new Error('The session could not be verified.')
  return data.session
}

/** Reads only the fields required by the private message manager. */
export async function getContactMessages() {
  const client = requireClient()
  const { data, error } = await client
    .from('messages')
    .select('id, name, email, message, created_at')
    .order('created_at', { ascending: false })
  if (error) throw new Error('Messages could not be loaded.')
  return data ?? []
}

/** Deletes one selected message after confirmation in the interface. */
export async function deleteContactMessage(id) {
  const client = requireClient()
  const { error } = await client.from('messages').delete().eq('id', id)
  if (error) throw new Error('The message could not be deleted.')
}

/** Ends the authenticated browser session. */
export async function signOutAdmin() {
  const client = requireClient()
  const { error } = await client.auth.signOut()
  if (error) throw new Error('Sign out could not be completed.')
}
