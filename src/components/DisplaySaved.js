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
		<ul>
			<HomeNavBar />
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
		</ul>
	);
};

export default DisplaySaved;
