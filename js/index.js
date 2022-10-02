import { disableScroll, makeCanvas, moveCanvas } from "./canvas.js";
import { play } from "./play.js";

const canvas = document.querySelector(".canvas");
let startBtn;

// onLoad
function onLoad() {
	startBtn = makeCanvas(canvas);
	disableScroll(canvas);
	if (!localStorage.getItem("highScore"))
		localStorage.setItem("highScore", "0");
	document.querySelector("#high-score").innerText =
		localStorage.getItem("highScore");
}

// gamestart
function gameStart() {
	const score = {
		currentScore: 0,
		highScore: Number(localStorage.getItem("highScore")),
	};
	document.querySelector("#high-score").innerText = score.highScore;
	moveCanvas(canvas, 1);
	play(score);
}

onLoad();
startBtn.addEventListener("click", gameStart);
