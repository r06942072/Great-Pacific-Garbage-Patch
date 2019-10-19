//Arrow
import React from 'react';

class Arrow extends React.Component {
	_handleClick1 = (event) => {
		alert('move up ↑');
	}
	_handleClick2 = (event) => {
		alert('move down ↓');
	}
	_handleClick3 = (event) => {
		alert('move left');
	}
	_handleClick4 = (event) => {
		alert('move right');
	}			
	render() {
		return (
			<div >
				<p>Control your ship:</p>
				<form>
					<input type="reset" value="Up" onClick={this._handleClick1} />
					<input type="reset" value="Down" onClick={this._handleClick2} />
					<input type="reset" value="Left" onClick={this._handleClick3} />
					<input type="reset" value="Right" onClick={this._handleClick4} />
				</form>
			</div>
		);
	}
}

export default Arrow;