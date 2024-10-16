import lukuan1Img from "../../assets/img/evacuation/lukuan1.jpg";import lukuan2Img from "../../assets/img/evacuation/lukuan2.jpg";import lukuan3Img from "../../assets/img/evacuation/lukuan3.jpg";import lukuan4Img from "../../assets/img/evacuation/lukuan4.jpg";import lukuan5Img from "../../assets/img/evacuation/lukuan5.jpg";
import lukuan6Img from "../../assets/img/evacuation/lukuan6.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Lukuan() {
	return (
		<>
			<p className="mt-14 text-xs text-gray-500">Evacuation Address:</p>
			<p className="text-sm font-semibold">Purok 2. Lukuan Lakewood, ZDS., Purok 3. Lukuan Elementary School.</p>
			<p className="mt-8 text-xs text-gray-600 mb-3">
				Swipe to right to view more <ArrowForwardIcon fontSize="" />
			</p>
			<div className="flex flex-row overflow-x-scroll">
				<div className="relative shrink-0">
					<img
						src={lukuan1Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Barangay</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={lukuan2Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Barangay</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={lukuan3Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Barangay</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={lukuan4Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={lukuan5Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={lukuan6Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Lukuan Elementary</p>
				</div>
			</div>
		</>
	);
}

export default Lukuan;
