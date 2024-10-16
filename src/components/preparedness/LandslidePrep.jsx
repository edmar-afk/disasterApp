import BottomNav from "../BottomNav";import Footer from "../residents/Footer";
import landslideImg from "../../assets/img/preps/landslide.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
function LandslidePrep() {
	const userData = JSON.parse(localStorage.getItem("userData")) || null; // Default to null if empty
	return (
		<>
			<div className="relative">
				<Link to={'/'} className="fixed left-3 top-3 bg-blue-700 text-white p-1 rounded-full">
					<ArrowBackIcon />
				</Link>
				<img
					src={landslideImg}
					alt=""
				/>
				<p className="font-bold p-4 text-2xl">Landslide Preparedness</p>
				<p className="p-4 text-sm">
					Landslide Disaster Preparedness involves strategies and actions to reduce the risks and impact of landslides.
					Here are key components of landslide preparedness:
					<br /> <br />
					<b className="text-lg"> 1. Understand the Risk Identify vulnerable areas:</b> <br />
					Study the terrain and history of landslide occurrences in your region. Recognize warning signs: Cracks in the
					ground, bulging slopes, tilting trees, or sudden changes in water flow can signal an imminent landslide.
					<br />
					<br />
					<b className="text-lg"> 2. Planning and Communication Develop an emergency plan:</b> <br />
					Ensure your family or community knows what to do during a landslide, including evacuation routes and safe
					locations. Create an emergency communication plan: Establish a way to contact family members or emergency
					services.
					<br />
					<br />
					<b className="text-lg">
						{" "}
						3. Prepare an Emergency Kit Essential items include food, water, flashlights, a first aid kit, important
						documents, and clothing.
					</b>{" "}
					<br /> Include communication devices like a charged cell phone or two-way radios.
					<br />
					<br />
					<b className="text-lg">4. Structural and Environmental Measures Reinforce slopes:</b> <br /> Use retaining
					walls, drainage systems, and vegetation to stabilize hillsides. Improve drainage: Proper water management can
					reduce the risk of landslides by preventing water accumulation on slopes.
					<br />
					<br />
					<b className="text-lg">
						5. Education and Awareness Educate your community about landslide risks and what to do before, during, and
						after a landslide.
					</b>{" "}
					<br /> Engage with local authorities to stay informed about landslide warnings and evacuation orders.
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

export default LandslidePrep;
