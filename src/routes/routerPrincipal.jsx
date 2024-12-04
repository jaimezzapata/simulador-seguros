import Home from "../pages/Home";
import Login from "../pages/Login";
import Simulador from "../pages/Simulador";
export let router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/simulador",
    element: <Simulador />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
