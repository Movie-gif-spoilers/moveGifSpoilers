import { addDoc, collection, deleteDoc } from 'firebase/firestore';
import { firestoreDB } from './firebaseConfig';

const collectionReference = `Saved Gifs`;

export const addToFirestoreDB = (keyword, movieTitle, gifID) => {
	const data = {
		'Movie Title': movieTitle,
		'Saved Gif IDs': gifID,
		Keyword: keyword,
	};
	addDoc(collection(firestoreDB, collectionReference), data);
	console.log('added:', movieTitle, gifID);
};
