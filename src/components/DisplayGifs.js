// import axios from "axios";

import axios from 'axios';
import { useEffect, useState } from 'react';

const DisplayGifs = (props) => {
	const [currentGifs, setCurrentGifs] = useState([]);

	// function randomizer(arr, num) {
	// 	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	// 	return shuffled.slice(0, num);
	// }
	let newGifsArray = [];
	useEffect(() => {
		props.keywords.forEach(async (keyword) => {
			await axios({
				url: `https://api.giphy.com/v1/gifs/search`,
				params: {
					api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
					q: 'cats',
					limit: 10,
				},
			}).then((res) => newGifsArray.push(res.data.data[0].url));
		});
		setCurrentGifs(newGifsArray);
		console.log('current gifs', currentGifs);
	}, [props.keywords]);

	return (
		<section>
			<ul>
				{currentGifs.map((gifUrl) => {
					console.log('gif being mapped ', gifUrl);
					return (
						<li>
							<img src={gifUrl} alt="" />
						</li>
					);
				})}
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
