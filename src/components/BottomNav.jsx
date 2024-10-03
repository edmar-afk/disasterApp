import { NavLink } from "react-router-dom";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
function BottomNav() {
	return (
		<>
			<div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-400">
				<div className="h-full max-w-lg flex flex-row justify-evenly items-center mx-auto font-medium">
					<NavLink
						to="/resident-dashboard"
						className={({ isActive }) =>
							`inline-flex flex-col items-center justify-center group ${isActive ? "text-blue-700" : ""}`
						}>
						<HomeOutlinedIcon />
						<span className="text-xs">Home</span>
					</NavLink>
					<div className="flex flex-col">
						<NavLink
							to="/hazard-map"
							className={({ isActive }) =>
								`inline-flex flex-col items-center justify-center group ${isActive ? "text-blue-700" : ""}`
							}>
							<CampaignOutlinedIcon />
							<p className="text-xs">Alert</p>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}

export default BottomNav;
