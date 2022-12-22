import { useState } from 'react';
import watching2 from '../assets/watching2.png';
import Gif from './Gif';
import Favourites from './NavBar.js';
import SearchBar from './SearchBar';

const DisplayGifs = (props) => {
	// We should our shuffle or keys we get back from the randomizer function in state.
	// eslint-disable-next-line
	const [shuffle, setShuffle] = useState([]);

	// A function used to shuffle the through an array, passing in the paramaters or array and number. We use Math.random to select a random assortment from our array and the return our shuffled sliced from the beginning of the array to the end.
	function getMultipleRandom(arr, num) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, num);
	}

	// A function we pass through to our onClick on our button which then resets of shuffle to a new array of randomized keywords
	function handleRandomize(e) {
		setShuffle(getMultipleRandom(props.keywords, 10));
	}

	// A variable we use to grab 4 random keywords. This is what we will use to map through our return to render of Gif component, since the gifs displayed will be based off of these 4 keywords.
	const keywords = getMultipleRandom(props.keywords, 4);

	// We create this function here and pass it through as a prop to our Gif Component. This will change the stare of our setKeywords when we click on an image. This is in turn populates new gifs based off of the keyword of that particular image
	const handleGifClick = (gifKeyword) => {
		props.setKeywords([gifKeyword]);
	};

	// A ternary operate for displaying our welcome messaged based off the length of the keywords we recieve.
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
				</div>

				<div className="randomAndSave wrapper">
					<div>
						{/* A ternary operator that displays our button when recieved a keyword, but then removes the button once a user has clicked the image to find more gifs based off a particular keyword */}
						{keywords.length === 1 || keywords.length === 0 ? null : (
							<button
								className="shuffleButton"
								onClick={handleRandomize}
							>
								New set of movie gifs
							</button>
						)}
					</div>

					<div className="randomAndSave">
						{/* Ternary operator for displaying our favorite buttons only if a keyword has been given */}

						<div className="favesButton">
							{keywords.length === 0 ? null : <Favourites />}
						</div>
					</div>
				</div>

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
// the move titles as well ) */
