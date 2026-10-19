const SUPABASE_URL = "https://tglwfsaesaesgkohpewx.supabase.co";
const SUPABASE_KEY = "sb_publishable_FijvZHp1UQkNOfuDcfERiA_RI0GEhXH";

const supabaseDB = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);document.addEventListener("DOMContentLoaded", () => {
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

      <label>Distancia del viaje (km):</label>
      <input id="distancia" type="number" min="0.1" step="0.1"
             placeholder="Introduce la distancia en kilómetros">

      <label>Tipo de vehículo:</label>
      <select id="vehiculo">
        <option value="400">Triciclo - 400 CUP/km</option>
        <option value="300">Moto de gasolina - 300 CUP/km</option>
        <option value="250">Moto eléctrica - 250 CUP/km</option>
        <option value="600">Motoneta - 600 CUP/km</option>
        <option value="400">Bicitaxi eléctrico - 400 CUP/km</option>
      </select>

      <h3 id="precio">Precio estimado: pendiente</h3>
      <p>El precio incluye 200 CUP por recogida.</p>

      <button id="calcular">Calcular precio</button>

      <button onclick="alert('La solicitud estará disponible cuando conectemos el sistema de conductores.')">
        Solicitar viaje
      </button>

      <button onclick="location.reload()">Volver</button>
    `;

    const distancia = document.getElementById("distancia");
    const vehiculo = document.getElementById("vehiculo");
    const precio = document.getElementById("precio");

    function calcularPrecio() {
      const km = Number(distancia.value);

      if (!km || km <= 0) {
        precio.textContent = "Introduce una distancia válida.";
        return;
      }

      const total = km * Number(vehiculo.value) + 200;

      precio.textContent =
        "Precio estimado: " +
        total.toLocaleString("es-ES") +
        " CUP";
    }

    document.getElementById("calcular")
      .addEventListener("click", calcularPrecio);

    distancia.addEventListener("input", calcularPrecio);
    vehiculo.addEventListener("change", calcularPrecio);
  }

  function mostrarChofer() {
    cuerpo.innerHTML = `
      <h1>🚕 Dalain-Taxi</h1>
      <h2>Registro de chófer</h2>

      <label>Nombre completo:</label>
      <input id="nombre" placeholder="Nombre completo">

      <label>Número de teléfono:</label>
      <input id="telefono" type="tel" placeholder="Número de teléfono">

      <label>Tipo de vehículo:</label>
      <select id="vehiculo">
        <option>Triciclo</option>
        <option>Moto de gasolina</option>
        <option>Moto eléctrica</option>
        <option>Motoneta</option>
        <option>Bicitaxi eléctrico</option>
      </select>

      <label>Foto del chófer:</label>
      <input id="fotoChofer" type="file" accept="image/*">

      <label>Foto del vehículo:</label>
      <input id="fotoVehiculo" type="file" accept="image/*">

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