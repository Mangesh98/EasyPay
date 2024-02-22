"use client";
import { logoutUser } from "@/actions/logoutAction";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const router = useRouter();
	const logout = async () => {
		const response = await logoutUser();
		if (response.success) {
			router.push("/login");
		}
	};
	return (
		<>
			<nav className="bg-gray-900 text-white fixed w-full z-30 top-0 start-0 border-b border-gray-600">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link
						href="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						{/* todo : Logo  */}
						{/* <Image
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8"
							alt="Flowbite Logo"
						/> */}
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							EasyPay
						</span>
					</Link>

					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dbg-gray-800 md:bg-gray-900 border-gray-700">
							<li>
								<span className="self-center font-semibold whitespace-nowrap dark:text-white">
									UserName
								</span>
							</li>
							<li className="cursor-pointer">
								<span
									onClick={logout}
									className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500"
								>
									Logout
								</span>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
