const SearchBar = () =>  {
    return (
        <form action="submit">This is the search bar</form>
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