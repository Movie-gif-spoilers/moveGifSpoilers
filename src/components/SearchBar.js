import play from './play.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
	useEffect(() => {
		const apiKey = '50761410dc9e92f5fa1bd64a7884c0b0';
		axios({
			url: 'https://api.themoviedb.org/3/search/movie',
			method: 'GET',
			dataResponse: 'json',
			params: {
				api_key: apiKey,
				query: props.savedInput,
				language: 'en-US',
			},
		}).then((res) => {
			console.log(res.data.results[0]);
			// setPhotos(res.data)
			props.setId(res.data.results[0].id);
		});
		// .then(
		// 	axios({
		// 		url: `https://api.themoviedb.org/3/movie/10625/keywords?api_key=50761410dc9e92f5fa1bd64a7884c0b0`,
		// 		// params: {
		// 		// 	api_key: apiKey,
		// 		// },
		// 	})
		// )
		// .then((res) => console.log('second axios call', res));
	}, [props.savedInput]);

	return (
		<form onSubmit={() => props.handleSubmit} className="wrapper">
			<label htmlFor="userMovieChoice">Enter a movie and press play</label>
			<input
				onChange={() => props.userChoice}
				type="text"
				id="userMovieChoice"
				value={props.input}
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
