import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { firestoreDB } from '../firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import SavedGif from './SavedGif';

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
			Saved Gifs
			{savedGifs.map((gif) => {
				console.log('gif', gif);
				return (
					<SavedGif
						keyword={gif['Keyword']}
						gifID={gif['Saved Gif IDs']}
						firestoreID={gif['firestoreID']}
					/>
				);
			})}
		</ul>
	);
};

export default DisplaySaved;
