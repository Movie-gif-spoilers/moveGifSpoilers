import play from './play.png';

const SearchBar = (props) =>  {
    return (
        <form 
        onSubmit={props.handleSubmit}
        className="wrapper">
        <label htmlFor="userMovieChoice">Enter a movie and press play</label>
        <input 
        onChange={props.userChoice} 
        type="text" 
        id="userMovieChoice" 
        value={props.input} />
    
        <button type="submit">
            <img src={play} alt="play" /> </button>
    
        </form>
    )
}

export default SearchBar;

// Search bar (error handling) (MVP)
// a. Holds what user is typing 
// i. Have useState with userInput & setUserInput (e.target.value)
// ii. Reset -> setUserInput(empty string)
// b. Pathing to error page (pop up display / alert)
// c. On submit 
// d. Routes to Display Gif