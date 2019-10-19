//Popup
import React, { Component } from 'react';
import Button from './Button/presentation';
import Modal from 'react-modal';

class Popup extends Component {
	constructor() {
		super();
		this.state = {
		  modalIsOpen: false
		};
    }
    _handleClick = () => {
		console.log("click")
    }
    render() {
        return (
            <div>
                <Button
                    handleClick={this._handleClick}
                />
            </div>
        );
    }
}
export default Popup;