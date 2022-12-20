import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { firestoreDB } from './firebaseConfig';

const nameOfCollection = `Saved Gifs`;

export const addToFirestoreDB = async (keyword, movieTitle, gifID) => {
	const documentData = {
		'Movie Title': movieTitle,
		'Gif ID': gifID,
		Keyword: keyword,
	};
	await setDoc(doc(firestoreDB, nameOfCollection, gifID), documentData);
	console.log('added:', movieTitle, gifID);
};

export const deleteFromFirestoreDB = (gifID) => {
	deleteDoc(doc(firestoreDB, nameOfCollection, gifID));
	console.log('deleted:', gifID);
};