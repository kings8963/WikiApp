import React from 'react';

const Request =({request})=>{
    if(Object.keys(request).length === 0) return null;
    return(
        <div >
            <h2 className="container d-flex justify-content-center">Request generada</h2>
           <p className="container d-flex justify-content-center">{request}</p>
        </div>
    );
};

export default Request;