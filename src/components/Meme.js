import "./Meme.css";
import { useState, useEffect } from "react";

export default function Meme() {
	//Card properties state
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	//Meme image state
	const [allMemeImages, setMemeImages] = useState([]);
	const clickHandler = () => {
		const randomNumber = Math.floor(Math.random() * allMemeImages.length);
		const { url } = allMemeImages[randomNumber];
		setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
	};
	//API request useEffect()
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes").then((res) =>
			res.json().then((data) => setMemeImages(data.data.memes))
		);
	}, []);

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
				<img src={meme.randomImage} alt="meme" className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
