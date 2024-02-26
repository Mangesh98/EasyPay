"use client";
import { useAuthContext } from "@/app/(context)/AuthContext";
import React from "react";

export default function Main() {
	const { userData } = useAuthContext();
	return (
		<>
			<div className="p-2 sm:ml-64 text-white h-screen md:mt-20 mt-0">
				<div className="max-w-xl p-4 mt-4 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col lg:flex-row">
					<div className="lg:w-1/2">
						<p className=" p-2">Account Number</p>
					</div>
					<div className="lg:w-1/2">
						<p className=" p-2">{userData?.firstName}</p>
					</div>
				</div>
				<div className="max-w-xl p-4 mt-4 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col lg:flex-row">
					<div className="lg:w-1/2">
						<p className=" p-2">First Name</p>
						<p className=" p-2">Last Name</p>
						<p className=" p-2">Email</p>
						<p className=" p-2">Mobile</p>
						<p className=" p-2">Identification Type</p>
						<p className=" p-2">Identification Number</p>
					</div>
					<div className="lg:w-1/2">
						<p className=" p-2">{userData?.firstName}</p>
						<p className=" p-2">{userData?.lastName}</p>
						<p className=" p-2">{userData?.email}</p>
						<p className=" p-2">{userData?.mobile}</p>
						<p className=" p-2">{userData?.IdentificationType}</p>
						<p className=" p-2">{userData?.IdentificationNumber}</p>
					</div>
				</div>
			</div>
		</>
	);
}
