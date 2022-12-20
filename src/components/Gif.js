import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToFirestoreDB, deleteFromFirestoreDB } from '../firebase/firestore';
import { getGif } from '../components/ApiCalls.js';
AOS.init();

function Gif(props) {
	const [currentGifs, setCurrentGifs] = useState([]);

	console.log('I just rendered with these keywords', props.keyword);

	useEffect(() => {
		getGif(props, setCurrentGifs);
		// eslint-disable-next-line
	}, [props.keyword]);

	const handleSave = (keyword, movieTitle, gifID) => {
		console.log('handleSave Fired');
		addToFirestoreDB(keyword, movieTitle, gifID);
	};

	return (
		<>
			{currentGifs.map((gif) => {
				console.log('gif being mapped', gif.id);
				return (
					<li data-aos="flip-left" key={gif.id}>
						<img
							src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
							alt={props.keyword}
						/>
						<p class="keywordsP">{props.keyword}</p>
						<div className="saveDelete">
							<button
								onClick={() =>
									handleSave(props.keyword, props.movieTitle, gif.id)
								}
							>
								Save
							</button>
						</div>
					</li>
				);
			})}
		</>
	);
}

export default Gif;
