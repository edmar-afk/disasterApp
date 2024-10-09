import * as React from "react";import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BottomNav from "./BottomNav";
import hazardMap from "../assets/img/map/lakewood.png";
import Report from "./Report";

function HazardMap() {
	const [state, setState] = React.useState({
		top: false,
	});

	const toggleDrawer = (anchor, open) => () => {
		setState({ ...state, [anchor]: open });
	};

	const handleCancel = () => {
		toggleDrawer("top", false)(); // Close the drawer
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" ? "auto" : 850 }}
			role="presentation">
			<List>
				<Report onCancel={handleCancel} />
			</List>
			<Divider />
		</Box>
	);

	return (
		<>
			<div className="text-center my-4 text-xs text-gray-600 mt-24">
				<p>Lakewood Hazard Map</p>
				<p>Touch the map to post a report</p>
			</div>
			<div
				className="relative overflow-y-scroll"
				onClick={toggleDrawer("top", true)}>
				<TransformWrapper
					initialScale={1}
					minScale={1}
					maxScale={3}
					wheel={{ step: 0.1 }} // optional: to adjust the wheel zoom sensitivity
					pinch={{ step: 5 }} // optional: to adjust the pinch zoom sensitivity
				>
					<TransformComponent>
						<img
							src={hazardMap}
							alt="Hazard Map"
							style={{
								width: "100%",
								height: "auto",
								touchAction: "none", // ensures that touch gestures work properly
							}}
						/>
					</TransformComponent>
				</TransformWrapper>
			</div>
			<div className="fixed bottom-0 w-full">
				<BottomNav />
			</div>
			<Drawer
				anchor="top"
				open={state.top}
				onClose={toggleDrawer("top", false)}>
				{list("top")}
			</Drawer>
		</>
	);
}

export default HazardMap;
