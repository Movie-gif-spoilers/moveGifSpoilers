import NavBar from './NavBar';

const Header = () => {
    return (
        <section className="header" id="header">
            <NavBar />
            <div className="headerFlex wrapper">
                <h1>Out of Context Movie Spoiler</h1>
                <h2>A GIF Generator</h2>
            </div>
        </section>
    )
}

export default Header;