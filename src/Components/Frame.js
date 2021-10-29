import React from 'react';
import Iframe from 'react-iframe';

const Frame = ({frame}) =>{
    if(Object.keys(frame).length === 0) return null;
    return(
        <div className="container">
            
              <h2 className="container d-flex justify-content-center">Render de respuesta</h2>
              
              <Iframe url={frame}
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
          </div>
          
     );

}

export default Frame;