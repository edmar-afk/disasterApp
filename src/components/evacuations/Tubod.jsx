import tubod1Img from "../../assets/img/evacuation/tubod1.jpg";import tubod2Img from "../../assets/img/evacuation/tubod2.jpg";import tubod3Img from "../../assets/img/evacuation/tubod3.jpg";
import tubod4Img from "../../assets/img/evacuation/tubod4.jpg";
import tubod5Img from "../../assets/img/evacuation/tubod5.jpg";

import tubod7Img from "../../assets/img/evacuation/tubod7.jpg";
import tubod8Img from "../../assets/img/evacuation/tubod8.jpg";
import tubod9Img from "../../assets/img/evacuation/tubod9.jpg";
import tubod10Img from "../../assets/img/evacuation/tubod10.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Tubod() {
	return (
		<>
			<p className="mt-14 text-xs text-gray-500">Evacuation Address:</p>
			<p className="text-sm font-semibold">
				Elementary School - Purok 3.Tubod,Lakewood ZDS. High School - Purok 7. Tubod, Lakewood, ZDS. Health Center -
				Purok 3. Tubod Lakewood, ZDS.
			</p>
			<p className="mt-8 text-xs text-gray-600 mb-3">
				Swipe to right to view more <ArrowForwardIcon fontSize="" />
			</p>
			<div className="flex flex-row overflow-x-scroll">
				<div className="relative shrink-0">
					<img
						src={tubod1Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod5Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod3Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod4Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Elementary</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod2Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod High School</p>
				</div>

				<div className="relative shrink-0">
					<img
						src={tubod7Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod High School</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod8Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod High School</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod9Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Gym Health Center</p>
				</div>
				<div className="relative shrink-0">
					<img
						src={tubod10Img}
						alt=""
						className="mx-2 rounded-lg w-[300px]"
					/>
					<p className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg">Tubod Gym Health Center</p>
				</div>
			</div>
		</>
	);
}

export default Tubod;
