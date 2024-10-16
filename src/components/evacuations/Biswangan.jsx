import biswangan1Img from "../../assets/img/evacuation/biswangan1.jpg";import biswangan2Img from "../../assets/img/evacuation/biswangan2.jpg";import biswangan3Img from "../../assets/img/evacuation/biswangan3.jpg";import biswangan4Img from "../../assets/img/evacuation/biswangan4.jpg";
import biswangan5Img from "../../assets/img/evacuation/biswangan5.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Biswangan() {
	return (
		<>
			<p className="mt-14 text-xs text-gray-500">Evacuation Address:</p>
			<p className="text-sm font-semibold">Purok 2. Biswangan Elementary School & Barangay Covered Court</p>
			<p className="mt-8 text-xs text-gray-600 mb-3">
				Swipe to right to view more <ArrowForwardIcon fontSize="" />
			</p>
			<div className="flex flex-row overflow-x-scroll">
				<img
					src={biswangan1Img}
					alt=""
					className="mx-2 rounded-lg"
				/>{" "}
				<img
					src={biswangan2Img}
					alt=""
					className="mx-2 rounded-lg"
				/>
				<img
					src={biswangan3Img}
					alt=""
					className="mx-2 rounded-lg"
				/>
				<img
					src={biswangan4Img}
					alt=""
					className="mx-2 rounded-lg"
				/>
				<img
					src={biswangan5Img}
					alt=""
					className="mx-2 rounded-lg"
				/>
			</div>
		</>
	);
}

export default Biswangan;
