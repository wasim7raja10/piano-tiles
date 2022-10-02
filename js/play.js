function play() {
	document
		.querySelectorAll(".black-tile")
		.forEach((item) => item.addEventListener("click", handleClickBlackTile));

	document
		.querySelectorAll(".white-tiles")
		.forEach((item) => item.addEventListener("click", gameOver));
}

function gameOver(e) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "red";
}

function handleClickBlackTile(e) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "green";
	targetTile.classList.remove("black-tile");
}

export { play };
