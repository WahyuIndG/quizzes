import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const onUsernameChange = ({ target }) => {
    setUsername(target.value);
  };

  const onPasswordChange = ({ target }) => {
    setpassword(target.value);
  };

  const onSubmit = () => {
    onLogin({ username, password });
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h1>Quizzes</h1>
      <p>Let's complete the entry form below !</p>
      <input
        type="email"
        id="username"
        value={username}
        onChange={onUsernameChange}
        required
        placeholder="sample@example.com"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        required
        placeholder="password here"
      />
      <button type="submit">Login</button>
    </form>
  );
}
