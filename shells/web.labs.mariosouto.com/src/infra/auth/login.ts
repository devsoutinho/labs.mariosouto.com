import { getDB } from "@src/infra/db";

interface LoginProviderInput {
  email?: string;
  redirectUrl: string;
}
const providers = {
  async emailOnly({ email, redirectUrl }: LoginProviderInput) {
    const db = getDB();

    if (!email) {
      throw new Error("Email is required");
    }

    return db.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });
  },
  async github({ redirectUrl }: LoginProviderInput) {
    const db = getDB();
    return await db.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: redirectUrl,
      },
    });
  },
};

type LoginProviders = keyof typeof providers;

const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export async function login(provider: LoginProviders, email?: string) {
  const redirectUrl = `${getURL()}/auth`;

  // eslint-disable-next-line no-console
  console.log("redirectUrl", redirectUrl);

  await providers[provider]({ email, redirectUrl });
}

export async function logout() {
  const db = getDB();
  await db.auth.signOut();
  window.location.assign("/login");
}
