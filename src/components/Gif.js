import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToFirestoreDB } from '../firebase/firestore';
import { getGif } from '../components/ApiCalls.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import for animations of gifs
AOS.init();

// This function is being passed to Display gif component, which is a part of our App.js

function Gif(props) {
	// We want to set the gifs in state so that we can access them in our return
	const [currentGifs, setCurrentGifs] = useState([]);

	// We create state for our onClick which is passed to our image. This will trigger a rerender of the JSX so that our gifs based off of keywords will load
	const [clicked, setClicked] = useState(false);

	// This useeffect utilizes our API call getGif function and passes through our props and setCurrentGifs. This is then triggers a rerender based off of our keyword or if a user has clicked our image.
	useEffect(() => {
		getGif(props, setCurrentGifs);
		// eslint-disable-next-line
	}, [props.keyword, clicked]);

	// A function holding a method used to direct users to Giphys database if they click on the giphy icon in our JSX
	function openGiphyByMethod(e) {
		window.open(`https://giphy.com/search/${props.keyword}`);
	}

	// We pass this function to our save button, this adds all of the following information to our firestore database
	const handleSave = (keyword, movieTitle, gifID) => {
		addToFirestoreDB(keyword, movieTitle, gifID);
	};

	return (
		<>
			{/* We use .map() to map through each gif and return our JSX */}
			{currentGifs.map((gif) => {
				return (
					<li data-aos="flip-left" key={gif.id} className="homeLi">
						<img
							src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
							alt={props.keyword}
							onClick={() => {
								props.handleGifClick(props.keyword);
								setClicked(!clicked);
							}}
						/>

						<p className="keywordsP">{props.keyword}</p>

						<div className="giphyOrSaveOptions">
							<div className="saveDelete">
								<button className="saveButton"
									onClick={() =>
										handleSave(
											props.keyword,
											props.movieTitle,
											gif.id
										)
									}
								>
									<FontAwesomeIcon
										icon="heart"
										className="heartIcon"
									/>{' '}
									Save
								</button>
							</div>

							<button className="giphyClick" onClick={openGiphyByMethod}>
								<img
									className="giphyIcon"
									src="https://cdn.worldvectorlogo.com/logos/giphy-logo.svg"
									alt={props.keyword}
								/>
							</button>
						</div>
					</li>
				);
			})}
		</>
	);
}

export default Gif;
