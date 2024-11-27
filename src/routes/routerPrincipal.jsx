import Home from "../pages/Home";
import Simulador from "../pages/Simulador";

export let router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/simulador",
    element: <Simulador />,
  }
];
