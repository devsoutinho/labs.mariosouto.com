/* eslint-disable no-console */
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "node:stream/consumers";

const KEY = process.env.STRIPE_SECRET_KEY as string;
const WH_KEY = process.env.STRIPE_WEBHOOK_KEY as string;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

  const stripe = new Stripe(KEY, {
    apiVersion: "2022-11-15",
  });

  let event: Stripe.Event;
  const reqBuffer = await buffer(req);
  const sig = req.headers["stripe-signature"] as string;

  console.log("reqBuffer", reqBuffer);

  try {
    event = stripe.webhooks.constructEvent(reqBuffer, sig, WH_KEY);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errMessage = (err as unknown as any).message;

    console.error(errMessage);

    res.status(400).send(`Webhook Error: ${errMessage}`);
    return;
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      (() => {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("paymentIntent", paymentIntent);
      })();
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).end();
}
