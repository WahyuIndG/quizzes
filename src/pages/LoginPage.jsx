import LoginForm from "../components/LoginForm";

export default function LoginPage({ onLogin }) {
  return (
    <>
      <section className="login-page">
        <LoginForm onLogin={onLogin} />
      </section>
    </>
  );
}
