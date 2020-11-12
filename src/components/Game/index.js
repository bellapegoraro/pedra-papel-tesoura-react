import "./Game.css";

const Game = ({ player, computer, handlePlay }) => {
  return (
    <div className="container">
      <div className="play">
        <p className="player">Você</p>
        <p className="player">Computador</p>
      </div>
      <div className="play">
        <p className="rps">{player}</p>
        <p className="rps">{computer}</p>{" "}
      </div>
      <div className="buttons">
        <button onClick={() => handlePlay("Pedra")}>Pedra</button>
        <button onClick={() => handlePlay("Papel")}>Papel</button>
        <button onClick={() => handlePlay("Tesoura")}>Tesoura</button>
      </div>
    </div>
  );
};

export default Game;
