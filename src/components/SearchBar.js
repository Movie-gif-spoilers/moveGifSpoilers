import play from '../assets/play.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const SearchBar = (props) => {
	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('movies');

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

					Swal.fire({
						icon: 'error',
						title: 'This movie does not exist, please check the spelling and try again!',
						background: '#B3D5DF',
						color: '#616d6b',
						borderRadius: '1',
						showConfirmButton: false,
						timer: 3000
					})
					
				} else {
					props.setId(res.data.results[0].id);
					// console.log(res.data.results[0].original_title);
					props.setMovieTitle(res.data.results[0].title)
					// console.log('name of movie from api call', movieTitle);
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
		// eslint-disable-next-line
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
						<a href="#displayGifs">
						<img src={play} alt="play" />{' '}
						</a>
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
