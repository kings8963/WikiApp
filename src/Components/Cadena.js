import React from 'react';


const Cadena =({cadena})=>{
    if(Object.keys(cadena).length === 0) return null;
    return(
        <div className="container" >
            <h2 className=" d-flex justify-content-center">Cadena de respuesta</h2>
            <p>{cadena}</p>
            
        </div>
           
      
    );
};

export default Cadena;