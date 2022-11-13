
const express = require('express')
const router = require("express").Router()
const app = express()
const cors = require('cors')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require("dotenv")


router.get( '/getDummy', async(req,res)=>{

    try{
        res.json("Noice")
    }catch(e){
        res.json(e)
    }

})

router.post('/register', async (req, res) => {
	
	console.log(req.body)

	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
        
		const newUser = await User({
			name: req.body.name,
			email: req.body.email,
			college:req.body.college,
			password: newPassword,
		})

		const user = await newUser.save()
		res.json({ status: 'ok', user })

	} catch (err) {
		res.json({ status: 'error', error: 'Email Already Registered!' })
	}
})

router.post('/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

module.exports = router