import Game from "./components/game/game"
import Header from "./components/header/header"
function App() {
	return (
		<section className="bg-[#d5d8ba] h-dvh md:min-h-screen overflow-hidden p-5">
			<Header />
			<Game />
		</section>
	)
}

export default App
