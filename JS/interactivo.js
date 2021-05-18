var canSend = document.getElementById("canSend");
var t = document.getElementById("enviar");
var w = document.getElementById("Escribir");
t.addEventListener("click", alerta);

var cantidad = 0;

function alerta() {
  alert("Enviado");
  cantidad++;
  canSend.innerHTML = "Comentarios (" + cantidad +")"
}
