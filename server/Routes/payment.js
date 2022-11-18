const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const Order = require("../models/payment.model");

dotenv.config();

//api to get the razor pay key
router.get("/get-razorpay-key", (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

router.post("/create-order", async (req, res) => {
  try {
    console.log(req.body.amount);

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    console.log(instance);

    const options = {
      amount: req.body.amount,
      currency: "INR",
    };

    // const newUser = await User({
		// 	name: req.body.name,
		// 	email: req.body.email,
		// 	college:req.body.college,
		// 	password: newPassword,
		// })

		// const user = await newUser.save()

    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/pay-order", async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newOrder = Order({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newOrder.save();
    res.send({
      msg: "Payment was successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
