import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';
import { useState, useEffect } from 'react';
import { getKeywords } from './components/ApiCalls.js';
import './components/FontAwesome.js';
import DisplaySaved from './components/DisplaySaved';
import { Routes, Route } from 'react-router-dom';

function App() {
	// API Key
	const apiKey = '66a65cc7632ce390e4eb0fe1e74602e1';
	// state that holds the movie's id from api

	const [id, setId] = useState('');

	// State to hold keywords returned from second api call
	const [keywords, setKeywords] = useState([]);

	const [movieTitle, setMovieTitle] = useState('');

	useEffect(() => {
		if (id) {
			getKeywords(apiKey, id, setKeywords);
			console.log('check id', id);
		}
	}, [id]);

	return (
		<div className="App">
			<header>
				<Header />
			</header>

			<main>
				<SearchBar
					setId={setId}
					apiKey={apiKey}
					setMovieTitle={setMovieTitle}
				/>

				{keywords.length === 0 ? (
					<h3 className="welcomeH3 wrapper">
						Welcome, your movie will begin shortly
					</h3>
				) : (
					<h3 className="gifsH3 wrapper">
						<span className="paragraphBlock">Now playing: </span>
						{movieTitle}
					</h3>
				)}

				<DisplayGifs keywords={keywords} movieTitle={movieTitle} />

				<Routes>
					<Route path="/displaySaved" element={<DisplaySaved />} />
				</Routes>
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
