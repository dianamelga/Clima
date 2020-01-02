import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  // State principal
  //ciudad = state, guardarCiudad = this.setState()
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  //escucha los cambios que ocurren en el state (los datos quee scucha se ponen en los [])
  useEffect(() => {
    //prevenir ejecucion de primera vez
    if(ciudad === '') return;
    const consultarApi = async () => {
      const appId = 'bb61020accfa024cac8501fec9033243';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais},&appid=${appId}`;
  
      //consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      console.log(url);
      console.log(resultado);
      guardarResultado(resultado);
    }

    consultarApi();

  }, [ciudad, pais]);

  const datosConsulta = datos => {
    //Validar que ambos campos esten
    if(datos.ciudad === '' || datos.pais === '') {
      guardarError(true)
      return;
    }

    //Ciudad y pais existen, agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
    guardarResultado({});
  }


 

  // Cargar un componente condicionalmente
  let componente;
  if(error) {
    //mostrar error
    componente = <Error mensaje="Ambos campos son obligatorios"/>;
  }else if (resultado.cod === "404") {
    componente = <Error mensaje = "La ciudad no existe en nuestro registro"/>;
  }else{
    //mostrar el clima
    componente = <Clima
          resultado={resultado}
    />;
  }

  return (
    <div className="App">
      <Header
      titulo='Clima React App'></Header>
      <div className="contenedor-form">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <Formulario
            datosConsulta={datosConsulta}/>
          </div>

          <div className="col s12 m6">
            {componente}
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
