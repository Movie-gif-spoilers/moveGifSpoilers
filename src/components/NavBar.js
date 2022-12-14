import house from '../assets/house-solid.svg';
import heart from "../assets/heart-solid.svg"

const NavBar = () => {
    return (
        <nav className="wrapper">
            <div className="iconFlex">
                <img src={house} alt="house icon" class="houseIcon"/>
                <img src={heart} alt="heart icon" class="heartIcon"/>
            </div>
        </nav>
    )
}

export default NavBar;