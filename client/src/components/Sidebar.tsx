"use client";
import { logoutUser } from "@/actions/logoutAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Loading from "@/app/loading";

const Sidebar = () => {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const logout = async () => {
		const response = await logoutUser();
		if (response.success) {
			router.push("/login");
		}
	};
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<button
						data-drawer-target="default-sidebar"
						data-drawer-toggle="default-sidebar"
						aria-controls="default-sidebar"
						type="button"
						className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
					>
						<span className="sr-only">Open sidebar</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								fillRule="evenodd"
								d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
							></path>
						</svg>
					</button>

					<aside
						id="default-sidebar"
						className="fixed mt-9 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-800"
						aria-label="Sidebar"
					>
						<div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
							<ul className="space-y-2 font-medium">
								<li>
									<Link
										href="#"
										className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
									>
										<svg
											className="w-5 h-5  transition duration-75 text-gray-400group-hover:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 22 21"
										>
											<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
											<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
										</svg>
										<span className="ms-3">Dashboard</span>
									</Link>
								</li>
								<li>
									<span
										onClick={logout}
										className="cursor-pointer flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
									>
										<svg
											className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400 group-hover:text-white"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 18 16"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
											/>
										</svg>
										<span className="ms-3">Logout</span>
									</span>
								</li>
							</ul>
						</div>
					</aside>
				</>
			)}
		</>
	);
};

export default Sidebar;
