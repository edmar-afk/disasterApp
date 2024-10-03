import { useState, useEffect } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import api from "../../assets/api"; // Import your Axios instance

function Warning() {
	const [latestAlert, setLatestAlert] = useState(null);

	useEffect(() => {
		const fetchLatestAlert = async () => {
			try {
				const response = await api.get("/api/latest-alert/"); // Adjust the endpoint if necessary
				setLatestAlert(response.data);
				console.log("Latest Alert:", response.data);
			} catch (error) {
				console.error("Error fetching latest alert:", error);
			}
		};

		fetchLatestAlert();
	}, []); // Empty dependency array ensures this runs once when the component mounts

	const formatDate = (isoString) => {
		const date = new Date(isoString);
		return date.toLocaleString("en-US", {
			month: "short", // "Aug"
			day: "numeric", // "9"
			year: "numeric", // "2024"
			hour: "numeric", // "7"
			minute: "numeric", // "15"
			hour12: true, // "AM/PM"
		});
	};

	return (
		<>
			<p className="ml-3 mt-8 text-xs mb-1">Latest Report</p>
			<div className="bg-red-700 mx-2 p-4 text-white rounded-2xl">
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-col">
						<p className="font-bold flex items-center">{latestAlert ? latestAlert.alert_type : "Loading..."} </p>
						<p className="text-xs mb-1 bg-red-400 w-fit px-2 rounded-full">
							{latestAlert ? latestAlert.location : "Loading..."}
						</p>
						<p className="text-sm">{latestAlert ? latestAlert.description : "Loading..."}</p>
					</div>
					<WarningAmberIcon
						sx={{ fontSize: "80px" }}
						className="text-red-200"
					/>
				</div>
				<span className="text-xs text-red-100">{latestAlert ? formatDate(latestAlert.date) : "Loading..."}</span>
			</div>
		</>
	);
}

export default Warning;
