import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Platillo from "./components/Platillo/Platillo";
import Carrito from "./components/Carrito/Carrito";

function App() {
  const [filtro, setFiltro] = React.useState({ b: true, l: true, s: true });
  function updateFiltro(index) {
    // if (index !== -1) {
    //   let filtros = [...filtro];
    //   filtros.forEach(element => {
    //     element = false;
    //   });
    //   filtros[index] = true;
    //   console.log(filtros);
    //   setFiltro(filtros);
    //   console.log(filtro);
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
    console.log('Fruit', filtro);
  }, [filtro])

  return (
    <div className="App">

      <Navbar updateFiltro={updateFiltro} />
      <br />
      <br />
      <br />
      <Platillo  filtro={filtro}/>
      <Carrito />
    </div>
  );
}

export default App;
