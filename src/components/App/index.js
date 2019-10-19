import React, { Component } from 'react';
import Header from '../Header';
import YouTube from 'react-youtube';
//import Webcam from "react-webcam";
//import MemeGenerator from '../MemeGenerator';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<YouTube
					videoId="0EyaTqezSzs"
					onReady={this._onReady}
				/>
			</div>
		);
	}
}

export default App;
