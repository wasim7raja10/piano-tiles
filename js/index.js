import { disableScroll, makeCanvas, moveCanvas } from "./canvas.js";
import { play } from "./play.js";

const canvas = document.createElement("div");
let startBtn;

// onLoad
function onLoad() {
	startBtn = makeCanvas(canvas);
	disableScroll(canvas);
}

// gamestart
function gameStart() {
	moveCanvas(canvas, 1);
	play();
}

onLoad();
startBtn.addEventListener("click", gameStart);
