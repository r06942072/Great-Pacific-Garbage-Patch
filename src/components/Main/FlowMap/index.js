//FlowMap
import React from 'react';
import map from './flowMap.jpg';

function FlowMap() {
	return (
		<div>
			<p>My current position:</p>
			<img
				src={map}
				alt="flowmap"
				height='300'
				weight='300'
			/>
		</div>
	);
}

export default FlowMap;