//MemeGenerator
import React from 'react';
//import * as MyCSS from './style';

function Presentation(props) {
	let topText = props.data.topText;
	let bottomText = props.data.bottomText;
	let urlImg = props.data.urlImg;
	let handleChange = props.handleChange;
	let handleSubmit = props.handleSubmit;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="topText"
					placeholder="Plz type in topText"
					value={topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					placeholder="Plz type in bottomText"
					value={bottomText}
					onChange={handleChange}
				/>
				<button>
					Gen
				</button>
			</form>
			<div>
				<img src={urlImg} alt="" />
				<h2>{topText}</h2>
				<h2>{bottomText}</h2>
			</div>
		</div>
	);
}

export default Presentation;