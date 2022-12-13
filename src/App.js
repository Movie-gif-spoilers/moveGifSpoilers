import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
	// state that holds the movie's id from api
	const [id, setId] = useState('');

	// state that holds the user's form input
	const [input, setInput] = useState('');
	const [savedInput, setSavedInput] = useState('');

	useEffect(() => {
		axios({
			url: `https://api.themoviedb.org/3/movie/10625/keywords?api_key=50761410dc9e92f5fa1bd64a7884c0b0`,
			// params: {
			// 	api_key: 'f012df5d63927931e82fe659a8aaa3ac',
			// },
		}).then((res) => {
			console.log(res.data);
		});
	}, []);

	const userChoice = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSavedInput(input);
	};

	return (
		<div className="App">
			<Header />
			<main>
				<SearchBar
					savedInput={savedInput}
					setId={setId}
					userChoice={userChoice}
					input={input}
					handleSubmit={handleSubmit}
				/>
				<h3>Movie id: {id}</h3>
				<DisplayGifs />
			</main>
			<Footer />
		</div>
	);
}

export default App;

// App.js (State for both API calls)
// a. Take the user input from search bar
// i. Store that in user input in useState
// b. Await Axios (make a call to the movie API’s)
// i. Return movieID
// c. Call “get keywords” endpoint
// i. Get an array of keywords
// ii. Hold the array in state
// iii. Pass that array as a prop to the display gif component
