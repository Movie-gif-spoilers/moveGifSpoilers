import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from '../firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import SavedGif from './SavedGif';
import { HomeNavBar } from './NavBar.js';

const DisplaySaved = () => {
	const [savedGifs, setSavedGifs] = useState([]);
	const collectionRef = collection(firestoreDB, 'Saved Gifs');

	useEffect(() => {
		const getSavedGifs = async () => {
			const data = await getDocs(collectionRef);
			setSavedGifs(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		};
		getSavedGifs();

		onSnapshot(collectionRef, (snapshot) => {
			setSavedGifs(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					firestoreID: doc.id,
				}))
			);
		});
		console.log('saved gifs', savedGifs);
		// eslint-disable-next-line
	}, []);

	return (
		<>
		<div className="homeSection ">

		<section className='wrapper'>
			<h3 className='homeH3'>Welcome to the favourites section</h3>
			<p>This is where you can checkout the movie gifs that you and others have saved! If you want to search for another movie or save more gifs, hit the home button to return</p>
		<HomeNavBar />

		</section>
		</div>

		<ul>
			<div className="savedGifsList">

			{savedGifs.map((gif) => {
				console.log('gif', gif);
				return (
					<SavedGif
					keyword={gif['Keyword']}
					gifID={gif['Gif ID']}
					firestoreID={gif['firestoreID']}
					movieTitle={gif['Movie Title']}
					/>
					);
				})}
				</div>
		</ul>
		</>
	);
};

export default DisplaySaved;
