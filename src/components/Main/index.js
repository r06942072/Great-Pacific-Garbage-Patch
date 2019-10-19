//Main
import React from 'react';
import Popup from 'reactjs-popup';
import Countdown from './Countdown/index.js';
import Arrow from './Arrow/index.js';
import Streaming from './Streaming/index.js';
import image from './image.jpg';
import FlowMap from './FlowMap/index.js';

function Main() {
	return (
		<div>
			<Arrow />
			<FlowMap />
			<Countdown />
			<Streaming />
			<Popup modal trigger={<button>Arrival</button>}>
				Please switch the camera to face the conveyor belt!!!
			</Popup>
			<Popup modal trigger={<button>GarbageInfo</button>}>
				According to the United Nations, at least 800 species worldwide are affected by marine debris, and as much as 80 percent of that litter is plastic.
				<img src={image} alt="GarbageImage" />
			</Popup>
		</div>
	);
}
export default Main;