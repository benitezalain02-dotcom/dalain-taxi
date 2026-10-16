document.addEventListener("DOMContentLoaded", () => {
  const cuerpo = document.body;

  function mostrarPasajero() {
    cuerpo.innerHTML = `
      <h1>🚕 Dalain-Taxi</h1>
      <h2>Solicitar viaje</h2>

      <label>Tu teléfono:</label>
      <input id="telefono" type="tel" placeholder="Número de teléfono">

      <label>Origen:</label>
      <input id="origen" placeholder="¿Dónde estás?">

      <label>Destino:</label>
      <input id="destino" placeholder="¿Adónde vas?">

      <label>Tipo de vehículo:</label>
      <select id="vehiculo">
        <option value="400">Triciclo - 400 CUP/km</option>
        <option value="300">Moto de gasolina - 300 CUP/km</option>
        <option value="250">Moto eléctrica - 250 CUP/km</option>
        <option value="600">Motoneta - 600 CUP/km</option>
        <option value="400">Bicitaxi eléctrico - 400 CUP/km</option>
      </select>

      <p>El precio definitivo dependerá de la distancia.</p>

      <button onclick="alert('La solicitud de viajes estará disponible cuando conectemos el sistema de conductores.')">
        Solicitar viaje
      </button>

      <button onclick="location.reload()">Volver</button>
    `;
  }

  function mostrarChofer() {
    cuerpo.innerHTML = `
      <h1>🚕 Dalain-Taxi</h1>
      <h2>Registro de chófer</h2>

      <input id="nombre" placeholder="Nombre completo">
      <input id="telefono" type="tel" placeholder="Número de teléfono">

      <label>Tipo de vehículo:</label>
      <select id="vehiculo">
        <option>Triciclo</option>
        <option>Moto de gasolina</option>
        <option>Moto eléctrica</option>
        <option>Motoneta</option>
        <option>Bicitaxi eléctrico</option>
      </select>

      <p>Prueba gratuita: 7 días.</p>
      <p>Después: 1.000 CUP mensuales.</p>

      <button onclick="alert('El registro estará disponible cuando conectemos la base de datos.')">
        Registrarme
      </button>

      <button onclick="location.reload()">Volver</button>
    `;
  }

  document.querySelectorAll("button, a").forEach(element => {
    const texto = element.textContent.trim().toLowerCase();

    if (texto.includes("pasajero")) {
      element.addEventListener("click", evento => {
        evento.preventDefault();
        mostrarPasajero();
      });
    }

    if (texto.includes("chófer") || texto.includes("chofer")) {
      element.addEventListener("click", evento => {
        evento.preventDefault();
        mostrarChofer();
      });
    }
  });
});