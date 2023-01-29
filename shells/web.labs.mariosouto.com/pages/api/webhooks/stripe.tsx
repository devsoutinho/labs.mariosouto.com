/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import { login } from "@src/infra/auth/login";
import { workshopsRepository } from "@src/modules/workshops/repository";
import { userRepository } from "@src/modules/user/respository";

const KEY = process.env.STRIPE_SECRET_KEY as string;
const WH_KEY = process.env.STRIPE_WEBHOOK_KEY as string;

const stripe = new Stripe(KEY, {
  apiVersion: "2022-11-15",
});

const eventHandlers = {
  "payment_intent.succeeded": async (data: any) => {
    console.log("PaymentIntent was successful!", data);
  },
  "checkout.session.completed": async (data: any) => {
    const customerEmail = data.customer_details.email;

    await login("emailOnly", customerEmail);

    const sessionData = await stripe.checkout.sessions.retrieve(data.id, {
      expand: ["line_items"],
    });

    sessionData.line_items?.data?.forEach(async (item: any) => {
      const stripePriceId = item.price.id;

      const workshop = await workshopsRepository.getWorkshopByStripePriceId(
        stripePriceId
      );

      const customerId = await userRepository.getUserIdByEmail_god(
        customerEmail
      );
      console.log("customerId", customerId);

      if (workshop && customerId) {
        workshopsRepository.registerStudent(workshop.id, customerId);
      } else {
        console.error(
          "Error registering student in workshop",
          workshop,
          customerId
        );
      }
    });
  },
};

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

  let event: Stripe.Event;
  const reqBuffer = await buffer(req);
  const sig = req.headers["stripe-signature"] as string;

  try {
    event = stripe.webhooks.constructEvent(reqBuffer, sig, WH_KEY);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errMessage = (err as unknown as any).message;

    console.error(errMessage);

    res.status(400).send(`Webhook Error: ${errMessage}`);
    return;
  }

  const eventType = event.type as keyof typeof eventHandlers;

  console.log("eventType", eventType);

  if (eventHandlers[eventType]) {
    try {
      await eventHandlers[eventType](event.data.object);
    } catch (err) {
      const errMessage = (err as unknown as any).message;
      res.status(400).send(`Unhandled error: ${errMessage}`);
    }
  } else {
    console.error(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(200).end();
}
