//Main
import React from 'react';
import Popup from 'reactjs-popup';
import Countdown from './Countdown/index.js';
import Arrow from './Arrow/index.js';
import Streaming from './Streaming/index.js';
import glass7 from './glass7.jpg';
import FlowMap from './FlowMap/index.js';

function Main() {
	return (
		<div>
			<h1>GoGo!! Try to navigate to the target point</h1>
			<Arrow />
			<Countdown />
			<Streaming />
			<FlowMap />
			<p>---------------------------------------------------</p>
			<Popup modal trigger={<button>Arrival</button>}>
				Please switch the camera to face the conveyor belt!!!
			</Popup>
			<Popup modal trigger={<button>GarbageInfo</button>}>
				See~~Here is the garbage!!
				<img src={glass7} alt="glass7" />	
			</Popup>
		</div>
	);
}
export default Main;