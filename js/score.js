// update current score
function updateScore(score) {
	score.currentScore++;
	return score;
}

//checking for highest score
function checkIfHighScore(score) {
	if (score.currentScore > score.highScore) return true;
	return false;
}

// UPDATING highScore
function updateHighScore(score) {
	localStorage.setItem("highScore", score.currentScore.toString());
	score.highScore = score.currentScore;
}

export { updateScore, checkIfHighScore, updateHighScore };
