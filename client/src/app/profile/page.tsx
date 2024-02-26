import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function page() {
	return (
		<>
			<div className="w-full flex z-50 items-center flex-col bg-gray-100 mb-7">
				<Navbar />
			</div>
			<div className="border-r border-gray-600">
				<Sidebar />
			</div>
			<div className="p-2 sm:ml-64 text-white h-screen md:mt-20 mt-0">
				This is Profile Page
			</div>
		</>
	);
}
