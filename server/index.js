const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const dotenv = require("dotenv");

dotenv.config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(cors());
app.use(express.json());

const authRoute = require("./Routes/auth");
const queRoute = require("./Routes/que");
const paymentRoute = require("./Routes/payment");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Succesful"));
}

app.use("/auth", authRoute);
app.use("/que", queRoute);
app.use("/payment", paymentRoute);





app.listen(1337, () => {
  console.log("Server started on 1337");
});
