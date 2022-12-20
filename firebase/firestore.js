import { addDoc, collection, deleteDoc } from 'firebase/firestore';
import { firestoreDB } from './firebaseConfig';

const collectionReference = `Saved Gifs`;

export const addToFirestoreDB = (movieTitle, savedGifs) => {
	const data = {
		'Movie Title': movieTitle,
		'Saved Gif IDs': [...savedGifs],
	};
	addDoc(collection(firestoreDB, collectionReference), data);
};
