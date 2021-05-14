const nombre = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=> {
  e.preventDefault()
  let entrar = false
  let warnings = ""
  parrafo.innerHTML = ""

  if (nombre.value.length < 6) {
      warnings += "Nombre no valido <br />"
      entrar = true
  }

  if (password.value.length < 8) {
      warnings += "Password no valido <br />"
      entrar = true
  }

  if (entrar) {
      parrafo.innerHTML = warnings
  }
  else {
    parrafo.innerHTML = "Enviado"
  }
})
