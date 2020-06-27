import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/ComponenteG';
import MiFormulario from './componentes/Formulario';



function addComponentes(nombre,apellido){
  var variable=(
    <div>
      <p>
        mi nombre es: {nombre}
      </p>
      <p>
        mi apellido es: {apellido}
      </p>
    </div>

  )
  return variable
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
       
        
        <section className='componentes'>
          <MiComponente />

        </section>
<section className='componentes'>
        <MiFormulario />

      </section>
      </header>

      
    </div>
  );
}

export default App;
