// import axios from "axios";

import axios from 'axios';
import { useEffect, useState } from 'react';

const DisplayGifs = (props) => {
	const [currentGifs, setCurrentGifs] = useState([]);

	const keywords = props.keywords;

	console.log('keywords', keywords);

	// const newGifsArray = [];
	useEffect(() => {
		keywords.forEach(async (keyword) => {
			axios({
				url: `https://api.giphy.com/v1/gifs/search`,
				params: {
					api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
					q: keyword,
					limit: 10,
				},
			}).then((res) => {
				console.log(res);
				setCurrentGifs(res.data.data[(0, 1, 2)]);
			});
		});
		console.log('current gifs', currentGifs);
	}, [props.keywords]);

	// We store the gifs title for our alt text
	const gifURL = currentGifs.title;

	// We store the ID for our imgSrc
	const imgSrc = currentGifs.id;

	return (
		<section>
			<ul>
				<li key={imgSrc}>
					<img
						src={`https://media.giphy.com/media/${imgSrc}/giphy.gif`}
						alt={gifURL}
					/>
				</li>
			</ul>
		</section>
	);
};

export default DisplayGifs;

// Display gifs (MVP)
// a. Get the full array of keywords from the prop (app.js)
// i. Use useEffect
// 1. Inside the useEffect we want to do a for loop 3 times
// a. Have a function to randomize item returned back from the array
// 1. Makes a call to the giphy API
// 2. Return JSX with URL to display to the page
// 2. (Put the return into an array  map through this array to display to the page Display
// the move titles as well )
