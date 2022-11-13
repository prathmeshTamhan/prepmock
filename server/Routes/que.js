const express = require("express");
const router = require("express").Router();
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { CNSchema, DBMSSchema, OSSchema, HRSchema } = require("../models/que.model");

router.post("/addQue", async (req, res) => {
  const CN = req.body.CN;
  const DBMS = req.body.DBMS;
  const OS = req.body.OS;
  const HR = req.body.HR;

  console.log(CN);

  try {
    CN.forEach(async (element) => {
      const CNQue = await CNSchema({
        difficultyLevel: element.difficultyLevel,
        que: element.Que,
        ansLink: element.ansLink,
      });

      const CNQueBank = await CNQue.save();
    });

    DBMS.forEach(async (element) => {
      const DBMSQue = await DBMSSchema({
        difficultyLevel: element.difficultyLevel,
        que: element.Que,
        ansLink: element.ansLink,
      });

      const DBMSQueBank = await DBMSQue.save();
    });

    OS.forEach(async (element) => {
      const OSQue = await OSSchema({
        difficultyLevel: element.difficultyLevel,
        que: element.Que,
        ansLink: element.ansLink,
      });

      const OSQueBank = await OSQue.save();
    });
    HR.forEach(async (element) => {
      const HRQue = await HRSchema({
        que: element.Que,
        ansLink: element.ansLink,
      });

      const HRQueBank = await HRQue.save();
    });

    res.json("Que Added");

  } catch (e) {
    console.log(e);
    res.json(e);
  }
});

router.get("/getQue", async (req, res) => {
  const subject = req.body.subject;
  const difficultyLevel = req.body.difficultyLevel;

  console.log({ subject, difficultyLevel });

  try {
    if (subject === "CN") {
      const queBank = await CNSchema.find({ difficultyLevel });
      res.json(queBank);
    } else if (subject === "DBMS") {
      const queBank = await DBMSSchema.find({ difficultyLevel });
      res.json(queBank);
    } else if (subject === "OS") {
      const queBank = await OSSchema.find({ difficultyLevel });
      res.json(queBank);
    }else if(subject=== 'HR'){
        const queBank = await HRSchema.find({que});
        res.json(queBank);
    }
  } catch (e) {
    console.log(e);
    res.json(e);
  }
});

module.exports = router;
