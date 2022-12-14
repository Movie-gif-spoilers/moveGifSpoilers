// import axios from "axios";

import axios from 'axios';
import { useEffect, useState } from 'react';

const DisplayGifs = (props) => {
	const [currentGifs, setCurrentGifs] = useState([]);

	
	// Store the keywords we recieve from props into a variable and then pass this through to our q. We will need splice this array of keywords to have 3 and then loop through this for 3 seperate API calls
	const keywords = props.keywords;

	console.log('these are the keywords we can loop through', keywords);

	const newGifsArray = [];
	useEffect(() => {
			axios({
		keywords.forEach(async (keyword) => {
			axios({
				url: `https://api.giphy.com/v1/gifs/search`,
				params: {
					api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
					q: `${keywords}`,
					limit: 10,
					q: keyword,
					limit: 3,
				},
			})
			.then((res) => {
				// We take back the first three items we recieve in the array
				setCurrentGifs(res.data.data[]);
			})
	}, [props.keywords]);

	// let gifs = newGifsArray.map((gif, index) => {
	// 	console.log('gif being mapped', gif);
	// 	return (
	// 		<li key={gif[0].id}>
	// 			<img
	// 				src={`https://media.giphy.com/media/${gif[0].id}/giphy.gif`}
	// 				alt={gif[0].title}
	// 			/>
	// 		</li>
	// 	);
	// });
	// setCurrentGifs(gifs);
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
