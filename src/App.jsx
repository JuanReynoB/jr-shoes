import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar/navbar.css';
import ItemListContainer from './container/itemListContainer';
import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';
import ItemCount from './components/itemCount/itemCount';



const App = () => {
  const [carrito, setCarrito] = useState([])

  return (
    <div className="App">
      <ItemListContainer greeting="CANTIDAD EN EL CARRITO"/> <span>{carrito.length}</span> 
      <Navbar/>
      
      <div>
      <ItemCount/>
      <button onClick={() => {
              setCarrito([...carrito, "Jordan Retro IV"])
          }}>
            Agregar al carrito
          </button>
        
      </div>
    </div>
  );
}

export default App;
