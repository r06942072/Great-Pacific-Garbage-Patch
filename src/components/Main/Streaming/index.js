//Streaming
import React from 'react';

function Streaming() {
	return (
		<div>
		<Webcam
			audio={false}
			height={720}
			width={1280}
			screenshotFormat="image/jpeg"
		/>
		</div>
	);
}

export default Streaming;