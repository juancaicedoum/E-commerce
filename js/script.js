// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    
  // Seleccionamos el formulario por su ID
  const formulario = document.getElementById("formulario");

  // Agregamos un evento para cuando se envíe el formulario
  formulario.addEventListener("submit", function (event) {
      
      // Evita que la página se recargue al enviar el formulario
      event.preventDefault();

      // Capturamos los valores de los campos
      const nombre = document.getElementById("nombre");
      const correo = document.getElementById("correo");
      const telefono = document.getElementById("telefono");

      // Variable para controlar si hay errores
      let valido = true;

      // Validar el campo nombre
      if (nombre.value.trim() === "") {
          nombre.classList.add("is-invalid");  // Agrega la clase de Bootstrap para marcarlo en rojo
          valido = false;
      } else {
          nombre.classList.remove("is-invalid"); // Si es válido, remueve la clase de error
      }

      // Validar el campo correo
      if (correo.value.trim() === "") {
          correo.classList.add("is-invalid");
          valido = false;
      } else {
          correo.classList.remove("is-invalid");
      }

      // Validar el campo teléfono
      if (telefono.value.trim() === "") {
          telefono.classList.add("is-invalid");
          valido = false;
      } else {
          telefono.classList.remove("is-invalid");
      }

      // Si todos los campos son válidos, enviamos la información
      if (valido) {
          console.log("Formulario enviado con éxito.");
          console.log("Nombre: ", nombre.value);
          console.log("Correo: ", correo.value);
          console.log("Teléfono: ", telefono.value);

          // Puedes agregar una alerta o redirigir a otra página
          alert("Formulario enviado con éxito!");

          // Aquí podrías enviar los datos a un servidor si es necesario
          // Ejemplo: fetch("URL_DEL_SERVIDOR", { method: "POST", body: new FormData(formulario) });

          // Limpiar los campos después de enviar
          formulario.reset();
      }
  });
});