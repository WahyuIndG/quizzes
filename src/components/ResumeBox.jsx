export default function ResumeBox({ score, onPlayAgain, onLogout }) {
  return (
    <div className="resume-box">
      <h2>Summary</h2>
      <p>
        <span>{`Total Answered`}</span>
        <span>{` ${score.answered}/5`}</span>
      </p>
      <p>
        <span>{`Correct`}</span>
        <span>{` ${score.correct}`}</span>
      </p>
      <p>
        <span>{`Incorrect`}</span>
        <span>{` ${score.incorrect}`}</span>
      </p>
      <div className="btn-group">
        <button onClick={onLogout}>Quit</button>
        <button onClick={onPlayAgain}>Restart</button>
      </div>
    </div>
  );
}
