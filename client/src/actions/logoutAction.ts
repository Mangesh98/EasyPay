"use server";
import { cookies } from "next/headers";

export const logoutUser = async () => {
	try {
		// Clear the "token" cookie
		cookies().set("token", "", {
			httpOnly: true,
			secure: true,
			expires: new Date(0), // Set expiration to past date
		});

		return {
			message: "User logged out successfully",
			success: true,
		};
	} catch (error) {
		console.error("Error logging out:", error);
		return { error: "An error occurred", status: 500 };
	}
};
