import Header from "./components/Header"
import Player from "./components/Player"

function App() {

  return (
    <Header />,
    <main>
      <div id="game-container">
        <ol id="players">
          <Player />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>

  )
}

export default App
