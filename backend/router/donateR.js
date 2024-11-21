import express from "express";
import { createCheckoutSession } from "../controllers/checkout.js";

const router = express.Router();

// Define the route for creating a checkout session
router.post("/checkout", createCheckoutSession);

export default router;
