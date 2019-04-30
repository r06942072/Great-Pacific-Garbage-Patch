//Header
//only display thing, so make it a functional component
import React from 'react';

function Header() {
	return (
		<header>
			<img 
				src = 'http://www.pngall.com/wp-content/uploads/2016/07/Arrow-Free-Download-PNG.png'
				alt= 'Hey'
			/>
			<p>Welcome to meme generator</p>
		</header>
	);
}

export default Header;