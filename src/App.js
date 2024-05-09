import logo from './logo2.png';
import './App.css';
import Chistes from './Components/Chistes';
import { useState } from 'react';

function App() {
  const [chistes, setChistes]= useState(null)
  const reqApi = async ()=>{
    const api = await fetch('https://api.chucknorris.io/jokes/random');
    const characterChiste = await api.json();
    setChistes(characterChiste.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="tittle-chiste">Recibe un chiste de CHUCK NORRIS</h1>
            <h3 className="text-chiste">Pulsa sobre el boton Chiste para obtenerlo</h3>
            <button className="button-chiste" onClick={reqApi}>Chiste</button>
            <Chistes chistes={chistes} />
      </header>
    </div>
  );
}

export default App;
