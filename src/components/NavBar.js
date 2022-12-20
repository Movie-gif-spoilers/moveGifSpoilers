// import house from '../assets/house-solid.svg';
// import heart from "../assets/heart-solid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
	return (
		<section className="navBar">
			<nav className="wrapper">
				<a href="#header" className="home">
				<FontAwesomeIcon icon="house" className="houseIcon" />
					<p>Home</p>
				</a>
				<a href="#header" className="favs">
				<FontAwesomeIcon icon="heart"  className="heartIcon"/>
					<p> Favs </p>
				</a>
			</nav>
		</section>
	);
};

export default NavBar;
