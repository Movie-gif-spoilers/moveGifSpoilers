// import house from '../assets/house-solid.svg';
// import heart from "../assets/heart-solid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
    return (
        <section className="navBar">
            <nav className="wrapper">
                <a href="#header">
                    <p className="houseIcon"><FontAwesomeIcon icon="house" /></p>
                </a>
                <a href="#header">
                    <p className="heartIcon"><FontAwesomeIcon icon="heart" /></p>
                </a>       
            </nav>
        </section>
    )
}

export default NavBar;