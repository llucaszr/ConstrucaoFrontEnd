import "./style.css";

const formulario = document.querySelector("#formLogin");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const emailInput = document.querySelector("#email");
  const emailErro = document.querySelector("#emailErro");
  const senhaInput = document.querySelector("#senha");
  const senhaErro = document.querySelector("#senhaErro");

  emailErro.textContent = "";
  senhaErro.textContent = "";


  if (emailInput.value == "" && senhaInput.value == "") {
    emailErro.textContent = "E-mail é obrigatório.";
    senhaErro.textContent = "Senha é obrigatória.";
    return;
  }
  
  if (emailInput.value == "") {
    emailErro.textContent = "E-mail é obrigatório.";
    return;
  }

  if (senhaInput.value == "") {
    senhaErro.textContent = "Senha é obrigatória.";
    return;
  }

  if (senhaInput.value.length < 8) {
    senhaErro.textContent = "A senha deve ter no mínimo 8 caracteres.";
    return;
  }

  console.log("Formulário validado com sucesso!");
});
