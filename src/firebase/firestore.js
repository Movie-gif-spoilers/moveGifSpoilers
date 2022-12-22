import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { firestoreDB } from './firebaseConfig';

// The collection where data is being sent
const nameOfCollection = `Saved Gifs`;

// Add to database
export const addToFirestoreDB = async (keyword, movieTitle, gifID) => {
	// This is how the data will look in Firestore
	const documentData = {
		'Movie Title': movieTitle,
		'Gif ID': gifID,
		Keyword: keyword,
	};
	await setDoc(doc(firestoreDB, nameOfCollection, gifID), documentData);
};

// Delete from database
export const deleteFromFirestoreDB = (gifID) => {
	deleteDoc(doc(firestoreDB, nameOfCollection, gifID));
};
