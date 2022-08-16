import logo from './logo.svg';
import './App.css';

const App = () => {
const persona = {nombre: "JR", proyecto: "JR Shoes"};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bievenidos a {persona.proyecto}
        </p>
        <ButtonComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const ButtonComponent = () => {
  return <button>Click para ingresar!</button>
}

export default App;
