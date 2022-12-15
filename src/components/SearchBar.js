import play from './play.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('welcome');

	useEffect(() => {
		try {
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
				if (res.data.results[0] === undefined) {
					alert("this movie does not exist, please check the spelling and try again! ")
					console.log("this movie does not exist, please check the spelling and try again! ")
				} else {
					props.setId(res.data.results[0].id);
					console.log("response", res)
				}
			}).catch(error => {
				console.log("error handling", error)
				if (error.response.status >= 500) {
					alert("server error")
					console.log("server error")
				} else if (error.response.status > 300) {
					alert("error, please try again")
					console.log("error, please try again")
				}
	
			});

		} catch (error) {

		}
	}, [savedInput]);

	const userChoice = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSavedInput(input);
	};

	return (
		<form onSubmit={handleSubmit} className="wrapper">
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
