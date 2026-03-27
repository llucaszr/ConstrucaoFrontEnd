import "./style.css";

const botao = document.querySelector("button");

botao.addEventListener("click", function (e) {
  const matriculaInput = document.querySelector("#matricula");
  const matriculaErro = document.querySelector("#matriculaErro");
  const senhaInput = document.querySelector("#senha");
  const senhaErro = document.querySelector("#senhaErro");

  matriculaErro.textContent = "";
  senhaErro.textContent = "";
  matriculaErro.value = "";
  senhaErro.value = "";

  if (matriculaInput.value == "") {
    matriculaErro.textContent = "Matrícula é obrigatória";
    return;
  }

  if (parseInt(matriculaInput.value) <= 0) {
    matriculaErro.textContent = "Matrícula deve ser um número positivo";
    return;
  }

  if (senhaInput.value.length < 8) {
    senhaErro.textContent = "A senha é obrigatória";
    return;
  }
});
