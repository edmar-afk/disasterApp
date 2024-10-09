import { useState } from "react";
import { maps } from "../../assets/maps";
import MapModal from "../residents/MapModal";

function Maps() {
	const [mapList] = useState(maps); // Initialize state with maps array
	const [selectedMap, setSelectedMap] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (mapItem) => {
		setSelectedMap(mapItem);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedMap(null);
	};

	return (
		<>
			<div className="mx-4 pt-8">
				<p className="text-sm font-bold">Awareness Maps</p>
				<p className="text-left text-brown-400 text-xs mr-4">
					List of maps showing the scale of potential disasters in Lakewood
				</p>
				<div className="flex flex-row flex-wrap justify-evenly">
					{mapList.map((mapItem) => (
						<div
							onClick={() => openModal(mapItem)}
							key={mapItem.id}
							className="relative mx-2 my-2 w-36 h-48 flex flex-col items-center">
							<img
								src={mapItem.map}
								alt={mapItem.location}
								className="w-full h-40 object-cover shadow-2xl"
							/>
							<p className="text-xs text-center mt-1">{mapItem.location}</p>
						</div>
					))}
				</div>
			</div>
			{selectedMap && (
				<MapModal
					open={isModalOpen}
					handleClose={closeModal}
					mapItem={selectedMap}
				/>
			)}
		</>
	);
}

export default Maps;
