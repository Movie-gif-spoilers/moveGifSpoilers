import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from '../firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import SavedGif from './SavedGif';
import { HomeNavBar } from './NavBar.js';

const DisplaySaved = () => {
	// State to hold Gif data received from firebase
	const [savedGifs, setSavedGifs] = useState([]);

	// This is the collection that data is being pulled from
	const collectionRef = collection(firestoreDB, 'Saved Gifs');

	useEffect(() => {
		// This function will get our gif data when the component mounts and hold it in state
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

		// This function will fire anytime a change is made in Firestore and store the new data in state, triggering a re-render
		onSnapshot(collectionRef, (snapshot) => {
			setSavedGifs(
				snapshot.docs.map((doc) => ({
					...doc.data(),
					firestoreID: doc.id,
				}))
			);
		});
	}, []);

	return (
		<ul>
			<HomeNavBar />
			<div className="savedGifsList">
				{savedGifs.map((gif) => {
					return (
						<SavedGif
							key={gif['firestoreID']}
							keyword={gif['Keyword']}
							gifID={gif['Gif ID']}
							firestoreID={gif['firestoreID']}
							movieTitle={gif['Movie Title']}
						/>
					);
				})}
			</div>
		</ul>
	);
};

export default DisplaySaved;
