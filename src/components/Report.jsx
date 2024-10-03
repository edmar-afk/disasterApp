/* eslint-disable react/prop-types */
import { useState } from "react";
import reportMap from "../assets/img/maps/reportMap.png";
import { disasterTypes } from "../assets/maps";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import api from "../assets/api";

function Report({ onCancel }) {
	const [selectedDisaster, setSelectedDisaster] = useState("");
	const [selectedBarangay, setSelectedBarangay] = useState("Barangay Biswangan Area");
	const [alertPosition, setAlertPosition] = useState({ top: "80px", left: "150px" });
	const [text, setText] = useState("");
	const [image, setImage] = useState(null); // State to hold the image
	const maxLength = 250;

	const handleChange = (event) => {
		const newText = event.target.value;
		if (newText.length <= maxLength) {
			setText(newText);
		}
	};

	const handleImageChange = (event) => {
		setImage(event.target.files[0]); // Store the uploaded image file
	};

	const getTextColor = () => {
		const length = text.length;
		if (length > 200) return "text-green-500";
		if (length < 10) return "text-red-500";
		return "text-orange-500";
	};

	const remainingCharacters = maxLength - text.length;

	const handleDisasterChange = (event) => {
		setSelectedDisaster(event.target.value);
	};

	const handleBarangayChange = (event) => {
		const barangay = event.target.value;
		setSelectedBarangay(barangay);

		switch (barangay) {
			case "Barangay Gatub Area":
				setAlertPosition({ top: "100px", left: "200px" });
				break;
			case "Barangay Lukuan Area":
				setAlertPosition({ top: "140px", left: "120px" });
				break;
			case "Barangay Tubod Area":
				setAlertPosition({ top: "180px", left: "200px" });
				break;
			default:
				setAlertPosition({ top: "80px", left: "150px" });
				break;
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent default form submission

		// Prepare form data with image
		const formData = new FormData();
		formData.append("alert_type", selectedDisaster);
		formData.append("location", selectedBarangay);
		formData.append("description", text);
		if (image) {
			formData.append("image", image); // Append the image file if it exists
		}

		try {
			await api.post("/api/create-alert/", formData, {
				headers: {
					"Content-Type": "multipart/form-data", // Use multipart for file upload
				},
			});
			alert("Alert submitted successfully!");
		} catch (error) {
			console.error("There was an error submitting the alert!", error);
			alert("Error submitting alert.");
		}
	};

	return (
		<>
			<div className="relative">
				<img
					src={reportMap}
					alt="Report Map"
					className="w-full"
				/>
				<p className="absolute bottom-12 left-2 font-bold text-red-700">
					{selectedDisaster || "Please select Alert Type"}
				</p>
				<p className="absolute text-xs bottom-8 left-2 font-bold text-red-700">
					{selectedBarangay || "Barangay Biswangan Area"}
				</p>

				<div className="alertBarangay">
					<div
						className="absolute bg-red-400 p-2 rounded-full custom-ping"
						style={{ top: alertPosition.top, left: alertPosition.left }}>
						<ErrorOutlineIcon className="text-white" />
					</div>
				</div>
			</div>

			<div>
				<form
					onSubmit={handleSubmit}
					className="mt-2">
					<p className="ml-4 pt-4 text-xs mb-2">Select Barangay</p>
					<ul className="flex flex-col justify-evenly mx-8 mb-6">
						<select
							id="barangay"
							name="barangay"
							className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
							onChange={handleBarangayChange}
							value={selectedBarangay}>
							<option value="Barangay Biswangan Area">Biswangan</option>
							<option value="Barangay Gatub Area">Gatub</option>
							<option value="Barangay Lukuan Area">Lukuan</option>
							<option value="Barangay Tubod Area">Tubod</option>
						</select>
					</ul>
					<p className="ml-4 pt-4 text-xs">Select Disaster Type</p>
					<ul className="flex flex-row justify-evenly mx-8">
						{disasterTypes.map(({ id, value, label, icon }) => (
							<li key={id}>
								<input
									type="radio"
									id={id}
									name="disasterType"
									value={value}
									className="hidden peer"
									required
									onChange={handleDisasterChange}
								/>
								<label
									htmlFor={id}
									className="inline-flex flex-col items-center justify-between w-[80px] p-4 text-gray-800 bg-white border border-gray-200 rounded-xl cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
									<div className="block">
										<img
											src={icon}
											alt={label}
											className="w-8"
										/>
									</div>
									<p className="text-center text-xs mt-1">{label}</p>
								</label>
							</li>
						))}
					</ul>

					<div className="mx-4">
						<p className="pt-6 text-xs mb-2">Describe the Situation/Precaution</p>
						<textarea
							id="message"
							name="description"
							rows="4"
							className={`p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border`}
							placeholder={`Max ${maxLength} characters`}
							value={text}
							onChange={handleChange}></textarea>
						<p className={`text-xs ${getTextColor()}`}>
							{remainingCharacters}/{maxLength}
						</p>
					</div>

					<div className="mx-4 mt-4">
						<p className="text-xs mb-2">Upload Image</p>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
						/>
					</div>

					<div className="flex justify-center space-x-2 mt-4">
						<Button
							variant="contained"
							className="bg-blue-500 hover:bg-blue-600 text-white"
							type="submit">
							<NotificationsActiveIcon className="mr-1" />
							Notify Residents
						</Button>

						<Button
							variant="contained"
							color="error"
							className="text-white"
							onClick={onCancel}>
							<CancelIcon className="mr-1" />
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Report;
