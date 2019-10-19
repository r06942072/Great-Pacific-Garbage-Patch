//Arrow
import React from 'react';

class Arrow extends React.Component {
	_handleClick = (event) => {
		alert('move up');
	}
	render() {
		return (
			<div >
				<h1>Control your ship</h1>
				<form>
					<input type="reset" value="Up" onClick={this._handleClick} />
					<input type="reset" value="Down" onClick={this._handleClick} />
					<input type="reset" value="Left" onClick={this._handleClick} />
					<input type="reset" value="Right" onClick={this._handleClick} />
				</form>
			</div>
		);
	}
}

export default Arrow;