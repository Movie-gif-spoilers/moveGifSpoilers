import house from '../assets/house-solid.svg';
import heart from "../assets/heart-solid.svg"


const NavBar = () => {
    return (
        <section className="navBar">
            <nav className="wrapper iconFlex">
                <a href="#header">
                    <img src={house} alt="house icon" class="houseIcon"/>
                </a>
                <a href="#header">
                    <img src={heart} alt="heart icon" class="heartIcon"/>
                </a>       
            </nav>
        </section>
    )
}

export default NavBar;