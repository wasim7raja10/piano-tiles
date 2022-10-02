import { checkIfHighScore, updateHighScore, updateScore } from "./score.js";

function play(score) {
	document
		.querySelectorAll(".black-tile")
		.forEach((item) =>
			item.addEventListener("click", (e) => handleClickBlackTile(e, score))
		);

	document
		.querySelectorAll(".white-tiles")
		.forEach((item) =>
			item.addEventListener("click", (e) => gameOver(e, score))
		);
}

function gameOver(e, score) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "red";
	if (checkIfHighScore(score)) {
		updateHighScore(score);
	}
}

function handleClickBlackTile(e, score) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "gray";
	targetTile.classList.remove("black-tile");
	const updatedScore = updateScore(score);
	document.querySelector("#current-score").innerText = updatedScore.currentScore;
	document.querySelector("#total-score").innerText = updatedScore.currentScore;
	targetTile.style.pointerEvents = "none";
}

export { play };
