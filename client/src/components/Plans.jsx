import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import feature from "../images/feature_1.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Services() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);

  function displayRazorpay() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {

        setLoading(true);
      
        const result = await axios.post(
          "http://localhost:1337/payment/create-order",
          {
            amount:  document.getElementById("999").value,
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post("/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
            // fetchOrders();
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#3D11B6",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        //if failed
        //         var rzp1 = new Razorpay(options);
        // rzp1.on('payment.failed', function (response){
        //         alert(response.error.code);
        //         alert(response.error.description);
        //         alert(response.error.source);
        //         alert(response.error.step);
        //         alert(response.error.reason);
        //         alert(response.error.metadata.order_id);
        //         alert(response.error.metadata.payment_id);

        // });
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    };
    document.body.appendChild(script);
  }
  return (
    <div>
      <h2 id="Headingplans">Our plans</h2>
      <div id="plans">
        <Card sx={{ maxWidth: 300, height: 230 }}>
          <CardMedia
            component="feature"
            height="140"
            image={feature}
            alt="green iguana"
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weekly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 150 vide calls a day and 50 mock
                question of each domains. Difficulty level increases
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button variant="contained">Buy 299/-</Button> */}
            <Button variant="contained">Buy 299/-</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, height: 230 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Monthly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 350 video calls a day and 150 mock
                question of each domains. More practice, means high success
                rate.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained">Buy 499/-</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, height: 230 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Yearly Subscription
              </Typography>
              <Typography variant="body2" color="text.primary">
                Weekly Subscription includes 550 vide calls a day and 200 mock
                question of each domains. Can use this subscription for the
                quick interview prep at any moment
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              id='999' value={999}
              onClick={() => {
                displayRazorpay(999);
              }}
            >
              {" "}
              Buy 999/-
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Services;
