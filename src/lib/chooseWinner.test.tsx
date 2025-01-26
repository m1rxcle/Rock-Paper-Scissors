import { choseWinner } from "./chooseWinner"

test("Draw", () => {
	const setMessage = jest.fn()
	choseWinner(
		0,
		0,
		false,
		"камень",
		"камень",
		setMessage,
		() => {},
		() => {}
	)
	expect(setMessage).toHaveBeenCalledTimes(1)
	expect(setMessage).toHaveBeenCalledWith("Ничья !")
})

test("Comp win", () => {
	const setMessage = jest.fn()
	choseWinner(
		0,
		0,
		false,
		"камень",
		"бумага",
		setMessage,
		() => {},
		() => {}
	)
	expect(setMessage).toHaveBeenCalledTimes(1)
	expect(setMessage).toHaveBeenCalledWith("Компьютер выиграл !")
})

test("Player win", () => {
	const setMessage = jest.fn()
	choseWinner(
		0,
		0,
		false,
		"ножницы",
		"бумага",
		setMessage,
		() => {},
		() => {}
	)
	expect(setMessage).toHaveBeenCalledTimes(1)
	expect(setMessage).toHaveBeenCalledWith("Вы победили !")
})
