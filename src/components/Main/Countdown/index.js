//Countdown
import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

function Countdown() {
	return (
		<div>
			<h1>The time you left:</h1>
			<ReactCountdownClock seconds={60}
				color="#000"
				alpha={0.9}
				size={300}
			/>
		</div>
	);
}

export default Countdown;