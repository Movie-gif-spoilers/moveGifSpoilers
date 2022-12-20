import { useState } from 'react';
import { useParams } from 'react-router-dom';
import watching2 from '../assets/watching2.png';
import Gif from './Gif';

const DisplayGifs = (props) => {
	// eslint-disable-next-line
	const [shuffle, setShuffle] = useState([]);


	const { keyword: newKeyword } = useParams();

	console.log('new keyword', newKeyword)

	function getMultipleRandom(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	}

	function handleRandomize(e) {
		setShuffle(getMultipleRandom(props.keywords, 10));
		console.log(e);
	}



	const keywords = getMultipleRandom(props.keywords, 4);
	console.log('randoms', getMultipleRandom(props.keywords, 4));

	const keywordLength = keywords.length;


	return (
		<section className="displayGifs gifFlex" id="displayGifs">
			<div className="gifPic wrapper">
				<ul className="gifFlex gifArea">
					{keywords.map((keyword) => {
						return <Gif keyword={keyword} handleGifClick={props.handleGifClick} keywordLength={keywordLength} movieTitle={props.movieTitle} />;

					})}
				</ul>
			</div>

			{ keywords.length === 0 ? null : 	<button className="shuffleButton" onClick={handleRandomize}>
				Click for new set of random gifs
			</button>}



			<div className="watchingImg" />
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
