import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';
import { useState, useEffect } from 'react';
import { getKeywords } from './components/ApiCalls.js';
import './components/FontAwesome.js';
<<<<<<< HEAD
import { Link, Routes, Route } from 'react-router-dom';

=======
import DisplaySaved from './components/DisplaySaved';
>>>>>>> db812e42c50df50285606524bce4fc9aa011cf25

function App() {
	// API Key
	const apiKey = '66a65cc7632ce390e4eb0fe1e74602e1';
	// state that holds the movie's id from api

	const [id, setId] = useState('');

	// state that holds movie title 
	const [ movieTitle, setMovieTitle ] = useState('');

	// State to hold keywords returned from second api call
	const [keywords, setKeywords] = useState([]);


	useEffect(() => {
		if (id) {
			getKeywords(apiKey, id, setKeywords);
			console.log("check id", id)
		}
	}, [id]);



	return (
		<div className="App">
			<header>
				<Header />
			</header>

<<<<<<< HEAD
      <Routes>
        <main>
          <SearchBar
            setId={setId}
            apiKey={apiKey}
            setMovieTitle={setMovieTitle}
          />
          <h3>Here's all you need to know about: {movieTitle}</h3>
          <DisplayGifs keywords={keywords} />
          <Route path="/savedGifs" element={<DisplayGifs keywords={keywords} />} />
        </main>
      </Routes>

=======
			<main>
				<SearchBar
					setId={setId}
					apiKey={apiKey}
					setMovieTitle={setMovieTitle}
				/>


				{ keywords.length === 0 ? <h3 className="welcomeH3 wrapper">Welcome, your movie will begin shortly</h3> : <h3 className="gifsH3 wrapper"><span className="paragraphBlock">Now playing: </span>{movieTitle}</h3>}

{/* 

				<DisplayGifs keywords={keywords} movieTitle={movieTitle} />
				<DisplaySaved />

			</main>
>>>>>>> db812e42c50df50285606524bce4fc9aa011cf25
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
