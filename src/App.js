import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
	// API Key
	const apiKey = '50761410dc9e92f5fa1bd64a7884c0b0';
	
	// state that holds the movie's id from api
	const [id, setId] = useState('');

	// State to hold keywords returned from second api call
	const [keywords, setKeywords] = useState([]);

	useEffect(() => {
		axios({
			url: `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${apiKey}`,
		}).then((res) => {
			const newKeywordsArray = [];
			res.data.keywords.forEach((keyword) => {
				newKeywordsArray.push(keyword.name);
			});
			setKeywords(newKeywordsArray);
		});
	}, [id]);

	return (
		<div className="App">
      <header>
        <Header />
      </header>
      
			<main>
				<SearchBar setId={setId} apiKey={apiKey} />
				<h3 className="wrapper">Here's all you need to know about: (Movie id:) {id}</h3>
				<DisplayGifs keywords={keywords} />
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
