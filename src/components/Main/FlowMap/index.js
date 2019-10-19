//FlowMap
import React from 'react';
import map from './flowMap.jpg';

function FlowMap() {
	return (
		<div>
			<h1>My current position:</h1>
			<img src={map} alt="flowmap" />
		</div>
	);
}

export default FlowMap;