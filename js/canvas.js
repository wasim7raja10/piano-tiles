function makeCanvas(canvas) {
	canvas.classList.add("canvas");
	document.querySelector("body").appendChild(canvas);
	let randPosition;
	for (let i = 0; i < 2000; i++) {
		const rows = document.createElement("div");
		rows.classList.add("rows");
		rows.innerHTML = `
			<div data-index=${i + "0"} class="white-tiles"></div>
			<div data-index=${i + "1"} class="white-tiles"></div>
			<div data-index=${i + "2"} class="white-tiles"></div>
			<div data-index=${i + "3"} class="white-tiles"></div>
		`;
		randPosition = Math.floor(Math.random() * 4);
		rows
			.querySelectorAll(".white-tiles")
			[randPosition].classList.add("black-tile");
		rows
			.querySelectorAll(".white-tiles")
			[randPosition].classList.remove("white-tiles");
		canvas.appendChild(rows);
	}
	makeStartPosition(canvas);
	canvas.scrollTop = canvas.scrollHeight;
	return makeStartButton(randPosition);
}

function makeStartPosition(canvas) {
	for (let index = 0; index < 2; index++) {
		const rows = document.createElement("div");
		rows.classList.add("rows");
		canvas.appendChild(rows);
	}
}

function makeStartButton(randPosition) {
	const firstTile = document.querySelector(
		`[data-index="${"1999" + randPosition}"]`
	);
	firstTile.innerHTML = `<p> START </p>`;
	firstTile.style = `
		color: white;
		display: grid;
		place-content: center;
		font-size: 1.5rem;
	`;
	return firstTile;
}

function moveCanvas(canvas, speed) {
	setTimeout(() => canvasScroll(), 10);
	function canvasScroll() {
		canvas.scrollTop = canvas.scrollTop - speed;
		setTimeout(() => canvasScroll(), 10);
	}
}

function disableScroll(canvas) {
	canvas.addEventListener("wheel", (e) => e.preventDefault(), {
		passive: false,
	});
}

export { makeCanvas, moveCanvas, disableScroll, makeStartButton };
