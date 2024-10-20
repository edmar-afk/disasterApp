/* eslint-disable react/prop-types */
import GTranslateIcon from "@mui/icons-material/GTranslate";
function Translator({ translateToCebuano, isCebuano }) {
	return (
		<div
			className="fixed top-10 right-5 z-50 bg-brown-300 p-2 rounded-lg"
			onClick={translateToCebuano} // Add onClick handler
		>
			<div className="flex flex-row items-center text-white">
				<GTranslateIcon className="text-white" />
				<div className="ml-2">
					<p className="text-[10px]">Translate to</p>
					<p className="text-[10px]">
						{isCebuano ? "English" : "Cebuano"} {/* Toggle text */}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Translator;
