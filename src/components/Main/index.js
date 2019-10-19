//Main
import React from 'react';
import Popup from 'reactjs-popup';
import Countdown from './Countdown/index.js';
import Streaming from './Streaming/index.js';
import glass7 from './glass7.jpg';
import FlowMap from './FlowMap/index.js';

function Main() {
	return (
		<div>
			<h1>I am Main :)</h1>
			<Popup modal trigger={<button>Arrival</button>}>
				Please switch the camera to face the conveyor belt!!!
			</Popup>
			<Popup modal trigger={<button>GarbageInfo</button>}>
				See~~Here is the garbage!!
				<img src={glass7} alt="glass7" />	
			</Popup>
			<Countdown />
			<Streaming />
			<FlowMap />
		</div>
	);
}
export default Main;