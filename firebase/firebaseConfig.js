// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAsSLw6knVGs3ZSnMO24ppEE19DX7fmbi8',
	authDomain: 'movie-gif-spoilers.firebaseapp.com',
	projectId: 'movie-gif-spoilers',
	storageBucket: 'movie-gif-spoilers.appspot.com',
	messagingSenderId: '434264002',
	appId: '1:434264002:web:038777e00cf49553fa285b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestoreDB = getFirestore();
