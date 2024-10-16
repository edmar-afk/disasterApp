import gatub1Img from "../../assets/img/evacuation/gatub1.jpg";
import gatub2Img from "../../assets/img/evacuation/gatub2.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Gatub() {
	return (
		<>
			<p className="mt-14 text-xs text-gray-500">Evacuation Address:</p>
			<p className="text-sm font-semibold">Evacuation Area Purok 2, Gatub Lakewood, ZDS.</p>
			<p className="mt-8 text-xs text-gray-600 mb-3">Swipe to right to view more <ArrowForwardIcon fontSize=""/></p>
			<div className="flex flex-row overflow-x-scroll">
				<img
					src={gatub1Img}
					alt=""
					className="mx-2 rounded-lg"
				/>{" "}
				<img
					src={gatub2Img}
					alt=""
					className="mx-2 rounded-lg"
				/>
			</div>
		</>
	);
}

export default Gatub;
