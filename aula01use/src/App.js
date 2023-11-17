import './App.css';
import React, {useState} from 'react';
import CalculadoraDeSoma from './componentes/soma';

function App() {
  const[contador, setContador] = useState(0);
  return (
  <div className="App">
   <h1> Minha primeira calculadora em react </h1>
   <CalculadoraDeSoma/>
    </div>
  );
}

export default App;
