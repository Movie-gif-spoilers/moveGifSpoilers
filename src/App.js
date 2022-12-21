import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import Footer from './components/Footer.js';
import { useState, useEffect } from 'react';
import { getKeywords } from './components/ApiCalls.js';
import './components/FontAwesome.js';

import { Navigate, Route, Routes } from 'react-router-dom';

import DisplaySaved from './components/DisplaySaved';

function App() {
	// API Key for movie api
	const apiKey = '66a65cc7632ce390e4eb0fe1e74602e1';

	// state that holds the movie's id from first api call
	const [id, setId] = useState('');

	// state that holds the movie's title from first api call
	const [movieTitle, setMovieTitle] = useState('');

	// State to hold keywords returned from second api call
	const [keywords, setKeywords] = useState([]);

	useEffect(() => {
		if (id) {
			getKeywords(apiKey, id, setKeywords);
			console.log('check id', id);
		}
	}, [id]);

	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route
						path="/home"
						element={
							<DisplayGifs
								keywords={keywords}
								movieTitle={movieTitle}
								setKeywords={setKeywords}
								setId={setId}
								apiKey={apiKey}
								setMovieTitle={setMovieTitle}
							/>
						}
					/>
					<Route path="/viewSavedGifs" element={<DisplaySaved />} />
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
