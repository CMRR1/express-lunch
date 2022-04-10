import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Platillo from "./components/Platillo/Platillo";
import Carrito from "./components/Carrito/Carrito";
import { Container } from 'react-bootstrap';

function App() {

  let data = JSON.parse(localStorage.getItem("carrito"));
  if (data == null) {
    data = [];
    localStorage.setItem("carrito", JSON.stringify(data));
  }

  const [filtro, setFiltro] = React.useState({ b: true, l: true, s: true });
  function updateFiltro(index) {
    let filtros = { b: false, l: false, s: false };
    switch (index) {
      case 0:
        filtros.b = true;
        break;
      case 1:
        filtros.l = true;
        break;
      case 2:
        filtros.s = true;
        break;

      default:
        filtros = { b: true, l: true, s: true };
        break;
    }
    setFiltro(filtros);
  }
  //}
  React.useEffect(() => {
  }, [filtro])

  const [carrito, setCarrito] = React.useState(data);
  function updateCarrito() {
    let data = JSON.parse(localStorage.getItem("carrito"));
    setCarrito(data);
  }
  return (
    <div className="App">
      <Navbar updateFiltro={updateFiltro} />
      <Container>
        <br />
        <br />
        <br />
        <Platillo filtro={filtro}
          updateCarrito={updateCarrito} />

      </Container>
      <Carrito updateCarrito={updateCarrito}
        carrito={carrito} />
    </div>
  );
}

export default App;
