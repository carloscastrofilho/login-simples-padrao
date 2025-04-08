document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  

    const usuarioValido = "teste";
    const senhaValida = "teste";

    if (usuario === usuarioValido && senha === senhaValida) {
      alert("Login efetuado com sucesso!");
      window.location.href = "dashboard.html";
    } else {

      document.getElementById("mensagemErro").style.display = "block";
    }
  });
  

