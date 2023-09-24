import {
  TbSquareRoundedLetterA,
  TbSquareRoundedLetterB,
  TbSquareRoundedLetterC,
  TbSquareRoundedLetterD,
} from "react-icons/tb";

export default function QuizBox({ questions, currentQuestion, secondsLeft, onAnswerClick, duration }) {
  const decoder = (encoded) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!doctype html><body>${encoded}`, "text/html").body.textContent;
    return decodedString;
  };

  const matcher = (index) => {
    switch (index) {
      case 0:
        return <TbSquareRoundedLetterA />;
      case 1:
        return <TbSquareRoundedLetterB />;
      case 2:
        return <TbSquareRoundedLetterC />;
      case 3:
        return <TbSquareRoundedLetterD />;
      default:
        break;
    }
  };

  function getBoxShadowValue() {
    let numerator = 100 * ((secondsLeft - 1) / duration);
    let progress = (numerator / 100) * 400;
    return `inset -${progress}px 0px 0px 0px rgb(37, 44, 74)`;
  }

  return (
    <div className="quiz-box">
      <div className="progress-bar" style={{ boxShadow: getBoxShadowValue() }}>
        <span>{secondsLeft}</span>
        <i className="fa-regular fa-clock"></i>
      </div>
      <h2>
        Question {currentQuestion + 1}
        <span> / {questions.length}</span>
      </h2>
      <h3>{decoder(questions[currentQuestion].question)}</h3>
      <br />
      <div className="answers">
        {questions[currentQuestion].incorrect_answers.map((answer, index) => (
          <button key={answer} onClick={onAnswerClick} value={answer}>
            {matcher(index)}
            <span>{decoder(answer)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
