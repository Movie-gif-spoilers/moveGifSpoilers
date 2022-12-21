import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToFirestoreDB, deleteFromFirestoreDB } from '../firebase/firestore';
import { getGif } from '../components/ApiCalls.js';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

AOS.init();

function Gif(props) {
	const [currentGifs, setCurrentGifs] = useState([]);

	// console.log('I just rendered with these keywords', props.keyword);

	const { keyword: keyword } = useParams();

	useEffect(() => {
		getGif(props, setCurrentGifs);
		// eslint-disable-next-line
	}, [props.keyword]);

<<<<<<< HEAD
=======
	// console.log('after setting current gifs', currentGifs);
	function openGiphyByMethod(e) {
		// console.log(e);
		// alert("testing")
		window.open(`https://giphy.com/search/${keyword}`);
	}

>>>>>>> 1e198d9f28d3456dba5ed5fa58bf3cfedec0f159
	const handleSave = (keyword, movieTitle, gifID) => {
		console.log('handleSave Fired');
		addToFirestoreDB(keyword, movieTitle, gifID);
	};

	return (
		<>
			{currentGifs.map((gif) => {
				// console.log('gif being mapped', gif.id);
				return (
					<li data-aos="flip-left" key={gif.id}>
						<img
							src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
							alt={props.keyword}
							onClick={() => {
								props.handleGifClick(props.keyword);
							}}
						/>
<<<<<<< HEAD
=======

						<button className="giphyClick" onClick={openGiphyByMethod}>
							<img
								className="giphyIcon"
								src="https://cdn.worldvectorlogo.com/logos/giphy-logo.svg"
								alt={props.keyword}
							/>
						</button>

>>>>>>> 1e198d9f28d3456dba5ed5fa58bf3cfedec0f159
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
