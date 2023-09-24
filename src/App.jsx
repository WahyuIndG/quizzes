import { React, useState } from "react";
import { login, logout, getUser } from "./utils";
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";

function App({ duration }) {
  const [auth, setAuth] = useState(getUser() || null);

  const onLogin = (data) => {
    login(data);
    setAuth(data);
  };

  const onLogout = () => {
    logout();
    setAuth(null);
  };

  return auth === null ? <LoginPage onLogin={onLogin} /> : <QuizPage onLogout={onLogout} duration={duration} />;
}

export default App;
