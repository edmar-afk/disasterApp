import { useState } from "react";
import BottomNav from "../BottomNav";
import Footer from "../residents/Footer";
import floodImg from "../../assets/img/preps/flood.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Translator from "./Translator"; // Import Translator component

function FloodPrep() {
	const userData = JSON.parse(localStorage.getItem("userData")) || null;
	const [isCebuano, setIsCebuano] = useState(false); // Language state

	// Function to toggle between English and Cebuano
	const translateToCebuano = () => {
		setIsCebuano(!isCebuano);
	};

	return (
		<>
			<div className="relative">
				<Link
					to={"/"}
					className="fixed left-3 top-12 bg-blue-700 text-white p-1 rounded-full">
					<ArrowBackIcon />
				</Link>
				<img
					src={floodImg}
					alt=""
				/>
				<p className="font-bold p-4 text-2xl">{isCebuano ? "Pagpangandam sa Baha" : "Flood Preparedness"}</p>
				<p className="p-4 text-sm">
					{isCebuano
						? `Ang Pagpangandam sa Katalagman sa Baha importante aron mapakunhod ang mga risgo ug kadaot nga mahitabo tungod sa baha. Ania kung giunsa mag-andam:`
						: `Flood Disaster Preparedness is crucial for minimizing risks and damage caused by floods. Here’s how to stay
prepared:`}
					<br /> <br />
					<b className="text-lg">{isCebuano ? "1. Sabta ang mga Risgo sa Baha" : "1. Understand Flood Risks"}</b>
					<br />
					{isCebuano
						? `Pag-assess kung delikado ba ang imong balay o lugar nga maapektohan sa baha pinaagi sa pagtan-aw sa floodplain maps ug pagpakigsulti sa lokal nga mga otoridad. Kinahanglan pamilyar ka sa mga klase sa baha nga mahimo mahitabo sa imong lugar sama sa flash floods, baha sa mga suba, o baha sa baybayon.`
						: `Assess whether your home or area is prone to flooding by reviewing floodplain maps and checking with local
authorities. Be aware of the types of floods that can occur in your area, including flash floods, river
floods, or coastal floods, as each presents different risks and warning times.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "2. Maghimo ug Emergency Plan" : "2. Create an Emergency Plan"}</b>
					<br />
					{isCebuano
						? `Mag-develop ug family emergency plan nga naglakip sa daghang evacuation routes kung ang mga dalan ma-block o bahaon. Siguruha nga adunay lugar diin magkita ang imong pamilya kung kamo magkalagyo ug dili magka-communicate.`
						: `Develop a family emergency plan that includes multiple evacuation routes in case roads are blocked or flooded.
Designate a meeting spot for your family if you are separated and can’t communicate.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "3. Pangandami ang Emergency Kit" : "3. Prepare an Emergency Kit"}</b>
					<br />
					{isCebuano
						? `Pag-andam ug emergency kit nga adunay igo nga suplay nga makadugay ug labing menos 72 ka oras. Lakip ang botelya nga tubig, pagkaon nga dili dali madunot, first aid kit, ug importante nga medisina.`
						: `Prepare an emergency kit with enough supplies to last at least 72 hours. Include bottled water, non-perishable
food, a first aid kit, and necessary medications.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano ? "4. Kaluwasan sa Balay ug Pagpangandam sa Baha" : "4. Home Safety and Floodproofing"}
					</b>
					<br />
					{isCebuano
						? `Pagkuha og mga lakang aron ma-floodproof ang imong balay pinaagi sa pagtaas sa mga importante nga utilities sama sa mga electrical appliances ug mga wirings sa taas nga lugar aron dili maabot sa baha.`
						: `Take steps to flood-proof your home by elevating essential utilities, such as electrical appliances, wiring,
and your heating system, above the potential flood level.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano ? "5. Hibaloa Kung Giunsa Pagpahunong ang mga Utilities" : "5. Know How to Turn Off Utilities"}
					</b>
					<br />
					{isCebuano
						? `Siguruha nga ang tanan sa inyong balay nahibalo unsaon pagpatay sa gas, elektrisidad, ug tubig sa panahon sa emerhensya aron malikayan ang sunog, gas leaks, o kontaminasyon sa tubig human sa baha.`
						: `Make sure everyone in your household knows how to safely turn off the gas, electricity, and water in case of an emergency. This can prevent electrical fires, gas leaks, or water contamination during and after a flood.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "6. Magpabilin nga Na-informado" : "6. Stay Informed"}</b> <br />
					{isCebuano
						? `Sunda ang mga kondisyon sa panahon ug mga alerts gikan sa lokal nga mga otoridad, labi na panahon sa kusog nga ulan, linog, o uban pang mga panghitabo nga mahimong mopahinungod sa baha.`
						: `Keep track of weather conditions and alerts from local authorities, especially during heavy rains, earthquakes, or other triggering events.`}
					<br />
					{isCebuano
						? `Pinaagi sa pag-andam, mapakunhod nimo ang mga risgo ug epekto sa baha.`
						: `By being proactive and prepared, you can significantly mitigate the risks and impacts of floods.`}
				</p>
			</div>
			<Translator
				translateToCebuano={translateToCebuano}
				isCebuano={isCebuano}
			/>
			<Footer />
			{userData && userData.is_superuser && <BottomNav />}
		</>
	);
}

export default FloodPrep;
