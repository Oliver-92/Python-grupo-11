<?php
require_once('/config.php');
// Definir variables

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Validar datos

if (empty($nombre) || empty($correo) || empty($asunto) || empty($mensaje)) {
  echo "Error: Todos los campos son obligatorios.";
  exit;
}

// Enviar correo electrónico

$destinatario = "guillermo.lamberto@gmail.com";
$asunto = "Contacto desde la página web";
$mensaje = "Nombre: $nombre\nCorreo electrónico: $correo\nAsunto: $asunto\nMensaje: $mensaje";

mail($destinatario, $asunto, $mensaje);

// Redirigir al usuario

header("Location: index.html?enviado=1");


