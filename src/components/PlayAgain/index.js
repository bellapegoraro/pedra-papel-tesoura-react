import "./PlayAgain.css";

const PlayAgain = ({ handleWinner, whoWin }) => {
  return (
    <div className="playAgain">
      {whoWin === "Empatou" ? (
        <h2 className="winner">{whoWin}!</h2>
      ) : (
        <h2 className="winner">{whoWin} ganhou!</h2>
      )}
      <button className="playAgainButton" onClick={() => handleWinner()}>
        Jogar novamente
      </button>
    </div>
  );
};

export default PlayAgain;
