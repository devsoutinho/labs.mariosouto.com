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

export async function login(provider: LoginProviders, email?: string) {
  const redirectUrl = `${
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/auth"
      : "http://localhost:3000/auth"
  }`;

  // eslint-disable-next-line no-console
  console.log("redirectUrl", process.env.NODE_ENV, redirectUrl);

  await providers[provider]({ email, redirectUrl });
}

export async function logout() {
  const db = getDB();
  await db.auth.signOut();
  window.location.assign("/");
}
