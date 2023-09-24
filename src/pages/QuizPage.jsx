import { useEffect, useState } from "react";
import {
  fetchQuestions,
  getQuestions,
  putIndex,
  getIndex,
  reset,
  getShowScore,
  putShowScore,
  getScore,
  putScore,
} from "../utils";
import useCountdown from "../hooks/useCountDown";
import InstructionBox from "../components/InstructionBox";
import QuizBox from "../components/QuizBox";
import ResumeBox from "../components/ResumeBox";

const initialScore = { answered: 0, correct: 0, incorrect: 0 };

export default function QuizPage({ onLogout, duration }) {
  const [questions, setQuestions] = useState(getQuestions() || []);
  const [currentQuestion, setCurrentQuestion] = useState(getIndex() || 0);
  const [showScore, setShowScore] = useState(getShowScore() || false);
  const [score, setScore] = useState(getScore() || initialScore);
  const { secondsLeft, start } = useCountdown();

  useEffect(() => {
    if (secondsLeft === 0) {
      displayScore();
    }
  }, [secondsLeft]);

  const onStart = async () => {
    const results = await fetchQuestions();
    setQuestions(results);
    start(duration);
  };

  const displayScore = () => {
    setShowScore(true);
    putShowScore(true);
    setQuestions([]);
    setCurrentQuestion(0);
    putScore(score);
    start(0);
    reset();
  };

  const onAnswerClick = ({ target }) => {
    if (target.value === questions[currentQuestion].correct_answer) {
      setScore((prev) => {
        const newScore = {
          ...prev,
          answered: prev.answered + 1,
          correct: prev.correct + 1,
        };
        putScore(newScore);
        return newScore;
      });
    } else {
      setScore((prev) => {
        const newScore = {
          ...prev,
          answered: prev.answered + 1,
          incorrect: prev.incorrect + 1,
        };
        putScore(newScore);
        return newScore;
      });
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      putIndex(nextQuestion);
    } else {
      displayScore();
    }
  };

  const onPlayAgain = () => {
    putScore(initialScore);
    putShowScore(false);
    setScore(initialScore);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <section className="quiz-page">
        <ResumeBox score={score} onPlayAgain={onPlayAgain} onLogout={onLogout} />
      </section>
    );
  }

  if (!showScore && questions.length) {
    return (
      <section className="quiz-page">
        <QuizBox
          questions={questions}
          currentQuestion={currentQuestion}
          secondsLeft={secondsLeft}
          duration={duration}
          onAnswerClick={onAnswerClick}
        />
      </section>
    );
  }

  return (
    <section className="quiz-page">
      <InstructionBox onLogout={onLogout} onStart={onStart} />
    </section>
  );
}
