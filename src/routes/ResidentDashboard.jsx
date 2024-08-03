import Header from "../components/residents/Header";
import Banner from "../components/residents/Banner";
import Warning from "../components/residents/Warning";
import ReportCategory from "../components/residents/ReportCategory";
import Footer from "../components/residents/Footer";
function ResidentDashboard() {
	return (
		<>
			<div className="bg-gray-100 h-full pt-12">
				<Header />
				<Banner />
				<Warning />
				<ReportCategory />
				<Footer/>
			</div>
		</>
	);
}

export default ResidentDashboard;
