export const choseWinner = (isLoading, playerChoice, compChoice, setPlayerScore, setCompScore, setMessage, playerScore, compScore) => {
	const differentScore = Math.abs(playerScore - compScore)
	if (!isLoading && playerChoice && compChoice) {
		if (playerChoice === compChoice) {
			setMessage("Ничья !")
		} else if (
			(playerChoice === "камень" && compChoice === "ножницы") ||
			(playerChoice === "ножницы" && compChoice === "бумага") ||
			(playerChoice === "бумага" && compChoice === "камень")
		) {
			setMessage("Вы победили !")
			setPlayerScore((prevScore) => prevScore + 1)
		} else {
			setMessage("Компьютер выиграл !")
			setCompScore((prevScore) => prevScore + 1)
		}
	}
	if (!isLoading && (playerScore === 4 || compScore === 4)) {
		setMessage(
			`Игра окончена победил ${playerScore > compScore ? "Игрок!" : "Компьютер!"}  
			 с разницей в ${differentScore} ${differentScore === 1 ? "очко" : "очка"}`
		)
		setPlayerScore(0)
		setCompScore(0)
	}
}
