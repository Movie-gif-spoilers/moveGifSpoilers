import axios from 'axios';
import Swal from 'sweetalert2';

// FIRST API CALL - MOVIE ID AND TITLE. The user types a movie into the search bar, we then store two piece of data in state: the title of the movie that will be displayed on the page, and the ID of that movie to be passed to the second API call
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

// SECOND API CALL - KEYWORDS. We take the movie ID from the first API call, and pass it into the url of the second api call. The second Api call uses the movie ID to generate an array of keywords related to the movie. We pass this keywords array to the next Api call, which will be used to generate giphy images 
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

// THIRD API CALL - GIF IMAGES. We pass the keywords to this api call's query, and for each keyword it recieves it generates a gif image which will be displayed to the page. 
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
