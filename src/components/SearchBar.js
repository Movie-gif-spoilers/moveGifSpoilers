import play from '../assets/play.png';
import { useEffect, useState } from 'react';
import { getMovieId } from './ApiCalls';

const SearchBar = (props) => {
	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('');


	useEffect(() => {
			if (props.id || savedInput) { 
				getMovieId(props, savedInput) 
			}
	}, [savedInput]) 


	const userChoice = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSavedInput(input);
	};

	return (

		<section className="searchBar">
			<div>
				<p>Life is too short to spend HOURS watching films! There are simply TOO many!</p>
				<p>Search a movie title to find out all you need to know about the plot... in gif form!</p>
			</div>
			<form onSubmit={handleSubmit} className="formFlex wrapper">
				<label htmlFor="userMovieChoice">Enter a movie and press play</label>
				<input
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
