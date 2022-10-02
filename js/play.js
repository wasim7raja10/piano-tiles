function play() {
	document
		.querySelectorAll(".black-tile")
		.forEach((item) => item.addEventListener("click", handleClickBlackTile));

	document
		.querySelectorAll(".white-tiles")
		.forEach((item) => item.addEventListener("click", gameOver));
}

function gameOver() {
	console.log("game over");
}

function handleClickBlackTile(e) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "red";
	targetTile.classList.remove("black-tile");
}

export { play };
