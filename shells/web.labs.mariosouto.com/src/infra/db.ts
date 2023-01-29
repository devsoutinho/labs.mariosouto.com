import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const settings = {
  url: process.env.NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_URL as string,
  public: process.env
    .NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_KEY_PUBLIC as string,
  god: process.env.NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_KEY_SECRET as string,
} as const;

export function getDB(mode: "god" | "public" = "public") {
  if (mode === "god") {
    return createClient(settings.url, settings.god);
  }

  return createClient(settings.url, settings.public);
}
