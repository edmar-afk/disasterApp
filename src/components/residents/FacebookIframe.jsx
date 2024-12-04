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
						display: "inline-block",
						backgroundColor: "#4267B2",
						color: "#fff",
						padding: "10px 20px",
						borderRadius: "5px",
						textDecoration: "none",
						fontSize: "16px",
					}}>
					Open Facebook Profile in Browser
				</a>
			</div>
		</>
	);
};

export default FacebookIframe;
