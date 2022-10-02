function play() {
	document
		.querySelectorAll(".black-tile")
		.forEach((item) => item.addEventListener("click", handleClickBlackTile));

	document
		.querySelectorAll(".white-tiles")
		.forEach((item) => item.addEventListener("click", gameOver));

	document.addEventListener("keyup",handleKeysBlackTile);
}

function gameOver() {
	console.log("game over");
}

function handleClickBlackTile(e) {
	const targetTile = e.target;
	targetTile.style.backgroundColor = "red";
	targetTile.classList.remove("black-tile");
}

function handleKeysBlackTile(e) {
	console.log(e.key);
	const CurrentKey = e.key;
	if(CurrentKey.toUpperCase() == "A"){
		document.querySelectorAll(".A",function(currentIndex){
		document.querySelector(`[data-index="${currentIndex + randPosition}"]`)
		})
	}else if(CurrentKey.toUpperCase() == "S"){

	}else if(CurrentKey.toUpperCase() == "D"){
		
	}else if(CurrentKey.toUpperCase() == "F"){
		
	}
}

export { play };
