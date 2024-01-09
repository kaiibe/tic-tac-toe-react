import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState()
  const [activePlayer, setActivePlayer] = useState("X");
  
  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    (<Header />),
    (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePLayerSymbol={activePlayer}
          />
        </div>
        <Log />
      </main>
    )
  );
}

export default App;
