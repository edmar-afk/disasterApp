/* eslint-disable react/no-unescaped-entities */
import BottomNav from "../BottomNav";import Footer from "../residents/Footer";import earthquakeImg from "../../assets/img/preps/earthquake.jpg";import ArrowBackIcon from "@mui/icons-material/ArrowBack";import { Link } from "react-router-dom";function EarthQuakePrep() {	const userData = JSON.parse(localStorage.getItem("userData")) || null;	return (	<>
		<div className="relative">
			<Link
				to={"/"}
				className="fixed left-3 top-3 bg-blue-700 text-white p-1 rounded-full">
				<ArrowBackIcon />
			</Link>
			<img
				src={earthquakeImg}
				alt=""
			/>
			<p className="font-bold p-4 text-2xl">Earthquake Preparedness</p>
			<p className="p-4 text-sm">
				Earthquake Disaster Preparedness helps reduce the risks and impacts of earthquakes. Here’s a comprehensive guide
				to staying prepared for an earthquake:
				<br /> <br />
				<b className="text-lg"> 1. Understand Earthquake Risks</b> <br />
				If you live in an earthquake-prone area, familiarize yourself with local seismic activity and identify whether
				your home or workplace is at risk by consulting local geological maps and speaking with local authorities.
				Understanding the specific vulnerabilities of your region will help you take appropriate measures to protect
				your home and loved ones.
				<br />
				<br />
				<b className="text-lg"> 2. Create an Emergency Plan</b> <br />
				Develop a comprehensive emergency plan that includes identifying safe spots in each room of your home, such as
				under sturdy furniture or against interior walls, away from windows and heavy objects that could fall. Make sure
				everyone in your household knows how to exit the building safely and where to meet outside. Additionally, create
				a communication plan for how you will reach family members if phone lines are down or communication networks are
				disrupted.
				<br />
				<br />
				<b className="text-lg"> 3. Prepare an Emergency Kit</b> <br />
				Assemble an emergency kit with enough supplies to last for at least 72 hours, including non-perishable food,
				bottled water, a first aid kit, essential medications, a flashlight, extra batteries, a portable radio for
				receiving updates, and extra clothing. Don’t forget to include copies of important documents, such as
				identification, insurance policies, and medical records, securely stored in a waterproof container, as well as
				tools for turning off utilities if necessary.
				<br />
				<br />
				<b className="text-lg">4. Home Safety Measures</b> <br /> Ensure your home is as earthquake-resistant as
				possible by securing heavy furniture like bookshelves, dressers, and cabinets to the walls to prevent them from
				toppling during shaking. Consider retrofitting older buildings with earthquake-resistant technologies like
				bracing and reinforcing walls. Store fragile items in low cabinets with latches, and ensure that heavy objects
				are never placed on high shelves where they could fall and cause injury.
				<br />
				<br />
				<b className="text-lg">5. Know How to Turn Off Utilities</b> <br />
				Learn how to turn off your home’s gas, electricity, and water supplies, as this may be necessary in the
				aftermath of an earthquake to prevent fires, gas leaks, or flooding. Make sure each adult in the household is
				familiar with where these shut-offs are located and how to operate them safely.
				<br />
				<br />
				<b className="text-lg">6. Practice Drills Regularly </b> <br /> Conduct regular earthquake drills with your
				family or co-workers to ensure everyone knows what to do during an earthquake. Practice the "Drop, Cover, and
				Hold On" technique, where you drop to your hands and knees, cover your head and neck with your arms (or seek
				shelter under sturdy furniture), and hold on until the shaking stops. Evacuation drills should also include
				knowing how to safely exit the building and where to gather afterward.Conduct regular earthquake drills with
				your family or co-workers to ensure everyone knows what to do during an earthquake. Practice the "Drop, Cover,
				and Hold On" technique, where you drop to your hands and knees, cover your head and neck with your arms (or seek
				shelter under sturdy furniture), and hold on until the shaking stops. Evacuation drills should also include
				knowing how to safely exit the building and where to gather afterward.
			</p>
		</div>
		<Footer />
		{userData && userData.is_superuser && <BottomNav />} {/* Check if userData exists and is_superuser */}
	</>
);
}

export default EarthQuakePrep;
