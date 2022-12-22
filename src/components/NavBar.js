import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// This function links to the DisplayGifs component
export const HomeNavBar = () => {
	return (
		<Link to="/home">
			<section className="home navBar">
				<nav className="navBar">
					<FontAwesomeIcon icon="house" className="houseIcon" />
					<p className='homeP'>Home</p>
				</nav>
			</section>
		</Link>
	);
};

// This function links to the DisplaySaved component
const Favourites = () => {
	return (
		<Link to="/Favourites">
			<nav className="navBar">
				<FontAwesomeIcon icon="heart" className="heartIcon" />
				<p className="favesP"> View Favs </p>
			</nav>
		</Link>
	);
};

export default Favourites;
