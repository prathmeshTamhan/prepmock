//created an API (Insertion of question to database in done using postman)
const express = require("express");
const router = require("express").Router();
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { CNSchema, DBMSSchema, OSSchema, HRSchema } = require("../models/que.model");

//an endpont to insert data into database that is to insert questions
router.post("/addQue", async (req, res) => {
  const CN = req.body.CN;
  const DBMS = req.body.DBMS;
  const OS = req.body.OS;
  const HR = req.body.HR;

  console.log(CN);
  //Iterating over the number of questions put in postman and publishing it over database
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

//an endpoint to retrieve the data from database
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
    } else if (subject === 'HR') {
      const queBank = await HRSchema.find({ que });
      res.json(queBank);
    }
  } catch (e) {
    console.log(e);
    res.json(e);
  }

});

router.post('/getRandomQue', async (req, res) => {

  const subject = req.body.subject;

  let  difficultyLevel = null

  if( subject !== "HR" ){
     difficultyLevel = req.body.difficultyLevel;
  }

  let queBank = []

  const mustHaveQue = [
    {_id: '', que: 'What are your Strength and Weaknesses?'},
    {_id: '', que: 'Introduce Yourself?'},
  ]

  try {

    if (subject === "CN") {

      queBank = await CNSchema.find({ difficultyLevel });


    } else if (subject === "DBMS") {

      queBank = await DBMSSchema.find({ difficultyLevel });

    } else if (subject === "OS") {

      queBank = await OSSchema.find({ difficultyLevel });

    } else if (subject === 'HR') {

      queBank = await HRSchema.find();

    }

    const shuffled = queBank.sort(() => 0.5 - Math.random());
    let randomQueBank = shuffled.slice(0, 10);
    res.json([ ...randomQueBank, ...mustHaveQue ])


  } 
  catch (e) {
    console.log(e);
    res.json(e);
  }

  



})

module.exports = router;
