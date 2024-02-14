"use server";

import jwt from "jsonwebtoken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { loginSchema } from "@/validators/auth-validator";
import { cookies } from "next/headers";

connect();

export const loginUser = async (user: unknown) => {
	const result = loginSchema.safeParse(user);
	console.log(result);
	console.log(user);

	if (!result.success) {
		return {
			error: result.error.issues[0].message,
		};
	}
	try {
		// console.log("Inside try : Actions");
		const reqBody = result.data;
		const { email, password } = reqBody;
		// console.log(reqBody);

		//check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return { error: "User does not exist", status: 400 };
		}
		// console.log("user exists");

		//check if password is correct
		const validPassword = await bcryptjs.compare(password, user.password);
		if (!validPassword) {
			return { error: "Invalid password", status: 400 };
		}
		// console.log(user);

		//create token data
		const tokenData = {
			id: user._id,
			username: user.username,
			email: user.email,
		};
		//create token
		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
			expiresIn: "1d",
		});

		cookies().set("token", token, {
			httpOnly: true,
			secure: true,
		});

		return {
			message: "User created successfully",
			success: true,
		};
	} catch (error: any) {
		return { error: error.message, status: 500 };
	}
};
