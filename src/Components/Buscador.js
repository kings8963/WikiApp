import { useState } from "react";
import React from 'react';

const Buscador = ({guardarBusquedaArticulo})=>{

    const [busqueda,guardarBusqueda] = useState({
        articulo: '',
        idioma:''
    });

    const [error,guardarError] = useState(false);
    const {articulo, idioma} = busqueda;

     ///funcion a cada inut para leer su contenido
     const actualizarStare = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    } 


        //consultar las apis
        const buscarInformacion = e =>{
            e.preventDefault();
    
            if(articulo.trim() === '' || idioma.trim() === ''){
                guardarError(true);
                return;
            }
            guardarError(false);
            /// pasamos al componente principal
            guardarBusquedaArticulo(busqueda);
    
        }


        return(
            <div className="bg-info bg-dark">
             {error ? <p className="alert alert-danger text-center p-2">Todos los
                    campos son obligatorios</p> : null}
            <div className="container bg-dark">
                <div className="row ">
                   <form
                    onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                       
                            <legend className="text-center">Buscador Wiki</legend>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    
                                        <label>Articulo</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="articulo"
                                        placeholder="Buscar articulo"
                                        onChange={actualizarStare}
                                        value={articulo}
                                        />
                                    
                                </div>
                                
                               <div className="form-group col-md-12">
                                    
                                    <label>Idioma</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="idioma"
                                    placeholder="Seleccionar lenguaje siguiendo el estándar ISO 639-1 "
                                    onChange={actualizarStare}
                                    value={idioma}
                                    />
                                </div>

                                <div className="container d-flex justify-content-center">
                                    <button 
                                        type ="submit"
                                        className="btn btn-primary float-left"
                                        >Buscar
                                    </button>
                               </div>
                                
                                           
                                    
                                
                            </div>
                            
                       
                    </form>
                </div>
            </div>
        </div>
        );
}

export default Buscador;