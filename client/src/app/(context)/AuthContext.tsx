"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "@/actions/getUserDataAction";
export interface UserInterface {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	mobile: number;
	IdentificationType: string;
	IdentificationNumber: string;
	password: string;
	address: string;
	isVerified: boolean;
	isAdmin: boolean;
	balance: number;
}
interface AuthContextProps {
	userData: UserInterface | null;
	setUserData: (user: UserInterface | null) => void;
}
const AuthContext = createContext<AuthContextProps>({
	userData: null,
	setUserData: (user: UserInterface | null) => {},
});

export const AuthProvider = ({ children }: any) => {
	const [userData, setUserData] = useState<UserInterface | null>(null);

	// Fetch user data
	const fetchUserData = async () => {
		const data = await getUserData();
		setUserData(data);
	};
	console.log("fetching user data");

	useEffect(() => {
		fetchUserData();
	}, []);

	// Pass the fetchUserData function as a callback to setUserData
	const updateUserAndFetchData = (user: UserInterface | null) => {
		setUserData(user);
		if (user) {
			fetchUserData();
		}
	};

	return (
		<AuthContext.Provider
			value={{ userData, setUserData: updateUserAndFetchData }}
		>
			{children}
		</AuthContext.Provider>
	);
};
export const useAuthContext = () => useContext(AuthContext);
