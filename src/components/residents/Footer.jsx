import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import SosIcon from "@mui/icons-material/Sos";

function Footer() {
	const fbWebUrl = "https://jay-portfolio-psi.vercel.app/";

	return (
		<>
			<div className="bg-brown-700 py-4 p-2 mt-10 text-white">
				<p className="text-center text-sm mb-4 font-bold">
					Press the SOS button if you need immediate assistance. Be safe, everyone.
				</p>
				<div className="flex flex-row">
					{/* SOS Icon */}
					<div className="mr-8 ml-4 bg-red-700 rounded-full p-2 border-4 border-red-100 relative cursor-pointer">
						<SosIcon sx={{ fontSize: 80 }} />
						<div className="bg-red-600 w-24 rounded-full h-24 top-0 left-0 absolute animate-ping"></div>
					</div>
					<div className="flex flex-col justify-evenly">
						<p className="text-left text-xs">
							Please avoid doing prank calls. Our officials are working hard to serve you.
						</p>
						{/* Facebook Profile link */}
						<a
							href={fbWebUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="border-2 border-red-50 text-red-50 rounded-full w-fit px-8 py-1.5 mt-2 text-xs flex items-center">
							<PhonelinkRingIcon
								fontSize="small"
								className="mr-2"
							/>{" "}
							Facebook Profile
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
