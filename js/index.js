import { disableScroll, makeCanvas, moveCanvas } from "./canvas.js";

const canvas = document.createElement("div");

makeCanvas(canvas);

disableScroll(canvas);

moveCanvas(canvas, 3);
