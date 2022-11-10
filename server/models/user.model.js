const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		college: {type: String, required: true},
		password: { type: String, required: true },
		quote: { type: String },
	}
)

// const model = 

module.exports = mongoose.model("UserData", User);
