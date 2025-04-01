document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  

    const usuarioValido = "0220832321003";
    const senhaValida = "3001232380220";

    if (usuario === usuarioValido && senha === senhaValida) {
      alert("Login efetuado com sucesso!");
      window.location.href = "dashboard.html";
    } else {

      document.getElementById("mensagemErro").style.display = "block";
    }
  });
  