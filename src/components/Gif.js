import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToFirestoreDB } from '../firebase/firestore';
import { getGif } from '../components/ApiCalls.js';

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


AOS.init();

function Gif(props) {
	const [currentGifs, setCurrentGifs] = useState([]);

	const [clicked, setClicked] = useState(false);


	useEffect(() => {
		getGif(props, setCurrentGifs);
		// eslint-disable-next-line
	}, [props.keyword, clicked]);

	// console.log('after setting current gifs', currentGifs);
	function openGiphyByMethod(e) {

		// console.log(e);
		// alert("testing")
		window.open(`https://giphy.com/search/${props.keyword}`);
	}

	const handleSave = (keyword, movieTitle, gifID) => {
		console.log('handleSave Fired');
		addToFirestoreDB(keyword, movieTitle, gifID);
	};

	

	return (
		<>
			{currentGifs.map((gif) => {
				// console.log('gif being mapped', gif.id);
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


<p class="keywordsP">{props.keyword}</p>


							<div className="giphyOrSaveOptions">
								
								<div className="saveDelete">
									<button
										onClick={() =>
											handleSave(props.keyword, props.movieTitle, gif.id)
										}
									>
									<FontAwesomeIcon icon="heart" className="heartIcon" /> Save
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
