import { disableScroll, makeCanvas, moveCanvas } from "./canvas.js";
import { play } from "./play.js";

const canvas = document.createElement("div");

makeCanvas(canvas);

disableScroll(canvas);

moveCanvas(canvas, 0);

play();
