import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const settings = {
  url: process.env.NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_URL as string,
  public: process.env
    .NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_KEY_PUBLIC as string,
  god: process.env.SUPABASE_DEVSOUTINHO_LABS_KEY_SECRET as string,
} as const;

let supabase = createClient(settings.url, settings.public);

export function getDB(mode: "god" | "public" = "public") {
  supabase = createClient(settings.url, settings.public);

  if (mode === "god") {
    supabase = createClient(settings.url, settings.god);
  }
  return supabase;
}
