import axios from 'axios';
import { async } from 'q';
import { useEffect, useState } from 'react';
import watching2 from '../assets/watching2.png';
import Gif from './Gif';

const DisplayGifs = (props) => {
	// const [currentGifs, setCurrentGifs] = useState([]);

	const keywords = props.keywords;

	console.log('keywords', keywords);

	// useEffect(() => {
	// 	console.log('third api call');
	// 	const newGifsArray = [];
	// 	keywords.forEach((keyword) => {
	// 		console.log('giphy api call');
	// 		axios({
	// 			url: `https://api.giphy.com/v1/gifs/search`,
	// 			params: {
	// 				api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
	// 				q: keyword,
	// 				limit: 1,
	// 			},
	// 		}).then((res) => {
	// 			newGifsArray.push(res.data.data);
	// 		});
	// 	});
	// 	console.log('before setting current gifs', currentGifs);
	// 	setCurrentGifs(newGifsArray);
	// }, [keywords]);

	// console.log('after setting current gifs', currentGifs);
	// const gifs = currentGifs.map((gif, index) => {
	// 	console.log('gif being mapped', gif[0].id, currentGifs.length);
	// 	return (
	// 		<li>
	// 			<img
	// 				src={`https://media.giphy.com/media/${gif[0].id}/giphy.gif`}
	// 				alt=""
	// 			/>
	// 		</li>
	// 	);
	// });

	return (

		<section className="displayGifs gifFlex">
				<div className="gifPic">
					{newGifsArray.map((gif) => (
						
							<img src={`https://media.giphy.com/media/${gif}/giphy.gif`} alt="current gif/keyword/title" />
						
					))}
				</div>

				<div className="watchingImg">
					<img src={watching2} alt="people sitting on a bench watching a movie" />
				</div>
      
			<div className="saveSelects">

			</div>

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
