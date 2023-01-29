import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripeClient = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2022-11-15",
});
const YOUR_DOMAIN = "http://localhost:3000";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const customer = {
      email: "customer@example.com",
    };
    const session = await stripeClient.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1MVTUqLN2utuQszIrxjfXX4p",
          quantity: 1,
        },
      ],
      mode: "payment",
      currency: "brl",
      customer_email: customer.email,
      success_url: `${YOUR_DOMAIN}/checkout?success=true`,
      cancel_url: `${YOUR_DOMAIN}/checkout?canceled=true`,
    });

    if (session.url) {
      res.status(303).redirect(session.url);
      return;
    }

    return res.status(400).json({ message: "Error creating session" });
  }
}
