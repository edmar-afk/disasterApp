/* eslint-disable react/prop-types */import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function MapModal({ open, handleClose, mapItem }) {
	return (
		<Modal
			aria-labelledby="modal-title"
			aria-describedby="modal-desc"
			open={open}
			onClose={handleClose}
			sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Sheet
				variant="outlined"
				sx={{
					maxWidth: 500,
					borderRadius: "md",
					p: 3,
					boxShadow: "lg",
				}}>
				<ModalClose
					variant="plain"
					sx={{ m: 1 }}
					onClick={handleClose}
				/>
				<Typography
					component="h2"
					id="modal-title"
					level="h4"
					textColor="inherit"
					fontWeight="lg"
					mb={1}>
					{mapItem?.location}
				</Typography>
				<Typography
					id="modal-desc"
					textColor="text.tertiary">
					Here is the detailed information about the selected map.
				</Typography>
				<Zoom>
					<img
						src={mapItem?.map}
						alt={mapItem?.location}
						style={{ width: "100%", marginTop: "1rem" }}
					/>
				</Zoom>
			</Sheet>
		</Modal>
	);
}
