import MdrrmoHeader from "./MdrrmoHeader";const FacebookIframe = () => {	return (	<>
		<MdrrmoHeader />
		<div style={{ textAlign: "center", padding: "20px" }}>
			<p>The Facebook profile cannot be embedded. Click the link below to visit the profile:</p>
			<div
				className="fb-page"
				data-href="https://web.facebook.com/profile.php?id=100071365517204&amp;_rdc=1&amp;_rdr"
				data-tabs="timeline"
				data-width="375"
				data-height=""
				data-small-header="false"
				data-adapt-container-width="true"
				data-hide-cover="false"
				data-show-facepile="true">
				<blockquote
					cite="https://web.facebook.com/profile.php?id=100071365517204&amp;_rdc=1&amp;_rdr"
					className="fb-xfbml-parse-ignore">
					<a href="https://web.facebook.com/profile.php?id=100071365517204&amp;_rdc=1&amp;_rdr">Mdrrmo Lakewood</a>
				</blockquote>
			</div>
		</div>
	</>
);
};

export default FacebookIframe;
