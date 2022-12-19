import { useState } from 'react';
import watching2 from '../assets/watching2.png';
import Gif from './Gif';

const DisplayGifs = (props) => {
	const [ shuffle, setShuffle ] = useState([]);

	function getMultipleRandom(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	function handleRandomize() {
		setShuffle(getMultipleRandom(props.keywords, 5));
		}


	const keywords = getMultipleRandom(props.keywords, 5);
	// console.log('randoms', getMultipleRandom(props.keywords, 5));

	// console.log('keywords', keywords);

	return (
		<section className="displayGifs gifFlex">
			<button className='shuffleButton' onClick={handleRandomize}>Click for new set of random gifs</button>
			<div className="gifPic wrapper">
				<ul className="gifFlex gifArea">
					{keywords.map((keyword) => {
						return <Gif keyword={keyword} />;
					})}
				</ul>
			</div>

			<div className="watchingImg"/>
			<div className="watchingImg wrapper">
				<img
					src={watching2}
					alt="people sitting on a bench watching a movie"
				/>
			</div>

			<div className="saveSelects"></div>
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
