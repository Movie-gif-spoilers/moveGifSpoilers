import { useState } from 'react';
import watching2 from '../assets/watching2.png';
import Gif from './Gif';
import Favourites from './NavBar.js';
import SearchBar from './SearchBar';
// import {homeNavBar} from "./NavBar.js";


const DisplayGifs = (props) => {
	// eslint-disable-next-line
	const [shuffle, setShuffle] = useState([]);

	function getMultipleRandom(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, num);
	}

	function handleRandomize(e) {
		setShuffle(getMultipleRandom(props.keywords, 10));
		console.log(e);
	}

	const keywords = getMultipleRandom(props.keywords, 4);

	const handleGifClick = (gifKeyword) => {
		props.setKeywords([gifKeyword]);
	};


	const WelcomeMessage = () => {
		return props.keywords.length === 0 ? (
			<h3 className="welcomeH3 wrapper">
				Welcome, your movie will begin shortly
			</h3>
		) : (
			<h3 className="gifsH3 wrapper">
				<span className="paragraphBlock">Now playing: </span>
				{props.movieTitle}
			</h3>
		);
	};

	return (
		<>
			<SearchBar
				setId={props.setId}
				apiKey={props.apiKey}
				setMovieTitle={props.setMovieTitle}
			/>
			<WelcomeMessage />
			<section className="displayGifs gifFlex" id="displayGifs">
				<div className="gifPic wrapper">
					<ul className="gifArea">
						{keywords.map((keyword, index) => {
							return (
								<Gif
									key={index}
									keyword={keyword}
									handleGifClick={handleGifClick}
									keywordLength={keywords.length}
									movieTitle={props.movieTitle}
								/>
							);
						})}
					</ul>
          
         <div className="randomAndSave wrapper">
				<div>
					{keywords.length === 1 || keywords.length === 0 ? null : (
						<button className="shuffleButton" onClick={handleRandomize}>
							New set of movie gifs
						</button>
					)}

				</div>


				<div className="randomAndSave">
					<div>
						{keywords.length === 0 ? null : (
							<button
								className="shuffleButton"
								onClick={handleRandomize}
							>
								Click for new set of random gifs
							</button>
						)}
					</div>

					<div className="favesButton">
						{keywords.length === 0 ? null : <Favourites />}
					</div>
				</div>

				<div className="watchingImg" />
				<div className="watchingImg wrapper">
					<img
						src={watching2}
						alt="people sitting on a bench watching a movie"
					/>
				</div>
			</section>

			<section className="viewFaves">
				<div className="favesContainer wrapper">
					<h3 className="viewSavedH3">View previously saved movie gifs</h3>
					<p>
						Checkout the favs section if you're not ready to search for a
						movie yet,
					</p>
					<p>
						or if you want to see movie gifs that you or other people have
						saved!
					</p>
					<Favourites />
				</div>
			</section>
		</>
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
