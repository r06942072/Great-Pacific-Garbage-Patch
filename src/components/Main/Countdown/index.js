//Countdown
import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

function Countdown() {
	return (
		<div>
			<p>The time you left:</p>
			<ReactCountdownClock seconds={180}
				color="#000"
				alpha={0.9}
				size={100}
			/>
		</div>
	);
}

export default Countdown;