// import axios from "axios";

import axios from 'axios';
import { useEffect, useState } from 'react';

const DisplayGifs = (props) => {
	const [currentGifs, setCurrentGifs] = useState([]);

	const keywords = props.keywords;

	console.log('keywords', keywords);

	const newGifsArray = [];

	useEffect(() => {
		keywords.forEach(async (keyword) => {
			axios({
				url: `https://api.giphy.com/v1/gifs/search`,
				params: {
					api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
					q: keyword,
					limit: 3,
				},
			}).then((res) => {
				console.log('giphy data', res.data.data);
				setCurrentGifs(res.data.data);
			});
		});
	}, [props.keywords]);

	console.log('newGifsarray', newGifsArray);
	console.log('current gifs', currentGifs);

	return (
		<section>
			{
				<ul>
					{
						<img
							src={`https://media.giphy.com/media/${currentGifs[0].id}/giphy.gif`}
							alt=""
						/>
					}
					{
						<img
							src={`https://media.giphy.com/media/${currentGifs[1].id}/giphy.gif`}
							alt=""
						/>
					}
					{
						<img
							src={`https://media.giphy.com/media/${currentGifs[2].id}/giphy.gif`}
							alt=""
						/>
					}
				</ul>
			}
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
