// getUserDataAction.ts
"use server";

import { UserInterface } from "@/app/(context)/AuthContext";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { cookies } from "next/headers";

export const getUserData = async () => {
	try {
		// const token = await cookies().get("token");
		// const tokenString = token.value;
		const cookieStore = cookies();
		const token = cookieStore.get("token");
		// console.log(token);

		if (token) {
			const decoded = jwt.verify(token.value, process.env.TOKEN_SECRET!);
			// console.log(decoded);

			// Retrieve user data from your database using the user ID from the decoded token
			const user = await User.findById(decoded.id);

			if (!user) {
				return null; // User not found in the database
			}
			const data = JSON.parse(JSON.stringify(user));
			return data as UserInterface;
		} else {
			// No user is logged in
			return null;
		}
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};
