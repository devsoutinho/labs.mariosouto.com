import { Stripe, loadStripe } from "@stripe/stripe-js";

const KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;

let stripePromise: unknown;

export async function getStripe(): Promise<Stripe> {
  if (!stripePromise) {
    stripePromise = loadStripe(KEY);
  }

  return stripePromise as Promise<Stripe>;
}
