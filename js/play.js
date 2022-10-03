import { checkIfHighScore, updateHighScore, updateScore } from "./score.js";
const playMusic = document.getElementById("play-music");
const resultMusic = document.getElementById("result-music");
function play(score) {
	playMusic.play();
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
	playMusic.pause();
	resultMusic.play();
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
	// Speed
	// let element = document.querySelector("#current-score").innerText;
	// if(element > 5 && element <= 15){
	// 	document.querySelector(".canvas").classList.remove("speed");
	// 	document.querySelector(".canvas").classList.add("speed-1x");
	// }else if(element > 15 && element <= 25){
	// 	document.querySelector(".canvas").classList.remove("speed-1x");
	// 	document.querySelector(".canvas").classList.add("speed-2x");
	// }else if(element > 25 && element <=35 ){
	// 	document.querySelector(".canvas").classList.remove("speed-2x");
	// 	document.querySelector(".canvas").classList.add("speed-3x");
	// }else if(element > 35){
	// 	document.querySelector(".canvas").classList.remove("speed-3x");
	// 	document.querySelector(".canvas").classList.add("speed-4x");
	// }
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
