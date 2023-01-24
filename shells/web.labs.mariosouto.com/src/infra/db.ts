import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const settings = {
  url: process.env.NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_URL as string,
  public: process.env
    .NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_KEY_PUBLIC as string,
} as const;

const supabase = createClient(settings.url, settings.public);

export function getDB() {
  return supabase;
}