import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
//import PopupArrival from '../PopupArrival';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<p>-------------------------------------------------</p>
				<Main />
			</div>
		);
	}
}

export default App;
