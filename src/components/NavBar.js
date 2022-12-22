import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// This function links to the DisplayGifs component
export const HomeNavBar = () => {
	return (
		<Link to="/home">
			<section className="navBar">
				<nav className="navBar">
					<FontAwesomeIcon icon="house" className="houseIcon" />
					<p>Home</p>
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

// how to add the home button

// import { homeNavBar }  from "./NavBar.js"
// {homeNavBar()}
// { keywords.length === 0 ? null : homeNavBar()}
