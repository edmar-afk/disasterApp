import MdrrmoHeader from "./MdrrmoHeader";
const FacebookIframe = () => {
	return (
		<>
			<MdrrmoHeader />
			<div style={{ textAlign: "center", padding: "20px" }}>
				<p>The Facebook profile cannot be embedded. Click the link below to visit the profile:</p>
				<a
					href="https://web.facebook.com/profile.php?id=100071365517204&_rdc=1&_rdr"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						color: "#1877F2",
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "18px",
					}}>
					Visit Facebook Profile
				</a>
			</div>
		</>
	);
};

export default FacebookIframe;
