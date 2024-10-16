import Biswangan from "./evacuations/Biswangan";
import Gatub from "./evacuations/Gatub";
import Lukuan from "./evacuations/Lukuan";
import Tubod from "./evacuations/Tubod";

function Evacuations() {
	return (
		<>
			<div className="p-4">
                <p className="font-bold text-sm">When Disaster occurs, consider seek shelter in nearest evacuation centers:</p>
                
                <Gatub />
                <Tubod />
                <Lukuan />
                <Biswangan/>
			</div>
		</>
	);
}

export default Evacuations;
