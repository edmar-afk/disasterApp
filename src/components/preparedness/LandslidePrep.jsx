import { useState } from "react"; import BottomNav from "../BottomNav";
import Footer from "../residents/Footer";
import landslideImg from "../../assets/img/preps/landslide.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Translator from "./Translator"; // Import Translator component

function LandslidePrep() {
	const userData = JSON.parse(localStorage.getItem("userData")) || null; // Default to null if empty
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
					src={landslideImg}
					alt=""
				/>
				<p className="font-bold p-4 text-2xl">{isCebuano ? "Pagpangandam sa Landslide" : "Landslide Preparedness"}</p>
				<p className="p-4 text-sm">
					{isCebuano
						? `Ang Pagpangandam sa Katalagman sa Landslide naglakip sa mga estratehiya ug aksyon aron mapakunhod ang mga risgo ug epekto sa mga landslide. Ania ang mga yawe nga bahin sa pagpangandam sa landslide:`
						: `Landslide Disaster Preparedness involves strategies and actions to reduce the risks and impact of landslides. Here are key components of landslide preparedness:`}
					<br /> <br />
					<b className="text-lg">
						{isCebuano
							? "1. Sabta ang Risgo Pag-ila sa mga delikadong lugar:"
							: "1. Understand the Risk Identify vulnerable areas:"}
					</b>
					<br />
					{isCebuano
						? `Pagtuon sa yuta ug kasaysayan sa mga landslide nga nahitabo sa imong lugar. Ilhi ang mga timailhan sa kalit nga paglihok sa yuta: Ang mga liki sa yuta, mga buntod nga nagdagan, nagtuyok nga mga kahoy, o mga kalit nga pag-usab sa agos sa tubig mahimong magsenyas nga adunay umaabot nga landslide.`
						: `Study the terrain and history of landslide occurrences in your region. Recognize warning signs: Cracks in the ground, bulging slopes, tilting trees, or sudden changes in water flow can signal an imminent landslide.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano
							? "2. Pagplano ug Komunikasyon Maghimo ug emergency plan:"
							: "2. Planning and Communication Develop an emergency plan:"}
					</b>
					<br />
					{isCebuano
						? `Siguruha nga ang imong pamilya o komunidad nakahibalo unsay buhaton panahon sa landslide, lakip na ang mga evacuation routes ug luwas nga mga lokasyon. Maghimo ug plano sa emergency communication: Pagsiguro nga makontak nimo ang imong mga kapamilya o emergency services.`
						: `Ensure your family or community knows what to do during a landslide, including evacuation routes and safe locations. Create an emergency communication plan: Establish a way to contact family members or emergency services.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano ? "3. Pangandami ang Emergency Kit" : "3. Prepare an Emergency Kit"}
					</b>{" "}
					<br />
					{isCebuano
						? `Lakip ang pagkaon, tubig, flashlight, first aid kit, mga importante nga dokumento, ug sinina. Lakip ang communication devices sama sa charged nga cellphone o two-way radios.`
						: `Essential items include food, water, flashlights, a first aid kit, important documents, and clothing. Include communication devices like a charged cell phone or two-way radios.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano
							? "4. Structural ug Environmental Measures Lig-ona ang mga buntod:"
							: "4. Structural and Environmental Measures Reinforce slopes:"}
					</b>{" "}
					<br />
					{isCebuano
						? `Gamita ang mga retaining walls, drainage systems, ug tanom aron mapalig-on ang mga buntod. Pag-improve sa drainage: Ang husto nga pag-manage sa tubig makatabang sa pagpugong sa landslide pinaagi sa paglikay sa tubig nga magtapok sa mga buntod.`
						: `Use retaining walls, drainage systems, and vegetation to stabilize hillsides. Improve drainage: Proper water management can reduce the risk of landslides by preventing water accumulation on slopes.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "5. Edukasyon ug Awareness" : "5. Education and Awareness"}</b> <br />
					{isCebuano
						? `Edukahon ang imong komunidad bahin sa mga risgo sa landslide ug unsay buhaton sa wala pa, panahon sa, ug human sa landslide. Makig-uban sa mga lokal nga otoridad aron mahibal-an ang mga warnings ug mga evacuation orders.`
						: `Educate your community about landslide risks and what to do before, during, and after a landslide. Engage with local authorities to stay informed about landslide warnings and evacuation orders.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "6. Magpabilin nga Na-informado" : "6. Stay Informed"}</b> <br />
					{isCebuano
						? `Sunda ang mga kondisyon sa panahon ug mga alerts gikan sa lokal nga mga otoridad, labi na panahon sa kusog nga ulan, linog, o uban pang mga panghitabo nga mahimong mopahinungod sa landslide.`
						: `Keep track of weather conditions and alerts from local authorities, especially during heavy rains, earthquakes, or other triggering events.`}
					<br />
					{isCebuano
						? `Pinaagi sa pag-andam, mapakunhod nimo ang mga risgo ug epekto sa landslide.`
						: `By being proactive and prepared, you can significantly mitigate the risks and impacts of landslides.`}
				</p>
			</div>
			<Translator
				translateToCebuano={translateToCebuano}
				isCebuano={isCebuano}
			/>
			<Footer />
			{userData && userData.is_superuser && <BottomNav />} {/* Check if userData exists and is_superuser */}
		</>
	);
}

export default LandslidePrep;
