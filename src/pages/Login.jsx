import React from "react";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [getCorreo, setCorreo] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getUsuarios, setUsuarios] = useState([]);

  function iniciarSesion() {
    fetch("http://localhost:7714/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));

    let auth = getUsuarios.some(
      (item) => getCorreo === item.correo && getContrasena === item.contraseña
    );
    console.log(auth);
  }

  return (
    <form>
      <div>
        <label htmlFor="">Correo</label>
        <input
          onChange={(e) => setCorreo(e.target.value)}
          type="text"
          placeholder="Ingresa tu correo"
        />
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input
          onChange={(e) => setContrasena(e.target.value)}
          type="password"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <button onClick={iniciarSesion} type="button">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
