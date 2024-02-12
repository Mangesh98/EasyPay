import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Link from "next/link";
const Login = () => {
	return (
		<>
			<section className="bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<Link
						href="#"
						className="flex items-center mb-6 text-2xl font-semibold text-white"
					>
						Login
					</Link>
					<div className="w-full bg-gray-800 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<Label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-white"
									>
										Your email
									</Label>
									<Input
										type="email"
										name="email"
										id="email"
										className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required
									/>
								</div>
								<div>
									<Label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-white"
									>
										Password
									</Label>
									<Input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<Input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
												required
											/>
										</div>
										<div className="ml-3 text-sm">
											<Label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300"
											>
												Remember me
											</Label>
										</div>
									</div>
									<Link
										href="#"
										className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Forgot password?
									</Link>
								</div>
								<Button
									type="submit"
									className="w-full text-white bg-primary-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Sign in
								</Button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Don’t have an account yet?{" "}
									<Link
										href="/register"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Sign up
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
