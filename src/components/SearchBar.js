import play from '../assets/play.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('');

	useEffect(() => {
		axios({
			url: 'https://api.themoviedb.org/3/search/movie',
			method: 'GET',
			dataResponse: 'json',
			params: {
				api_key: props.apiKey,
				query: savedInput,
				language: 'en-US',
			},
		}).then((res) => {
			console.log('first api call', res.data.results[0]);
			props.setId(res.data.results[0].id);
		});
	}, [savedInput]);

	const userChoice = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSavedInput(input);
	};

	return (
		<section className="searchBar">
				<form onSubmit={handleSubmit} className="formFlex wrapper">
					<label htmlFor="userMovieChoice">Enter a movie and press play</label>
					<input
						onChange={userChoice}
						type="text"
						id="userMovieChoice"
						value={input}
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
