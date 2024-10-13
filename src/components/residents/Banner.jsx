import { useState, useEffect, useRef } from "react";
import mdrrmo from "../../assets/img/logo/MDRRMOlogo.png";
import logo from "../../assets/img/logo/logo.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import Tooltip from "@mui/joy/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import api from "../../assets/api";

function Banner() {
	const userData = JSON.parse(localStorage.getItem("userData"));
	const userId = userData?.id;
	const [currentTime] = useState(new Date());
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const infoIconRef = useRef(null);
	const images = [mdrrmo, logo];
	const [currentImage, setCurrentImage] = useState(0);
	const [location, setLocation] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				if (userId) {
					// Fetch user's location
					const locationResponse = await api.get("/api/get-location/", { params: { userId } });
					setLocation(locationResponse.data.location);
				} else {
					setError("User ID not found");
				}
			} catch (error) {
				console.error("Error fetching location:", error);
				setError("");
			} finally {
				setLoading(false);
			}
		};

		fetchLocation(); // Initial fetch

		const handleOutsideClick = (event) => {
			if (infoIconRef.current && !infoIconRef.current.contains(event.target)) {
				setTooltipOpen(false);
			}
		};

		document.addEventListener("touchstart", handleOutsideClick);

		const imageInterval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
		}, 3000);

		const locationInterval = setInterval(() => {
			fetchLocation(); // Refresh location data every 10 seconds
		}, 50000000);

		return () => {
			document.removeEventListener("touchstart", handleOutsideClick);
			clearInterval(imageInterval);
			clearInterval(locationInterval); // Clear location interval on unmount
		};
	}, [userId]);

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

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (name) => {
		// Close the menu
		handleClose();

		// Send the name and userId to the API
		api
			.post("/api/update-location/", { userId, location: name })
			.then((response) => {
				console.log("Menu item stored successfully:", response.data);
			})
			.catch((error) => {
				console.error("Error storing menu item:", error);
			});
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
			<p className="mt-4 mb-1 mx-4 text-xs text-brown-300">System Address</p>
			<div className="mx-4 flex flex-row justify-between items-center">
				<div className="flex flex-row">
					<div className="bg-brown-400 p-2 rounded-full text-white flex flex-row items-center w-fit px-4">
						<LocationOnOutlinedIcon fontSize="small" />
						<div className="text-xs">
							{loading ? (
								<p>Loading...</p>
							) : (
								<>
									{error && <p>{error}</p>}
									{location ? <p>Barangay {location}</p> : <p>Lakewood Zamboanga del Sur</p>}
									{/* Other components and elements */}
								</>
							)}
						</div>
						{/* <Menu
							id="demo-positioned-menu"
							aria-labelledby="demo-positioned-button"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							anchorOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}>
							<MenuItem onClick={() => handleMenuItemClick("Biswangan")}>Biswangan</MenuItem>
							<MenuItem onClick={() => handleMenuItemClick("Gatub")}>Gatub</MenuItem>
							<MenuItem onClick={() => handleMenuItemClick("Lukuan")}>Lukuan</MenuItem>
							<MenuItem onClick={() => handleMenuItemClick("Tubod")}>Tubod</MenuItem>
						</Menu> */}
					</div>
					{/* <div className="flex flex-row items-center ml-2 text-brown-800">
						<EditLocationAltOutlinedIcon fontSize="small" />
						<p
							onClick={handleClick}
							className="text-xs">
							Change
						</p>
					</div> */}
				</div>
				{/* <div className="flex justify-end">
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
				</div> */}
			</div>
		</>
	);
}

export default Banner;
