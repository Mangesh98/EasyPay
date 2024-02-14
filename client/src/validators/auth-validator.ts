import { TypeOf, z } from "zod";

export const loginSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.trim()
		.email({ message: "Invalid email address" })
		.min(3, { message: "Email must be at lest of 3 chars. " })
		.max(255, { message: "Email must not be more then 255 characters" }),
	password: z
		.string({ required_error: "Password is required" })
		.trim()
		.min(7, { message: "Password must be at lest of 7 chars. " })
		.max(1024, { message: "Password must not be more then 1024 characters" }),
});
// creating an object schema
export const singUpSchema = loginSchema.extend({
	firstName: z
		.string({ required_error: "firstName is required" })
		.trim()
		.min(3, { message: "first Name must be at lest of 3 chars. " })
		.max(255, { message: "first Name must not be more then 255 characters" }),
	lastName: z
		.string({ required_error: "lastName is required" })
		.trim()
		.min(3, { message: "lastName must be at lest of 3 chars. " })
		.max(255, { message: "lastName must not be more then 255 characters" }),
	mobile: z
		.string({ required_error: "Mobile Number is required" })
		.trim()
		.min(10, { message: "Mobile Number must be at lest of 10 chars. " })
		.max(20, { message: "Mobile Number must not be more then 20 characters" }),
	IdentificationType: z
		.string({ required_error: "Identification Type is required" })
		.trim(),
	IdentificationNumber: z
		.string({ required_error: "IdentificationNumber Type is required" })
		.trim()
		.min(5, { message: "Identification Number must be at lest of 5 chars. " })
		.max(20, {
			message: "Identification Number must not be more then 20 characters",
		}),
	confirmPassword: z
		.string({ required_error: "Confirm Password is required" })
		.trim()
		.min(7, { message: "Confirm Password must be at lest of 7 chars. " })
		.max(1024, {
			message: "Confirm Password must not be more then 1024 characters",
		}),
	address: z
		.string({ required_error: "Address is required" })
		.trim()
		.min(7, { message: "Address must be at lest of 7 chars. " })
		.max(1024, {
			message: "Address must not be more then 1024 characters",
		}),
});

// module.exports = { singUpSchema, loginSchema };
export type singUpForm = z.infer<typeof singUpSchema>;
export type loginForm = z.infer<typeof loginSchema>;
