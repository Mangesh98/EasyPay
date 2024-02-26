"use client";
import { logoutUser } from "@/actions/logoutAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Loading from "@/app/loading";
import { FaHome, FaRegUser, FaSignOutAlt } from "react-icons/fa";

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
										href="/"
										className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
									>
										<FaHome />
										<span className="ms-3">Home</span>
									</Link>
								</li>
								<li>
									<Link
										href="/profile"
										className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
									>
										<FaRegUser />

										<span className="ms-3">Profile</span>
									</Link>
								</li>
								<li>
									<span
										onClick={logout}
										className="cursor-pointer flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
									>
										<FaSignOutAlt />

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
