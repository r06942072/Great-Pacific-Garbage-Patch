//Streaming
import React from 'react';
import Webcam from "react-webcam";

function Streaming() {
	const parameter = {
		width: 1280,
		height: 720,
		facingMode: { exact: "environment" } //user
	};
	return (
		<div>
			<Webcam
				audio={false}
				screenshotFormat="image/jpeg"
				videoConstraints={parameter}
			/>
		</div>
	);
}

export default Streaming;