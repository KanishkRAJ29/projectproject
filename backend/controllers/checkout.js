import Stripe from "stripe";
import { Volunteer } from "../models/volunteer.js";

// Initialize Stripe with your secret key
const stripe = new Stripe("sk_test_51QNRwMJlzOeNyS4Oi6Y7OXZKICTQK6G3iOh3X1LdTNTXHWAT59YEUW4YP37MdFwnS5AvA6Lmn0ksb1zcUPEB3OuF00rVwuoJ1E");

export const createCheckoutSession = async (req, res) => {
  try {
    const { name, email, amount, message } = req.body;

    // Validate input
    if (!name || !email || !amount) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Create a new Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
              description: `Donation by ${name} - ${message || "No message provided"}`,
            },
            unit_amount: amount * 100, // Stripe requires the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        name,
        email,
        message,
      },
    });

    // Save order details to the database
    const volunteer = new Volunteer({
      name,
      email,
      amount,
      orderId: session.id,
      paymentStatus: "pending",
    });
    await volunteer.save();

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
