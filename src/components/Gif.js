import axios from 'axios';
import { useEffect, useState } from 'react';

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

	console.log('after setting current gifs', currentGifs);

	return (
		<>
			{currentGifs.map((gif) => {
				console.log('gif being mapped', gif.id);
				return (
					<li>
						<img
							src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
							alt=""
						/>
					</li>
				);
			})}
		</>
	);
}

export default Gif;
