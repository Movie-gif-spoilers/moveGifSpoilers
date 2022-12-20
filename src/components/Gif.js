import axios from 'axios';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { addToFirestoreDB } from '../firebase/firestore';
AOS.init();

function Gif(props) {
	const [currentGifs, setCurrentGifs] = useState([]);

	console.log('I just rendered with these keywords', props.keyword);

	useEffect(() => {
		axios({
			url: `https://api.giphy.com/v1/gifs/search`,
			params: {
				api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
				q: props.keyword,
				limit: 1,
			},
		}).then((res) => {
			setCurrentGifs(res.data.data);
		});
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
						<p>{props.keyword}</p>
						<button
							onClick={() =>
								handleSave(props.keyword, movieTitle, gif.id)
							}
						>
							Save
						</button>
					</li>
				);
			})}
		</>
	);
}

export default Gif;
