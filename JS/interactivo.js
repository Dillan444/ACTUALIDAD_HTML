var canSend = document.getElementById("canSend");
var t = document.getElementById("enviar");
t.addEventListener("click", alerta);

var cantidad = 0;
var cantidad2 = 0;

function alerta() {
  alert("Enviado");
  cantidad++;
  canSend.innerHTML = "Comentarios (" + cantidad +")"
}
