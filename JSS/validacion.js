function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || phone === "" || email ==="") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

   /*// Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
        var charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
    }

    for (var i = 0; i < apellido.length; i++) {
        var charCode = apellido.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
    }


    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (phone.length !== 10) {
      alert("El campo 'Celular' debe contener exactamente 10 dígitos numéricos.");
      return false;
    }

    for (var j = 0; j < dni.length; j++) {
      var digit = phone.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'dni' solo puede contener dígitos numéricos.");
        return false;
      }
    }*/

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
    
  }