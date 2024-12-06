import { useState } from "react";

const Login = () => {
  const [getCorreo, setCorreo] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getUsuarios, setUsuarios] = useState([]);

  function iniciarSesion() {
    // console.log(getContrasena, getCorreo);
    fetch("http://localhost:7714/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }


  return (
    <form>
      <div>
        <label htmlFor="">Correo</label>
        <input onChange={(e) => setCorreo(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="">Contraseña</label>
        <input onChange={(e) => setContrasena(e.target.value)} type="text" />
      </div>
      <button onClick={iniciarSesion} type="button">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
