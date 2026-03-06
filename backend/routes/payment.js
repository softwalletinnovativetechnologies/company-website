import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
router.post("/payment-success", async (req, res) => {
  console.log("Payment success route hit");

  const { name, email, paymentId } = req.body;

  await sendMail(
    process.env.EMAIL_USER,
    "New Registration",
    `Name: ${name} Email: ${email} Payment: ${paymentId}`,
  );

  await sendMail(
    email,
    "Registration Successful",
    `Hello ${name}, your registration is successful for AI Exam with payment ID: ${paymentId}. Thank you for registering with us! </br> Best Regards, Softwallet Innovative Technologies </br>info@softwalletinnovativetechnologies.cloud`,
  );

  res.json({ status: "ok" });
});

router.post("/create-order", async (req, res) => {
  try {
    const order = await razorpay.orders.create({
      amount: 1000 * 100,
      currency: "INR",
      receipt: "ai_exam",
    });

    res.json(order);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Order creation failed",
    });
  }
});

export default router;
