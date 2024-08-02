import { useState, useEffect } from "react";import bannerIcon from "../../assets/img/dashboardIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import Tooltip from "@mui/joy/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Banner() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const formatDateTime = (date) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return date.toLocaleDateString("en-US", options);
	};

	return (
		<>
			<div className="flex flex-row justify-between py-4 pt-14 px-4">
				<div className="flex flex-col justify-evenly">
					<p className="text-xs text-brown-300">{formatDateTime(currentTime)}</p>
					<p className="text-small font-bold text-brown-700">Stay informed about the latest events in Lakewood</p>
				</div>

				<img
					src={bannerIcon}
					className="w-[150px]"
					alt=""
				/>
			</div>
			<p className="mt-4 mb-1 mx-4 text-xs text-brown-300">Current Address</p>
			<div className="mx-4 flex flex-row justify-between items-center">
				<div className="flex flex-row">
					<div className="bg-brown-400 p-2 rounded-full text-white flex flex-row items-center w-fit px-4">
						<LocationOnOutlinedIcon fontSize="small" />
						<p className="text-xs">Baranggay Biswangan</p>
					</div>
					<div className="flex flex-row items-center ml-2 text-brown-800">
						<EditLocationAltOutlinedIcon fontSize="small" />
						<p className="text-xs">Edit</p>
					</div>
				</div>
				<div className="flex justify-end">
					<Tooltip
						arrow
						placement="left"
						title={
							<div className="text-xs">
								{" "}
								The system provides a default location,
								<br /> you can change it by clicking <EditLocationAltOutlinedIcon sx={{ fontSize: "15px" }} /> edit.
								<br />
								<br />
								<span className="underline text-xs">Choices are only around Lakewood.</span>
							</div>
						}
						variant="soft">
						<p className="text-brown-700">
							<InfoOutlinedIcon />
						</p>
					</Tooltip>
				</div>
			</div>
		</>
	);
}

export default Banner;
