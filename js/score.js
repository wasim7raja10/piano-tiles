// update current score
function updateScore(score) {
	return score.currentScore++;
}

//checking for highest score
function checkIfHighScore(score) {
	if (score.currentScore > score.highScore) return true;
	return false;
}

// UPDATING highScore
function updateHighScore(score) {
	window.localStorage.setItem("highScore", score.currentScore);
	score.highScore = score.currentScore;
}

export { updateScore };
