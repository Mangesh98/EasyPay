import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MainPage from "../components/Main";

export default function Home() {
	return (
		<>
			<div className="w-full flex z-50 items-center flex-col bg-gray-100 mb-7">
				<Navbar />
			</div>
			<div className="border-r border-gray-600">
				<Sidebar />
			</div>
			<div className="md:mt-20 mt-0">
				<MainPage />
			</div>
		</>
	);
}
