import BottomNav from "../BottomNav";import Footer from "../residents/Footer";
import floodImg from "../../assets/img/preps/flood.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
function FloodPrep() {
	const userData = JSON.parse(localStorage.getItem("userData")) || null;
	return (
		<>
			<div className="relative">
				<Link
					to={"/"}
					className="fixed left-3 top-3 bg-blue-700 text-white p-1 rounded-full">
					<ArrowBackIcon />
				</Link>
				<img
					src={floodImg}
					alt=""
				/>
				<p className="font-bold p-4 text-2xl">Flood Preparedness</p>
				<p className="p-4 text-sm">
					Flood Disaster Preparedness is crucial for minimizing risks and damage caused by floods. Here’s how to stay
					prepared:
					<br /> <br />
					<b className="text-lg"> 1. Understand Flood Risks</b> <br />
					Assess whether your home or area is prone to flooding by reviewing floodplain maps and checking with local
					authorities. Be aware of the types of floods that can occur in your area, including flash floods, river
					floods, or coastal floods, as each presents different risks and warning times.
					<br />
					<br />
					<b className="text-lg"> 2. Create an Emergency Plan</b> <br />
					Develop a family emergency plan that includes multiple evacuation routes in case roads are blocked or flooded.
					Designate a meeting spot for your family if you are separated and can’t communicate. Ensure everyone in your
					household knows the plan and stays updated on local flood warnings or emergency alerts.
					<br />
					<br />
					<b className="text-lg"> 3. Prepare an Emergency Kit</b> <br /> Prepare an emergency kit with enough supplies
					to last at least 72 hours. Include bottled water, non-perishable food, a first aid kit, and necessary
					medications. Don’t forget a flashlight, batteries, a portable radio for weather updates, and copies of
					important documents stored in a waterproof container. Include extra clothing and blankets as well.
					<br />
					<br />
					<b className="text-lg">4. Home Safety and Floodproofing</b> <br /> Take steps to flood-proof your home by
					elevating essential utilities, such as electrical appliances, wiring, and your heating system, above the
					potential flood level. Consider installing check valves in your plumbing to prevent floodwater from backing up
					into your drains. Clear gutters and downspouts regularly to ensure water can flow away from your home.
					<br />
					<br />
					<b className="text-lg">5. Know How to Turn Off Utilities</b> <br /> Make sure everyone in your household knows
					how to safely turn off the gas, electricity, and water in case of an emergency. This can prevent electrical
					fires, gas leaks, or water contamination during and after a flood.
					<br />
					<br />
					<b className="text-lg">
						6. Stay Informed Keep track of weather conditions and alerts from local authorities, especially during heavy
						rains, earthquakes, or other triggering events.{" "}
					</b>{" "}
					<br /> By being proactive and prepared, you can significantly mitigate the risks and impacts of landslides.
					Would you like to explore more detailed solutions for landslide-prone areas?
				</p>
			</div>
			<Footer />
			{userData && userData.is_superuser && <BottomNav />} {/* Check if userData exists and is_superuser */}
		</>
	);
}

export default FloodPrep;
