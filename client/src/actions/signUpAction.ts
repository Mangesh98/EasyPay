"use server";

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { singUpSchema } from "@/validators/auth-validator";

connect();

export const addUser = async (newUser: unknown) => {
	const result = singUpSchema.safeParse(newUser);

	if (!result.success) {
		return {
			error: result.error.issues[0].message,
		};
	}
	try {
		// console.log("Inside try : Actions");
		const reqBody = result.data;
		if (reqBody.password !== reqBody.confirmPassword) {
			return { message: "Password and Confirm Password does not match" };
		}

		// const reqBody = await request.json();
		const {
			firstName,
			lastName,
			email,
			mobile,
			IdentificationType,
			IdentificationNumber,
			address,
			password,
		} = reqBody;

		// console.log(reqBody);

		//check if user already exists
		const user = await User.findOne({ email });

		if (user) {
			return {
				error: "User already exists",
				status: 400,
			};
		}

		//hash password
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const newUser = new User({
			firstName,
			lastName,
			email,
			mobile,
			IdentificationType,
			IdentificationNumber,
			address,
			password: hashedPassword,
			balance: 0,
		});

		const savedUser = await newUser.save();
		console.log(savedUser);

		return {
			message: "User created successfully",
			success: true,
		};
	} catch (error: any) {
		return { error: error.message, status: 500 };
	}
};
