//Capturar la información del formulario
const formulario = document.querySelector("form")

//Agregar un evento al enviar el formulario
formulario.addEventListener("submit", function(evento){
  evento.preventDefault();
  let valido = true; //Variable para validar el formulario
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");

  //Validar nombre
  if (nombre.value.trim() === ""){
    nombre.classList.add("invalid-feedback"); //Agregar una clase de bootstrap a la alerta.
    valido = false;
    } else {
      nombre.classList.remove("invalid-feedback"); //Remover la clase de bootstrap a la alerta.
    }

  //Validar email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email.value.trim())){
    email.classList.add("invalid-feedback"); //Agregar una clase de bootstrap a la alerta.
    valido = false;
  } else {
    email.classList.remove("invalid-feedback"); //Remover la clase de bootstrap a la alerta.
  }

  //Validar teléfono
  const telefonoRegex = /^[0-9]{10}$/;
  if (!telefonoRegex.test(telefono.value.trim())){
    telefono.classList.add("invalid-feedback"); //Agregar una clase de bootstrap a la alerta.
    valido = false;
  } else {
    telefono.classList.remove("invalid-feedback"); //Remover la clase de bootstrap a la alerta.
  }

  //Si el formulario es válido, enviar la información
  if (valido){
    alert("¡Formulario enviado correctamente!");
    formulario.reset(); //Limpiar el formulario
  }
});