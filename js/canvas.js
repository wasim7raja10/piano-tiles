function makeCanvas(canvas) {
	canvas.classList.add("canvas");
	document.querySelector("body").appendChild(canvas);
	for (let i = 0; i < 2000; i++) {
		const rows = document.createElement("div");
		rows.classList.add("rows");
		rows.innerHTML = `
			<div data-index=${i + "0"} class="white-tiles"></div>
			<div data-index=${i + "1"} class="white-tiles"></div>
			<div data-index=${i + "2"} class="white-tiles"></div>
			<div data-index=${i + "3"} class="white-tiles"></div>
		`;
		const randPosition = Math.floor(Math.random() * 4);
		rows
			.querySelectorAll(".white-tiles")
			[randPosition].classList.add("black-tile");
		canvas.appendChild(rows);
	}
	canvas.scrollTop = canvas.scrollHeight;
}

function moveCanvas() {}

export { makeCanvas, moveCanvas };
