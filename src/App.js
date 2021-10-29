//import Iframe from 'react-iframe'
import React, {useState,useEffect, Fragment} from 'react';
import Request from './Components/Request'
import Buscador from './Components/Buscador';
import Cadena from './Components/Cadena';
import Frame from './Components/Frame';

function App() {

  const [busquedaArticulo, guardarBusquedaArticulo] = useState({});
  const [request, guardarRequest] = useState({});
  const [cadena,guardarCadena]= useState({});
  const [frame, guardarFrame] = useState({});

 
  useEffect(()=>{
    if(Object.keys(busquedaArticulo).length === 0) return;
     
    const consultarApiWiki = async () =>{
     const {articulo,idioma} = busquedaArticulo;
     const url =`https://${idioma}.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${articulo}`;
     const url2 =`https://${idioma}.wikipedia.org/wiki/${articulo}`
     const resultado = await fetch(url);
     const data = await resultado.json();
     const text = JSON.stringify(data.query.search);

    // guardarBusquedaArticulo(data.query.search);
     //console.log(data.query.search);
     guardarCadena(text);
     console.log(url);
     guardarRequest(url);
     guardarFrame(url2);
     }

     consultarApiWiki();

}, [busquedaArticulo,request,cadena,frame]);

  return(
    <Fragment>
        <Buscador
          guardarBusquedaArticulo={guardarBusquedaArticulo}
        />

       <Request
        request={request}
       />

       <Cadena
        cadena={cadena}
       />

      <Frame
        frame={frame}
      />
     
           
       
    </Fragment>
  );
}

export default App;

