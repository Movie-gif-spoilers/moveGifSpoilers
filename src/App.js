import './App.css';
// import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';
// import axios from 'axios';


function App() {



  return (
    <div className="App">
     <Header />
     <main>
      <SearchBar />
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
