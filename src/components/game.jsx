import { useEffect, useState } from "react"
import { paper_left, paper_right, rock_left, rock_right, scissors_left, scissors_right } from "../utils"
import { gameOptions } from "../utils"
import Button from "./button"
import { choseWinner } from "../lib/choseWinner"

const Game = () => {
	const [playerChoice, setPlayerChoice] = useState(gameOptions[0])
	const [compChoice, setCompChoice] = useState(gameOptions[0])
	const [isLoading, setIsLoading] = useState(false)
	const [remainingTime, setRemainingTime] = useState(3)
	const [message, setMessage] = useState("")
	const [playerScore, setPlayerScore] = useState(0)
	const [compScore, setCompScore] = useState(0)

	const handleClickChoice = (choice) => {
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
		choseWinner(isLoading, playerChoice, compChoice, setPlayerScore, setCompScore, setMessage, playerScore, compScore)
	}, [isLoading])

	return (
		<main>
			{!isLoading ? <div className="text-center text-2xl p-2 md:p-0 font-bold mb-6">{message}</div> : ""}
			<div className="flex justify-around  items-center p-2 md:p-0 ml-0 md:ml-14 gap-10 md:gap-[450px] mb-10 md:mb-24">
				<h1 className="text-xl md:text-2xl font-semibold">Игрок</h1>

				<h1 className="text-xl md:text-2xl font-semibold">Компьютер</h1>
			</div>
			<div className="flex justify-center md:justify-evenly items-center gap-[50px] md:gap-[100px]">
				<div className="p-[10px]">
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
						className={isLoading ? "animate-bounce w-[250px]" : "w-[250px]"}
					/>
				</div>
				<div>
					<span className={isLoading ? "text-red-500 font-bold text-[30px]" : "font-bold text-[30px]"}>
						{isLoading ? remainingTime : `${playerScore}:${compScore}`}
					</span>
				</div>
				<div className="p-[10px]">
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
						className={isLoading ? "animate-bounce w-[250px]" : "w-[250px]"}
					/>
				</div>
			</div>
			<div className="flex justify-center items-center mt-[130px] md:mt-[150px] gap-2 md:gap-[100px]">
				<Button
					onClick={() => handleClickChoice(gameOptions[0])}
					className={`${
						isLoading
							? "pointer-events-none bg-gray-400 p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black"
							: "bg-[#b1242496] p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black active:translate-y-[2px] shadow-gray-600 shadow-md"
					} `}
					text={"Камень"}
				/>
				<Button
					onClick={() => handleClickChoice(gameOptions[1])}
					className={`${
						isLoading
							? "pointer-events-none bg-gray-400 p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black"
							: "bg-[#24b14e96] p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black active:translate-y-[2px] shadow-gray-600 shadow-md"
					}`}
					text={"Ножницы"}
				/>
				<Button
					onClick={() => handleClickChoice(gameOptions[2])}
					className={`${
						isLoading
							? "pointer-events-none bg-gray-400 p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black"
							: "bg-[#2479b196] p-[20px] rounded-[10px] cursor-pointer text-[15px] md:text-[20px] w-[30%] md:w-[200px] border-2 border-black active:translate-y-[2px] shadow-gray-600 shadow-md"
					}`}
					text={"Бумага"}
				/>
			</div>
		</main>
	)
}
export default Game
