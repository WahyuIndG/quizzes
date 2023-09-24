async function fetchQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy&category=18");
  const data = await response.json();

  data.results.forEach((q) => {
    const randomIndex = Math.floor(Math.random() * q.incorrect_answers.length + 1);
    q.incorrect_answers.splice(randomIndex, 0, q.correct_answer);
  });

  localStorage.setItem("data", JSON.stringify(data));

  return data.results;
}

function getQuestions() {
  const data = localStorage.getItem("data");
  if (!data) return;
  const { results } = JSON.parse(data);
  return results;
}

function reset() {
  localStorage.removeItem("data");
  localStorage.removeItem("currentQuestion");
}

function putIndex(index) {
  localStorage.setItem("currentQuestion", index);
}

function getIndex() {
  const index = localStorage.getItem("currentQuestion");
  if (!index) return;
  return parseInt(index);
}

function login(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function logout() {
  localStorage.clear();
}

function getUser() {
  const user = localStorage.getItem("user");
  if (!user) return;
  return JSON.parse(user);
}

function putShowScore(value) {
  localStorage.setItem("showScore", value);
}

function getShowScore() {
  const showScore = localStorage.getItem("showScore");
  if (showScore === null || showScore === "false") return false;
  return true;
}

function putScore(score) {
  localStorage.setItem("score", JSON.stringify(score));
}

function getScore() {
  const score = localStorage.getItem("score");
  if (!score) return;
  return JSON.parse(score);
}

function setCount(count) {
  localStorage.setItem("count", count);
}

function getCount() {
  const count = localStorage.getItem("count");
  if (!count) return;
  return parseInt(count);
}

export {
  fetchQuestions,
  getQuestions,
  putIndex,
  getIndex,
  login,
  logout,
  getUser,
  reset,
  putShowScore,
  getShowScore,
  putScore,
  getScore,
  setCount,
  getCount,
};
