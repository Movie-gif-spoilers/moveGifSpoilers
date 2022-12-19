import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getGif } from '../components/ApiCalls.js';
AOS.init();

function Gif(props) {
	const [currentGifs, setCurrentGifs] = useState([]);

	console.log('I just rendered with these keywords', props.keyword);

	useEffect(() => {
		getGif(props, setCurrentGifs);
		// eslint-disable-next-line
	}, [props.keyword]);

	console.log('after setting current gifs', currentGifs);

	return (
		<>
			{currentGifs.map((gif) => {
				console.log('gif being mapped', gif.id);
				return (
					<li data-aos="flip-left" key={gif.id}>
						<img
							src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
							alt=""
						/>
						<p>{props.keyword}</p>
					</li>
				);
			})}
		</>
	);
}

export default Gif;
