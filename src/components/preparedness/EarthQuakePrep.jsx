import { useState } from "react"; import BottomNav from "../BottomNav";
import Footer from "../residents/Footer";
import earthquakeImg from "../../assets/img/preps/earthquake.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Translator from "./Translator";

function EarthQuakePrep() {
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
					src={earthquakeImg}
					alt=""
				/>
				<p className="font-bold p-4 text-2xl">{isCebuano ? "Pagpangandam sa Linog" : "Earthquake Preparedness"}</p>
				<p className="p-4 text-sm">
					{isCebuano
						? `Ang Pagpangandam sa Katalagman sa Linog makatabang sa pagpakunhod sa mga risgo ug epekto sa mga linog. Ania ang usa ka
comprehensive nga giya aron mapangandaman ang usa ka linog:`
						: `Earthquake Disaster Preparedness helps reduce the risks and impacts of earthquakes. Here’s a comprehensive
guide to staying prepared for an earthquake:`}
					<br /> <br />
					<b className="text-lg">{isCebuano ? "1. Sabta ang mga Risgo sa Linog" : "1. Understand Earthquake Risks"}</b>
					<br />
					{isCebuano
						? `Kung nagpuyo ka sa lugar nga sagad malinyogan, pamilyarahe ang imong kaugalingon sa lokal nga seismic activity ug
pag-ila kon ang imong balay o lugar sa trabaho delikado pinaagi sa pagtan-aw sa mga lokal nga geological maps ug
pakighisgot sa mga lokal nga otoridad. Ang pagsabot sa espesipikong kahuyang sa imong rehiyon makatabang kanimo sa
pagkuha sa angay nga mga lakang aron mapanalipdan ang imong balay ug minahal sa kinabuhi.`
						: `If you live in an earthquake-prone area, familiarize yourself with local seismic activity and identify whether
your home or workplace is at risk by consulting local geological maps and speaking with local authorities.
Understanding the specific vulnerabilities of your region will help you take appropriate measures to protect
your home and loved ones.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "2. Maghimo og Emergency Plan" : "2. Create an Emergency Plan"}</b>
					<br />
					{isCebuano
						? `Pag-develop ug usa ka comprehensive nga emergency plan nga naglakip sa pag-ila sa mga luwas nga lugar sa matag kwarto
sa imong balay, sama sa ilawom sa lig-on nga mga kasangkapan o batok sa mga interior walls, layo sa mga bintana ug bug-at nga mga butang
nga mahimo'ng mahulog. Siguruha nga ang tanan sa inyong balay nahibalo kung giunsa pag-ikyas gikan sa building nga luwas ug asa magkita sa gawas.`
						: `Develop a comprehensive emergency plan that includes identifying safe spots in each room of your home, such as
under sturdy furniture or against interior walls, away from windows and heavy objects that could fall. Make
sure everyone in your household knows how to exit the building safely and where to meet outside.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "3. Pangandami ang Emergency Kit" : "3. Prepare an Emergency Kit"}</b>
					<br />
					{isCebuano
						? `Pagtipig ug emergency kit nga adunay igo nga suplay nga makadugay sa labing menos 72 ka oras, nga naglakip sa pagkaon nga dili madunot, tubig nga botelya, first aid kit, importante nga mga medisina, flashlight, extra nga mga baterya, ug portable radio aron makadawat ug updates.`
						: `Assemble an emergency kit with enough supplies to last for at least 72 hours, including non-perishable food,
bottled water, a first aid kit, essential medications, a flashlight, extra batteries, a portable radio for
receiving updates.`}
					<br />
					<br />
					<b className="text-lg">{isCebuano ? "4. Mga Pamaagi sa Kaluwasan sa Balay" : "4. Home Safety Measures"}</b>
					<br />
					{isCebuano
						? `Siguruha nga ang imong balay mas luwas batok sa linog pinaagi sa pagsiguro nga ang mga bug-at nga kasangkapan sama sa mga bookshelf, dressers, ug cabinets gitaod sa mga bongbong aron malikayan ang pagtumba sa panahon sa linog.`
						: `Ensure your home is as earthquake-resistant as possible by securing heavy furniture like bookshelves, dressers,
and cabinets to the walls to prevent them from toppling during shaking.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano ? "5. Hibaloa Kung Giunsa Pagpahunong ang mga Utilities" : "5. Know How to Turn Off Utilities"}
					</b>
					<br />
					{isCebuano
						? `Hibaloa kung giunsa pagpatay ang gas, elektrisidad, ug suplay sa tubig sa inyong balay, kay mahimo kini magamit human sa linog aron malikayan ang sunog, gas leak, o baha.`
						: `Learn how to turn off your home’s gas, electricity, and water supplies, as this may be necessary in the
aftermath of an earthquake to prevent fires, gas leaks, or flooding.`}
					<br />
					<br />
					<b className="text-lg">
						{isCebuano ? "6. Regular nga Pagpraktis sa mga Drills" : "6. Practice Drills Regularly"}
					</b>
					<br />
					{isCebuano
						? `Magpraktis og regular nga mga earthquake drills kauban ang imong pamilya o mga kauban sa trabaho aron masiguro nga ang tanan nahibalo unsa ang buhaton sa panahon sa linog. Praktisa ang "Drop, Cover, and Hold On" nga pamaagi diin ikaw mokiling sa imong mga tuhod ug mga kamot, tabunan ang imong ulo ug liog gamit ang imong mga kamot, ug magpabilin hangtod nga mogaan ang linog.`
						: `Conduct regular earthquake drills with your family or co-workers to ensure everyone knows what to do during
an earthquake. Practice the "Drop, Cover, and Hold On" technique, where you drop to your hands and knees,
cover your head and neck with your arms, and hold on until the shaking stops.`}
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

export default EarthQuakePrep;
