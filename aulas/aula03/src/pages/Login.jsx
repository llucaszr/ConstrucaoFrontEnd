import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <>
      <img src={logo} alt="Logo do aluno online" />
      <h1>Aluno Online</h1>
      <FormLogin />
    </>
  );
}

export default Login;
