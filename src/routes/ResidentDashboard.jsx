import Header from "../components/residents/Header";
import Banner from "../components/residents/Banner";
import Warning from "../components/residents/Warning";
import ReportCategory from "../components/residents/ReportCategory";
import Footer from "../components/residents/Footer";
import Maps from "../components/residents/Maps";
import BottomNav from "../components/BottomNav";

function ResidentDashboard() {
	const userData = JSON.parse(localStorage.getItem("userData")) || null; // Default to null if empty

	return (
		<div className="bg-gray-100 h-full pt-12">
			<Header />
			<Banner />
			<Warning />
			<ReportCategory />
			<Maps />
			<Footer />
			{userData && userData.is_superuser && <BottomNav />} {/* Check if userData exists and is_superuser */}
		</div>
	);
}

export default ResidentDashboard;
