import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Platillo from "./components/Platillo/CardPlatillo";
import Carrito from "./components/Carrito/Carrito";
function App() {
  var filtro=[true,true,true];
  return (
    <div className="App">

        <Navbar filtro={filtro}/>
        <br />
        <br />
        <br />
        <Platillo />
        <Carrito />
    </div>
  );
}

export default App;
