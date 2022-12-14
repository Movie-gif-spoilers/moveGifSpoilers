import play from '../assets/play.png';
import { useEffect, useState } from 'react';
import { getMovieId } from './ApiCalls';

const SearchBar = (props) => {
	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('');

	useEffect(() => {
		// We make first call to Movie API to get movie ID
		if (props.id || savedInput) {
			getMovieId(props, savedInput);
		}
		// eslint-disable-next-line
	}, [savedInput]);

	// Store the users input in state
	const userChoice = (e) => {
		setInput(e.target.value);
	};

	// Make second call to Movie API with the value currently saved in input
	const handleSubmit = (e) => {
		e.preventDefault();
		setSavedInput(input);
	};

	return (
		<section className="searchBar">
			<div className="wrapper">
				<h3 className="searchBarH3">Summarize any movie with gifs</h3>
				<p>
					Life is too short to spend HOURS watching films! There are simply
					TOO many!
				</p>
				<p>Search a movie title to find out the summary... in gif form!</p>
			</div>

			<form
				action="submit"
				onSubmit={handleSubmit}
				className="formFlex wrapper"
			>
				<label htmlFor="userMovieChoice" className="sr-only">
					Enter a movie and press play
				</label>
				<input
					placeholder="Enter a movie & press play"
					onChange={userChoice}
					type="text"
					id="userMovieChoice"
					value={input}
					required
				/>

				<button type="submit">
					<img src={play} alt="play" />{' '}
				</button>
			</form>
		</section>
	);
};

export default SearchBar;

// Search bar (error handling) (MVP)
// a. Holds what user is typing
// i. Have useState with userInput & setUserInput (e.target.value)
// ii. Reset -> setUserInput(empty string)
// b. Pathing to error page (pop up display / alert)
// c. On submit
// d. Routes to Display Gif
