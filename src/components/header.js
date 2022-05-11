import "./header.css";
import trollFace from "../images/Troll Face.png";

const Header = () => {
	return (
		<header>
			<img className="header--image" src={trollFace} />
			<h2>Meme Generator</h2>
			<p>React Course - Project 3</p>
		</header>
	);
};
export default Header;
