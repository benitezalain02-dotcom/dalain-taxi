function elegir(tipo) {
  const mensaje = document.getElementById("mensaje");

  if (tipo === "Pasajero") {
    mensaje.textContent =
      "Bienvenido. Próximamente podrás solicitar tu viaje.";
  } else {
    mensaje.textContent =
      "Bienvenido, chófer. Próximamente podrás registrarte.";
  }
}