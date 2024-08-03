import landslide from "../../assets/img/landslideIcon.png";
import earthQuake from "../../assets/img/earthQuakeIcon.png";
import flood from "../../assets/img/floodIcon.png";

function ReportCategory() {
	return (
		<>
			<div className="mx-4 pt-8">
				<p className="text-sm">Report Category</p>

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
				<p className="mt-4 text-center text-brown-400 text-xs">
					Other potential disasters in Lakewood will be shown here
				</p>
			</div>
		</>
	);
}

export default ReportCategory;
