import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const { login } = useAuthContext();

  const handleEntrar = () => {
    login({ usuario: "lucas@iesb.edu.br", senha: "123456" });
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
