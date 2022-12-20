import { deleteFromFirestoreDB } from '../firebase/firestore';

const SavedGif = (props) => {
	const handleDelete = (gifID) => {
		deleteFromFirestoreDB(gifID);
	};

	return (
		<li data-aos="flip-left" key={props.firestoreID}>
			<img
				src={`https://media.giphy.com/media/${props.gifID}/giphy.gif`}
				alt={props.keyword}
			/>
			<p>{props.keyword}</p>
			<div className="saveDelete">
				<button onClick={() => handleDelete(props.firestoreID)}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default SavedGif;
