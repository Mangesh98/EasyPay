import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "Please provide a firstName"],
	},
	lastName: {
		type: String,
		required: [true, "Please provide a lastName"],
	},
	email: {
		type: String,
		required: [true, "Please provide a email"],
		unique: true,
	},
	mobile: {
		type: Number,
		required: [true, "Please provide a mobile number"],
		unique: true,
	},
	IdentificationType: {
		type: String,
		required: [true, "Please provide a mobile Identification Type"],
	},
	IdentificationNumber: {
		type: String,
		required: [true, "Please provide a mobile Identification Number"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	address: {
		type: String,
		required: [true, "Please provide a Address"],
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	forgotPasswordToken: String,
	forgotPasswordTokenExpiry: Date,
	verifyToken: String,
	verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
