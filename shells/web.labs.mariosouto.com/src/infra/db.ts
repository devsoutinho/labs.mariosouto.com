import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "types/supabase";

// Create a single supabase client for interacting with your database
const settings = {
  url: process.env.NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_URL as string,
  public: process.env
    .NEXT_PUBLIC_SUPABASE_DEVSOUTINHO_LABS_KEY_PUBLIC as string,
  secret: process.env.SUPABASE_DEVSOUTINHO_LABS_KEY_SECRET as string,
} as const;

const supabase: SupabaseClient<Database> = createClient(
  settings.url,
  settings.public
);

let supabaseAdmin: SupabaseClient<Database>;
if (settings.secret) {
  supabaseAdmin = createClient(settings.url, settings.secret);
}

export function getDB(role: "admin" | "default" = "default") {
  if (role === "admin") {
    return supabaseAdmin;
  }
  return supabase;
}
