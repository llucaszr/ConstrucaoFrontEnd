import "./App.css";
import logo from "./assets/learn.svg";

function Cabecalho() {
  return (
    <header>
      <h1>Título</h1>
    </header>
  );
}

function App() {
  // <div>
  //   <Cabecalho />
  //   <div>{2 + 2}</div>
  //   <img src={logo} alt="" />
  //   <p></p>
  // </div>

  return (
    <main>
      <img src={logo} alt="Icone de um chapéu de formatura" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label for="senha">Senha</label>
      <p id="senhaErro"></p>
      <input type="password" id="senha" name="senha" />
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;
