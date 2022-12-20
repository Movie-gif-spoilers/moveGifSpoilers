import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const homeNavBar = () => {
	return (
		<section className="navBar">
			<nav className="navBar">
				<a href="#header" className="home">
				<FontAwesomeIcon icon="house" className="houseIcon" />
					<p>Home</p>
				</a>
			</nav>
		</section>
	);
};



const NavBar = () => {
	return (
			<nav className="navBar">
				<a href="#header" className="favs">
				<FontAwesomeIcon icon="heart"  className="heartIcon"/>
				<p className="favesP"> View Favs </p>
				</a>
			</nav>
	);
};

export default NavBar



// how to add the home button 

// import { homeNavBar }  from "./NavBar.js"
// {homeNavBar()} 
// { keywords.length === 0 ? null : homeNavBar()}