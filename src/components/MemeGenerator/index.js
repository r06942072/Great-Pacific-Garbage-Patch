//MemeGenerator
//call API, fetch
import React, { Component } from 'react';
import Presentation from "./presentation";

class MemeGenerator extends Component {
	constructor() {
		super();
		this.state = {
			topText: "",
			bottomText: "",
			urlImg: "https://i.imgflip.com/1bij.jpg",
			allImg: []
		};
	}
	//make API call
	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes')
			.then(response => response.json())
			.then(response => {
				const { memes } = response.data;
				this.setState({ allImg: memes }); //100 memes
			});
	}
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	//When "Gen" is clicked
	handleSubmit = (event) => {
		event.preventDefault();
		const randNum = Math.floor(Math.random() * this.state.allImg.length);
		const randImg = this.state.allImg[randNum].url;
		this.setState({ urlImg: randImg });
	}
	//Two input field, one for topText, the other for bottomText
	render() {
		return (
			<Presentation
				data={this.state}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default MemeGenerator;
