import "./Meme.css";
import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setMemeImages] = useState(memesData);
	const clickHandler = () => {
		const randomNumber = Math.floor(
			Math.random() * allMemeImages.data.memes.length
		);
		const { url } = allMemeImages.data.memes[randomNumber];
		setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
	};
	function changeHandler(event) {
		setMeme((prevMeme) => {
			const { name, value } = event.target;
			return { ...prevMeme, [name]: value };
		});
	}
	return (
		<main>
			<div className="form">
				<input
					placeholder="Top text"
					className="meme--top"
					name="topText"
					onChange={changeHandler}
				></input>
				<input
					placeholder="Bottom text"
					className="meme--bottom"
					name="bottomText"
					onChange={changeHandler}
				></input>
				<button className="form-btn" onClick={clickHandler}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
