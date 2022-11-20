import React, { useState } from "react";
import feature from "../../images/feature_1.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


function Services() {


  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };


  async function displayRazorpay(amount) {
    const script = document.createElement("script");

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_i5PaivJMK8umIX",
      currency: "INR",
      amount: amount * 100,
      name: "PrepMock",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        console.log(response.razorpay_payment_id);
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "PrepMock",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section className=" plans-section">
      <h2 id="Headingplans">Our plans</h2>
      <div id="plans">
        <Card sx={{ width: '30%', height: 230 }}>
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
        <Card sx={{ width: '30%', height: 230 }}>
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
        <Card sx={{ width: '30%', height: 230 }}>
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
    </section>
  );
}

export default Services;
