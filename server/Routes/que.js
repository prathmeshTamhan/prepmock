
const express = require('express')
const router = require("express").Router()
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require("dotenv")

const {CNSchema , DBMSSchema, OSSchema} = require('../models/que.model')

router.post('/addQue', async (req, res) => {

    const CN = req.body.CN
    const DBMS = req.body.DBMS
    const OS = req.body.OS

    console.log(CN);

    try {

        CN.forEach(async (element) => {

            const CNQue = await CNSchema({
                difficultyLevel: element.difficultyLevel,
                que: element.Que,
                ansLink: element.ansLink,
            })

            const CNQueBank = await CNQue.save()
        });

        DBMS.forEach(async (element) => {

            const DBMSQue = await DBMSSchema({
                difficultyLevel: element.difficultyLevel,
                que: element.Que,
                ansLink: element.ansLink,
            })

            const DBMSQueBank = await DBMSQue.save()
        });

        OS.forEach(async (element) => {

            const OSQue = await OSSchema({
                difficultyLevel: element.difficultyLevel,
                que: element.Que,
                ansLink: element.ansLink,
            })

            const OSQueBank = await OSQue.save()
        });

        res.json("Que Added")

    } catch (e) {
        console.log(e);
        res.json(e)
    }

})

router.get('/getQue' , async(req,res)=>{

    

})

module.exports = router