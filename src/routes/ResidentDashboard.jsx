import Header from "../components/residents/Header";
import Banner from "../components/residents/Banner";
import Warning from "../components/residents/Warning";
function ResidentDashboard() {
	return (
		<>
			<div className="bg-gray-100 h-screen pt-12">
				<Header />
				<Banner />
				<Warning />
			</div>
		</>
	);
}

export default ResidentDashboard;
