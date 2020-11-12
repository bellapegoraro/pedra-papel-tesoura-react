import "./Scores.css";

const Scores = ({ playerCount, computerCount }) => {
  return (
    <div className="scores">
      <h2>Placar</h2>
      <div className="players">
        <div>
          Você<div className="count">{playerCount}</div>
        </div>
        <div>
          Computador<div className="count">{computerCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
