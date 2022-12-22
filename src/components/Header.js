import Swal from 'sweetalert2';

const Header = () => {
	return (
		<header>
			<section className="header wrapper" id="header">
				<h1>Out of Context Movie Spoiler</h1>
				<h2>A GIF Generator</h2>
                <button
                    className="aboutAppButton"
                    onClick={() => {Swal.fire({
                        icon: 'info',
                        title: 'What can I do here?',
                        html: `Search a movie title and we'll show you gifs related to the plot. Like one? Save it and see your collection in 'View Favs'! Want more of the same keyword? Click the gif itself or 'giphy' for more results.`,
                        background: '#EADBC4',
                        color: 'black',
                        borderRadius: '1'
                    })}}>
                    All About Our App
                </button>
			</section>
		</header>
	);
};

export default Header;
