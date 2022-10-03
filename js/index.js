import { disableScroll, makeCanvas, moveCanvas } from "./canvas.js";
import { play } from "./play.js";

const canvas = document.querySelector(".canvas");
const restartBtn = document.querySelector("#restart");
let startBtn;
const prevHighScore = localStorage.getItem("highScore");
const startBtnSound = document.getElementById("start-button-music");
// onLoad
function onLoad() {
	startBtn = makeCanvas(canvas);
	disableScroll(canvas);
	if (!prevHighScore) localStorage.setItem("highScore", "0");
	document.querySelector("#high-score").innerText = prevHighScore;
}

// gamestart
function gameStart() {
	startBtnSound.play();
	startBtn.style.pointerEvents = "none";
	const score = {
		currentScore: 0,
		highScore: Number(prevHighScore),
	};
	document.querySelector("#high-score").innerText = score.highScore;
	moveCanvas(canvas, 1);
	play(score);
}

onLoad();
startBtn.addEventListener("click", gameStart);
restartBtn.addEventListener("click", () => {
	window.location.reload();
});
