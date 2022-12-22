import './App.css';
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
			// This getKeywords function is from our API call which we pass through the following variables to execute the call based off of the ID we recieve.
			getKeywords(apiKey, id, setKeywords);
		}
	}, [id]);


// All of our JSX renders live here:
return (
	<div className="App">
		<Header />
		<main>
			{/* Route created to navigate back to home. This will be utilized for going between our routes or home & favorites  */}
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route
					path="/home"
					element={
						// We add props to our Display gif components which we pass back to App.js
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
				{/* Secondary route located in our Display Saved components where users can visit their favorite gifs */}
				<Route path="/Favourites" element={<DisplaySaved />} />
			</Routes>

		</main>


		<Footer />
	</div>
);
}

export default App;


// ===================== PSEUDO CODE =====================================

// App.js (State for both API calls)
// a. Take the user input from search bar
// i. Store that in user input in useState
// b. Await Axios (make a call to the movie API’s)
// i. Return movieID
// c. Call “get keywords” endpoint
// i. Get an array of keywords
// ii. Hold the array in state
// iii. Pass that array as a prop to the display gif component