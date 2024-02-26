"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "../../loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { singUpSchema } from "@/validators/auth-validator";
import { addUser } from "@/actions/signUpAction";

export default function SignUpPage() {
	const router = useRouter();
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [user, setUser] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		mobile: "",
		IdentificationType: "",
		IdentificationNumber: "",
		address: "",
		password: "",
		confirmPassword: "",
	});

	const clientAction = async (formData: FormData) => {
		try {
			setLoading(true);
			const newUser = { ...user };

			const result = singUpSchema.safeParse(newUser);

			// Zod validation
			if (!result.success) {
				toast.error(result.error.issues[0].message);
			}
			if (newUser.password !== newUser.confirmPassword) {
				toast.error("Password and Confirm Password does not match");
			}

			const response = await addUser(result.data);
			if (response?.error) {
				toast.error(response.error);
			} else {
				toast.success("User added successfully");
				router.push("/login");
			}
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const isAnyInputEmpty = Object.values(user).some(
			(value) => typeof value === "string" && value.trim().length === 0
		);

		setButtonDisabled(isAnyInputEmpty);
	}, [user]);

	return (
		<>
				<div className="toaster">
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</div>
				{loading ? (
					<Loading />
				) : (
					<div className="min-h-screen flex items-center justify-center">
						<div className="max-w-screen-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
							<form className=" mx-auto" action={clientAction}>
								<div className="mb-8 ">
									<h1 className="text-4xl font-extrabold text-center dark:text-white">
										Welcome, Create your account
									</h1>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="col1">
										<div className="mb-5">
											<label
												htmlFor="firstName"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												First Name
											</label>
											<input
												type="text"
												id="firstName"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="First Name"
												required
												value={user.firstName}
												onChange={(e) =>
													setUser({ ...user, firstName: e.target.value })
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="firstName"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Last Name
											</label>
											<input
												type="text"
												id="lastName"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="Last Name"
												required
												value={user.lastName}
												onChange={(e) =>
													setUser({ ...user, lastName: e.target.value })
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="IdentificationType"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Identification Type
											</label>
											<select
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												id="IdentificationType"
												required
												value={user.IdentificationType}
												onChange={(e) =>
													setUser({
														...user,
														IdentificationType: e.target.value,
													})
												}
											>
												<option value="Choose Identification Type">
													Choose Identification Type
												</option>

												<option value="pan">Pan Card</option>
												<option value="aadhar">Aadhar Card</option>
											</select>
										</div>
										<div className="mb-5">
											<label
												htmlFor="password"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Password
											</label>
											<input
												type="password"
												id="password"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												required
												value={user.password}
												onChange={(e) =>
													setUser({
														...user,
														password: e.target.value,
													})
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="confirmPassword"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Address
											</label>
											<input
												type="text"
												id="address"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												required
												value={user.address}
												onChange={(e) =>
													setUser({
														...user,
														address: e.target.value,
													})
												}
											/>
										</div>
									</div>
									<div className="col2">
										<div className="mb-5">
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Your email
											</label>
											<input
												type="email"
												id="email"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="name@email.com"
												required
												value={user.email}
												onChange={(e) =>
													setUser({ ...user, email: e.target.value })
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="mobile"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Your Mobile
											</label>
											<input
												type="text"
												id="mobile"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="Enter your mobile number"
												required
												value={user.mobile}
												onChange={(e) =>
													setUser({ ...user, mobile: e.target.value })
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="IdentificationNumber"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Identification Number
											</label>
											<input
												type="text"
												id="IdentificationNumber"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												required
												placeholder="Enter your Identification Number"
												value={user.IdentificationNumber}
												onChange={(e) =>
													setUser({
														...user,
														IdentificationNumber: e.target.value,
													})
												}
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="confirmPassword"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Confirm Password
											</label>
											<input
												type="password"
												id="confirmPassword"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												required
												value={user.confirmPassword}
												onChange={(e) =>
													setUser({
														...user,
														confirmPassword: e.target.value,
													})
												}
											/>
										</div>
									</div>
								</div>
								<div className="flex items-center justify-between mb-5">
									{buttonDisabled ? (
										<button
											disabled
											type="submit"
											className="cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Submit
										</button>
									) : (
										<button
											// onClick={onSignUp}
											type="submit"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Submit
										</button>
									)}
									<Link
										href="/login"
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Login &rarr;
									</Link>
								</div>
							</form>
						</div>
					</div>
				)}
			
		</>
	);
}
