import axios from 'axios';
import Swal from 'sweetalert2';

// Movie id API call
export const getMovieId = async (props, savedInput) => {
	try {
		const res = await axios({
			url: 'https://api.themoviedb.org/3/search/movie',
			method: 'GET',
			dataResponse: 'json',
			params: {
				api_key: props.apiKey,
				query: savedInput,
				language: 'en-US',
			},
		});

		if (res.data.results[0] === undefined) {
			Swal.fire({
				icon: 'error',
				title: 'This movie does not exist, please check the spelling and try again!',
				background: '#B3D5DF',
				color: '#616d6b',
				borderRadius: '1',
				showConfirmButton: false,
				timer: 3000,
			});
		} else {
			props.setId(res.data.results[0].id);
			props.setMovieTitle(res.data.results[0].title);
		}
	} catch (error) {
		if (error.response.status >= 500) {
			alert('server error');
		} else if (error.response.status > 300) {
			Swal.fire({
				icon: 'error',
				title: 'Please try again',
				background: '#B3D5DF',
				color: '#616d6b',
				borderRadius: '1',
				showConfirmButton: false,
				timer: 3000,
			});
		}
	}
};

// Keywords API call
export const getKeywords = async (apiKey, id, setKeywords) => {
	try {
		const res = await axios({
			url: `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${apiKey}`,
		});
		const newKeywordsArray = [];
		res.data.keywords.forEach((keyword) => {
			newKeywordsArray.push(keyword.name);
			setKeywords(newKeywordsArray);
		});
	} catch (error) {
		if (error.response.status >= 500) {
			alert('server error');
		} else if (error.response.status > 300) {
			Swal.fire({
				icon: 'error',
				title: 'Please try again',
				background: '#B3D5DF',
				color: '#616d6b',
				borderRadius: '1',
				showConfirmButton: false,
				timer: 3000,
			});
		}
	}
};

// GIFS API call
export const getGif = async (props, setCurrentGifs) => {
	try {
		const res = await axios({
			url: `https://api.giphy.com/v1/gifs/search`,
			params: {
				api_key: `NFjbXVR8Fnr6sKnvC2hgL2etOmY2z7hO`,
				q: props.keyword,
				limit: props.keywordLength === 1 ? 6 : 1,
			},
		});
		setCurrentGifs(res.data.data);
	} catch (error) {
		if (error.response.status >= 500) {
			alert('server error');
		} else if (error.response.status > 300) {
			alert('Sorry, images could not be displayed. Please try again!');
		}
	}
};
