const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());

const authRoute = require("./Routes/auth");
const queRoute = require("./Routes/que");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Succesful"));
}

app.use("/auth", authRoute);
app.use("/que", queRoute);

app.listen(1337, () => {
  console.log("Server started on 1337");
});
