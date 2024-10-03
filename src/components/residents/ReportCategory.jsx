import landslide from "../../assets/img/landslideIcon.png";
import earthQuake from "../../assets/img/earthQuakeIcon.png";
import flood from "../../assets/img/floodIcon.png";

function ReportCategory() {
	return (
		<>
			<div className="mx-4 pt-8">
				<p className="text-sm font-bold">Report Category</p>
				<p className="text-left text-brown-400 text-xs">
					Here's the list of potential disasters in Lakewood
				</p>
				<div className="flex flex-row justify-evenly flex-wrap mt-6">
					<div className="flex flex-col items-center">
						<img
							src={landslide}
							className="w-12"
							alt=""
						/>
						<p className="text-xs">landslide</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={flood}
							className="w-12"
							alt=""
						/>
						<p className="text-xs">Flood</p>
					</div>
					<div className="flex flex-col items-center">
						<img
							src={earthQuake}
							className="w-12"
							alt=""
						/>
						<p className="text-xs">Earthquake</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReportCategory;
