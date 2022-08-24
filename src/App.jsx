import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar/navbar.css';
import ItemListContainer from './container/itemListContainer';
import 'remixicon/fonts/remixicon.css';
import CartWidget from './components/Cartwidget/cartWidget';



const App = () => {
  const persona = { nombre: "JR", proyecto: "JR Shoes" };

  return (
    <div className="App">
      <ItemListContainer greeting="LIFE IN SHOES"/>
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bievenidos a {persona.proyecto}
        </p>
      </header>
    </div>
  );
}

export default App;
