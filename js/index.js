import { makeCanvas, moveCanvas } from "./canvas.js";

const canvas = document.createElement("div");

makeCanvas(canvas);

moveCanvas(canvas, 3);
