import logo from "../../assets/img/logo/logo.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

function Header() {
	const userData = JSON.parse(localStorage.getItem("userData"));

	return (
		<>
			<div className="flex flex-row justify-between items-center mx-4 pt-6">
				<img
					src={logo}
					className="w-8 border-2 rounded-full border-purple-100"
					alt="logo"
				/>
				<p className="font-bold text-lg text-brown-700">Lakewood</p>
				{userData ? (
					<Link
						to={"/logout"}
						className="text-red-700 flex flex-col items-center">
						<ExitToAppIcon />
						<p className="text-xs">Logout</p>
					</Link>
				) : (
					<Link
						to={"/login"}
						className="text-blue-700  flex flex-col items-center">
						<ExitToAppIcon />
						<p className="text-xs">Login</p>
					</Link>
				)}
			</div>
		</>
	);
}

export default Header;
