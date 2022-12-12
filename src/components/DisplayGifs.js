import axios from "axios";


const DisplayGifs = () => {
    return (
        <section>Display Gifs goes here</section>
    )
}

export default DisplayGifs;

// Display gifs (MVP)
// a. Get the full array of keywords from the prop (app.js)
// i. Use useEffect 
// 1. Inside the useEffect we want to do a for loop 3 times 
// a. Have a function to randomize item returned back from the array 
// 1. Makes a call to the giphy API 
// 2. Return JSX with URL to display to the page 
// 2. (Put the return into an array  map through this array to display to the page Display 
// the move titles as well )