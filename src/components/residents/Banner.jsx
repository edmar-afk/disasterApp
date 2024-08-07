import { useState, useEffect, useRef } from "react";
import mdrrmo from "../../assets/img/logo/MDRRMOlogo.png";
import logo from "../../assets/img/logo/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import Tooltip from "@mui/joy/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";
function Banner() {
	const [currentTime] = useState(new Date());
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const infoIconRef = useRef(null);
	const images = [mdrrmo, logo];
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (infoIconRef.current && !infoIconRef.current.contains(event.target)) {
				setTooltipOpen(false);
			}
		};

		document.addEventListener("touchstart", handleOutsideClick);

		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
		}, 3000);

		return () => {
			document.removeEventListener("touchstart", handleOutsideClick);
			clearInterval(interval);
		};
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

	const handleTooltipClick = () => {
		setTooltipOpen(!tooltipOpen);
	};

	return (
		<>
			<div className="flex flex-row justify-between py-4 pt-14 px-4">
				<div className="flex flex-col justify-evenly">
					<p className="text-xs text-brown-300">{formatDateTime(currentTime)}</p>
					<p className="text-small font-bold text-brown-700">Stay informed about the latest events in Lakewood</p>
				</div>

				<motion.img
					key={currentImage} // Ensure a unique key to trigger the animation
					src={images[currentImage]}
					className="w-[150px] h-[150px]"
					alt="Logo"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }} // Adjust the duration as needed
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
						<p className="text-xs">Change</p>
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
								<br /> you can change it by clicking <EditLocationAltOutlinedIcon sx={{ fontSize: "15px" }} /> change.
								<br />
								<br />
								<span className="underline text-xs">Choices are only around Lakewood.</span>
							</div>
						}
						variant="soft"
						open={tooltipOpen}
						onClose={() => setTooltipOpen(false)}>
						<p
							ref={infoIconRef}
							className="text-brown-700"
							onClick={handleTooltipClick}>
							<InfoOutlinedIcon />
						</p>
					</Tooltip>
				</div>
			</div>
		</>
	);
}

export default Banner;
