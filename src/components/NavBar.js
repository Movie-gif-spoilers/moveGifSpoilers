import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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

const Favourites = () => {
	return (
		<Link to="/viewsavedgifs">
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
