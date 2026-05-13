import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleEntrar = () => {
    login({ usuario: "lucas@iesb.edu.br", senha: "123456" });
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
