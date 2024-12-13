import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./Login.css";
const Login = () => {
  const [getCorreo, setCorreo] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getUsuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  console.log(getUsuarios);

  function iniciarSesion() {
    fetch("http://localhost:7714/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
      
    let auth = getUsuarios.some(
      (getUsuario) =>
        getUsuario.contraseña == getContrasena && getUsuario.correo == getCorreo
    );
    if (auth) {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        icon: "success",
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          redireccion("/");
        },
      });

    }
    /* Validar inicio de sesión con usuario o correo */
  }

  useEffect(() => {
    iniciarSesion();
  }, []);

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
