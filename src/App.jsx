import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar/navbar.css';


const App = () => {
const persona = {nombre: "JR", proyecto: "JR Shoes"};

  return (
    <div className="App">
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
