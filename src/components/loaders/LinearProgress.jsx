import Stack from "@mui/material/Stack";
import { LinearProgress, Box } from "@mui/material";
export default function LinearColor() {
	return (
		<Stack sx={{ width: "100%", height: "20px", color: "grey.500" }}>
			<Box sx={{ width: "100%", height: "100%" }}>
				<LinearProgress
					color="inherit"
					sx={{
						height: "10px", // Adjust height as needed
						borderRadius: "5px", // Adjust border radius for rounded effect
					}}
				/>
			</Box>
		</Stack>
	);
}
