import avatar from "../assets/learn.svg";
import { useState } from "react";

function Login() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [senhaErro, setSenhaErro] = useState();
  const [matriculaErro, setMatriculaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatório");
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatória");
    }
  };

  return (
    <>
      <img src={avatar} alt="Imagem do logo" />
      <h1>Aluno Online</h1>
      <form onSubmit={trataSubmit}>
        
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          onChange={(e) => {
            setSenha(e.target.value);
            setSenhaErro("");
          }}
        />
        <p>{senhaErro}</p>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
