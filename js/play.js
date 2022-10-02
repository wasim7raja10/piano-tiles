import { checkIfHighScore, updateHighScore, updateScore } from "./score.js";

function play(score) {
	const dataIndex = ["19990", "0"];
	document.querySelectorAll(".black-tile").forEach((item) => {
		item.addEventListener("click", (e) => {
			dataIndex[0] = handleClickBlackTile(e, score, dataIndex);
		});
	});

	document
		.querySelectorAll(".white-tiles")
		.forEach((item) =>
			item.addEventListener("click", (e) => gameOver(score, e))
		);
}

function gameOver(score, e) {
	if (e) {
		const targetTile = e.target;
		targetTile.style.backgroundColor = "red";
	} else {
		score.currentScore--;
	}
	if (checkIfHighScore(score)) {
		updateHighScore(score);
	}
	document.querySelector(".gameOver").style.display = "block";
	document.querySelector(".score").style.display = "none";
	document.querySelector("#best-score").innerText = score.highScore;
	document.querySelector("#total-score").innerText = score.currentScore;
}

function handleClickBlackTile(e, score, dataIndex) {
	const targetTile = e.target;
	dataIndex[1] = targetTile.dataset.index;
	targetTile.style.backgroundColor = "gray";
	targetTile.classList.remove("black-tile");
	const updatedScore = updateScore(score);
	document.querySelector("#current-score").innerText =
		updatedScore.currentScore;
	targetTile.style.pointerEvents = "none";
	if (checkIfGameOver(dataIndex)) {
		gameOver(score);
	}
	return dataIndex[1];
}

function checkIfGameOver(dataIndex) {
	const curr = Number(dataIndex[1]);
	const prev = Number(dataIndex[0]);
	if (prev - curr > 14) return true;
	return false;
}

export { play };
