import "./App.css";
import { useState, useEffect } from "react";
import Game from "./components/Game";
import Scores from "./components/Scores";
import PlayAgain from "./components/PlayAgain";

const App = () => {
  const [winCondition] = useState([
    { winner: "Pedra", loser: "Tesoura" },
    { winner: "Papel", loser: "Pedra" },
    { winner: "Tesoura", loser: "Papel" },
  ]);
  const [player, setPlayerPlay] = useState(null);
  const [computer, setComputerPlay] = useState(null);
  const [playerCount, setPlayerCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [whoWin, setWhoWin] = useState(null);

  const handlePlay = (a) => {
    const computerPlay = ["Pedra", "Papel", "Tesoura"];

    const random = computerPlay[Math.floor(Math.random() * 2) + 0];

    setPlayerPlay(a);
    setComputerPlay(random);
    handlePlacar(player, computer);
  };

  const handlePlacar = (a, b) => {
    winCondition.map((win) => {
      if (a === win.winner && b === win.loser) {
        handleSetTimeOut("Você");
        return setPlayerCount(playerCount + 1);
      } else if (b === win.winner && a === win.loser) {
        handleSetTimeOut("Computador");
        return setComputerCount(computerCount + 1);
      } else if (a !== null && b !== null && a === b) {
        handleSetTimeOut("Empatou");
        return setComputerCount(computerCount) && setPlayerCount(playerCount);
      }
    });
  };

  const handleWinner = () => {
    setPlayerPlay(null);
    setComputerPlay(null);
    setWhoWin(null);
  };

  const handleSetTimeOut = (winner) => {
    setTimeout(() => {
      setWhoWin(winner);
    }, 2500);
  };

  useEffect(() => {
    handlePlacar(player, computer);
  }, [player, computer]);

  return (
    <div className="App">
      <Scores playerCount={playerCount} computerCount={computerCount} />
      {whoWin !== null ? (
        <PlayAgain handleWinner={handleWinner} whoWin={whoWin} />
      ) : (
        <Game player={player} computer={computer} handlePlay={handlePlay} />
      )}
    </div>
  );
};

export default App;
