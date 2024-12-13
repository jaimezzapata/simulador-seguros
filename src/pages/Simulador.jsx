import Header from "../components/Header";

const Simulador = () => {
  return (
    <section className="simulador">
      <Header />
      <form>
        <div>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input type="number" id="edad" placeholder="Ingresa tu edad" />
        </div>
        <div>
          <label htmlFor="genero">Género:</label>
          <select id="genero">
            <option value="">Selecciona una opción</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="ocupacion">Ocupación:</label>
          <input
            type="text"
            id="ocupacion"
            placeholder="Ingresa tu ocupación"
          />
        </div>
        <div>
          <label htmlFor="ingresos">Ingresos Mensuales (USD):</label>
          <input
            type="number"
            id="ingresos"
            placeholder="Ingresa tus ingresos mensuales"
          />
        </div>
        <div>
          <label htmlFor="monto">Monto Asegurado Deseado (USD):</label>
          <input
            type="number"
            id="monto"
            placeholder="Ingresa el monto asegurado deseado"
          />
        </div>
        <div>
          <label htmlFor="fuma">¿Fumas?</label>
          <select id="fuma">
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="enfermedades">
            ¿Tienes enfermedades preexistentes?
          </label>
          <textarea
            id="enfermedades"
            placeholder="Escribe las enfermedades preexistentes, si las tienes"
          ></textarea>
        </div>
        <button type="button">Calcular Cotización</button>
      </form>
    </section>
  );
};

export default Simulador;
