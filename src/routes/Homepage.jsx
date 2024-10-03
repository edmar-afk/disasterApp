import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";import logoIcon from "../assets/img/logo/logo.png";
import mddrmo from "../assets/img/logo/MDRRMOlogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
function Homepage() {
	return (
		<>
			<div className="relative flex w-full flex-col items-center pt-40 bg-white h-full pb-24">
				<div className="flex flex-row">
					<img
						src={logoIcon}
						alt=""
						className="w-44"
					/>
					<img
						src={mddrmo}
						alt=""
						className="w-44"
					/>
				</div>
				<h1 className="mt-8 max-w-sm bg-gradient-to-br from-gray-500 via-brown-500 to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
					Disaster Risks and Preparedness
				</h1>

				<div className="mt-12 text-center">
					<p>
						Register to recieve Disaster <br />
						Alerts around Lakewood
					</p>

					<ArrowDownwardIcon className="animate-bounce mt-2" />
				</div>
				<div className="mt-12 flex flex-row justify-evenly">
					<motion.div
						className="flex text-xs flex-row items-center shadow-2xl justify-center mx-3 rounded-lg text-white px-10 py-3 bg-brown-500"
						initial={{ x: -1000 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 50, damping: 15 }}>
						<Link to={"/register"}>
							<HowToRegIcon fontSize="small" /> Register
						</Link>
					</motion.div>
					<motion.div
						className="flex text-xs flex-row items-center shadow-2xl justify-center mx-3 rounded-lg border border-brown-500 px-10 py-3 text-brown-500"
						initial={{ x: 1000 }}
						animate={{ x: 0 }}
						transition={{ type: "spring", stiffness: 50, damping: 15 }}>
						<Link to={"/login"}>
							<LoginIcon fontSize="small" /> Login
						</Link>
					</motion.div>
				</div>
			</div>
			
		</>
	);
}

export default Homepage;
