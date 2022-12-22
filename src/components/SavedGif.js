import { deleteFromFirestoreDB } from '../firebase/firestore';

const SavedGif = (props) => {
	// This will delete the gif from the page as well as Firestore
	const handleDelete = (gifID) => {
		deleteFromFirestoreDB(gifID);
	};

	return (
		<div className="gifPic wrapper savedGifPic">
			<li key={props.firestoreID} className="savedLi">
				<img
					src={`https://media.giphy.com/media/${props.gifID}/giphy.gif`}
					alt={props.keyword}
				/>
				<div className="savedP">
					<p className="savedKeyWordP">{props.keyword}</p>
					<p className="savedMovieTitle">({props.movieTitle})</p>
				</div>
				<div className="saveDelete deleteButton">
					<button onClick={() => handleDelete(props.firestoreID)}>
						X
					</button>
				</div>
			</li>
		</div>
	);
};

export default SavedGif;
