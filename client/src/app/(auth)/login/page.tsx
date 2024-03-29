"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Loading from "../../loading";
import { loginSchema } from "@/validators/auth-validator";
import { loginUser } from "@/actions/loginAction";
import { useAuthContext } from "../../(context)/AuthContext";

export default function LoginPage() {
	const router = useRouter();
	const [user, setUser] = React.useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const { setUserData } = useAuthContext();

	const clientAction = async (formData: FormData) => {
		try {
			setLoading(true);
			const data = {
				...user,
			};

			const result = loginSchema.safeParse(data);

			if (result.success) {
				const response = await loginUser(result.data);

				if (response.success) {
					const userData = response.data;
					setUserData(userData);
					toast.success("Login success");
					router.push("/login");
				} else {
					toast.error(response.error);
				}
			} else {
				toast.error(result.error.issues[0].message);
			}
		} catch (error: any) {
			setLoading(false);
			toast.error(error.response?.data?.error || "Login failed");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
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
					<div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
						<form className="max-w-sm mx-auto" action={clientAction}>
							<div className="mb-8">
								<h1 className="text-4xl font-extrabold text-center dark:text-white">
									Welcome Back
								</h1>
							</div>
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
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your password
								</label>
								<input
									type="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									value={user.password}
									onChange={(e) =>
										setUser({ ...user, password: e.target.value })
									}
								/>
							</div>
							<div className="flex items-start mb-5">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
									/>
								</div>
								<label
									htmlFor="remember"
									className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Remember me
								</label>
							</div>
							<div className="flex items-center justify-between mb-5">
								{buttonDisabled ? (
									<button
										disabled
										type="button"
										className="cursor-not-allowed text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
									>
										Submit
									</button>
								) : (
									<button
										type="submit"
										className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
									>
										Submit
									</button>
								)}

								<Link
									href="/signup"
									type="button"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Register &rarr;
								</Link>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
