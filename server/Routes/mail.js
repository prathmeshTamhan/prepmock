
const express = require('express')
const router = require("express").Router()
const app = express()
const cors = require('cors')
// const blobToBase64 = require('blob-to-base64')
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prathamtamhan123@gmail.com',
        pass: 'kmpjcjyrarferhvq'
    }
});

router.post('/sendMail', async (req, res) => {

    const mail = JSON.stringify(req.body.mail)
    const recNo = req.body.recNo
    let media = req.body.media


    // blobToBase64(media, (result) => {
    //     console.log(result)
    // })

    console.log(`<a href="${media}" >Click</a>`)

    var mailOptions = {
        from: 'prathamtamhan123@gmail.com',
        to: mail,
        subject: `Screen recording for an Issue number ${recNo}`,
        html: `<a href="${media}" >Click</a>`
    };

    try {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send('error') // if error occurs send error as response to client
            }
            else {
                console.log('Email sent: ' + info.response);
                res.status(200).json("Email Sent")
            }
        });
    }
    catch (e) {
        console.log(e)
    }
});


module.exports = router