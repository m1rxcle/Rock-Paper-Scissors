import { useEffect, useState } from "react"

import Button from "../button/button"
import { gameOptions, paper_left, paper_right, rock_left, rock_right, scissors_left, scissors_right } from "../../utils"
import { choseWinner } from "../../lib/chooseWinner"

const Game = () => {
	const [playerChoice, setPlayerChoice] = useState(gameOptions[0])
	const [compChoice, setCompChoice] = useState(gameOptions[0])
	const [isLoading, setIsLoading] = useState(false)
	const [remainingTime, setRemainingTime] = useState(3)
	const [message, setMessage] = useState("")
	const [playerScore, setPlayerScore] = useState(0)
	const [compScore, setCompScore] = useState(0)

	const handleClickChoice = (choice: string) => {
		const compRandomChoose = Math.floor(Math.random() * 3)
		setCompChoice(gameOptions[compRandomChoose])

		setPlayerChoice(choice)

		setIsLoading(true)
	}

	useEffect(() => {
		if (isLoading) {
			const timer = setInterval(() => {
				setRemainingTime((prevTime) => {
					if (prevTime == 1) {
						clearInterval(timer)
						setRemainingTime(3)
						setIsLoading(false)
						return 3
					}
					return prevTime - 1
				})
			}, 1000)
			return () => clearInterval(timer)
		}
	}, [isLoading])

	useEffect(() => {
		choseWinner(playerScore, compScore, isLoading, playerChoice, compChoice, setMessage, setPlayerScore, setCompScore)
	}, [isLoading])

	return (
		<main>
			{!isLoading ? <div className="message_text">{message}</div> : ""}
			<div className="game_players_container">
				<h1>Игрок</h1>

				<h1>Компьютер</h1>
			</div>
			<div className="game_images_container">
				<div className="game_img_position">
					<img
						src={
							isLoading
								? rock_left
								: playerChoice === "камень"
								? rock_left
								: playerChoice === "ножницы"
								? scissors_left
								: playerChoice === "бумага"
								? paper_left
								: ""
						}
						className={isLoading ? `animate-bounce game_img_size` : "game_img_size"}
					/>
				</div>
				<div>
					<span className={isLoading ? "text-red-500 font-bold text-[30px]" : "font-bold  text-[30px]"}>
						{isLoading ? remainingTime : `${playerScore}:${compScore}`}
					</span>
				</div>
				<div className="game_img_position">
					<img
						src={
							isLoading
								? rock_right
								: compChoice === "камень"
								? rock_right
								: compChoice === "ножницы"
								? scissors_right
								: compChoice === "бумага"
								? paper_right
								: ""
						}
						className={isLoading ? `animate-bounce game_img_size` : "game_img_size"}
					/>
				</div>
			</div>
			<div className="game_buttons_container">
				{gameOptions.map((option, i) => (
					<Button
						key={i}
						onClick={() => handleClickChoice(option)}
						className={
							isLoading
								? "pointer-events-none bg-gray-400 p-[20px] rounded-[10px] cursor-pointer text-xs md:text-base w-[30%] md:w-[200px] border-2 border-black"
								: `${i === 0 ? "bg-[#b1242496]" : i === 1 ? "bg-[#24b14e96]" : "bg-[#2479b196]"}
								   p-[20px] rounded-[10px] cursor-pointer text-xs md:text-base w-[30%] md:w-[200px] border-2 border-black active:translate-y-[2px] shadow-gray-600 shadow-md`
						}
						text={option.toUpperCase()}
					/>
				))}
			</div>
		</main>
	)
}
export default Game
