import WarningAmberIcon from "@mui/icons-material/WarningAmber";
function Warning() {
	return (
		<>
			<p className="ml-3 mt-8 text-xs mb-1">Latest Report</p>
			<div className="bg-red-700 mx-2 p-4 text-white rounded-2xl">
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-col">
						<p className="font-bold flex items-center">
							Landslide Warning <span className="text-xs ml-2 text-red-100"> 10 min ago</span>
						</p>
						<p className="text-xs mb-1 bg-red-400 w-fit px-2 rounded-full">Barangay Biswangan Area</p>
						<p className="text-sm">
							The barangay Officials declares a mass evacuation near purok 4 due to heavy rain and potential landslide.
						</p>
					</div>
					<WarningAmberIcon
						sx={{ fontSize: "80px" }}
						className="text-red-200"
					/>
				</div>
			</div>
		</>
	);
}

export default Warning;
