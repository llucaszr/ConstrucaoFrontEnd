import avatar from "../assets/learn.svg";
import { useState } from "react";

function Login() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();

  return (
    <>
      <img src={avatar} alt="Imagem do logo" />
      <h1>Aluno Online</h1>
      <form>
        <label htmlFor="matricula">Matrícula</label>
        <input
          type="number"
          id="matricula"
          name="matricula"
          onChange={(e) => setMatricula(e.target.value)}
        />
        <p>{matricula}</p>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          onChange={(e) => setSenha(e.target.value)}
        />
        <p>{senha}</p>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
