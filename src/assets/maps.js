import biswangan from "../assets/img/map/Biswangan.png";
import gatub from "../assets/img/map/Gatub.png";
import lukuan from "../assets/img/map/Lukuan.png";
import tubod from "../assets/img/map/Tubod.png";
import floodIcon from "../assets/img/floodIcon.png";
import earthQuakeIcon from "../assets/img/earthQuakeIcon.png";
import landslideIcon from "../assets/img/landslideIcon.png";
const maps = [
	{ id: 1, location: "Biswangan", map: biswangan },
	{ id: 2, location: "Gatub", map: gatub },
	{ id: 3, location: "Lukuan", map: lukuan },
	{ id: 4, location: "Tubod", map: tubod },
];

const disasterTypes = [
	{
		id: "flood",
		value: "Flood Warning",
		label: "Flood",
		icon: floodIcon,
	},
	{
		id: "earthQuake",
		value: "Earthquake Warning",
		label: "Earthquake",
		icon: earthQuakeIcon,
	},
	{
		id: "landSlide",
		value: "Landslide Warning",
		label: "Landslide",
		icon: landslideIcon,
	},
];

export { maps, disasterTypes };
