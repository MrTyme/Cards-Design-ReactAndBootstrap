//creacion de la tarjeta
import React from 'react';
import PropTypes from 'prop-types';


function Card({ title, imageSource, text }){
    /*
     * buscaremos que cada tarjeta reciba sus props
     * o propiedades
     *
     * pero recordemos que los props son un objeto
     * que guarda las propiedades que se le asignen (los atributos de las etiquetas)
     * a los datos, ejemplo: titulo, contenido, id, etc.
     *
     * por ende si se necesita un dato especifico se le puede
     * hacer destructuring
     */
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt=""/>    

            <div className="card-body text-light">
               
                <h4 className="card-title">{
                    //llamada a los titulos por destructuring
                    title
                } </h4>
                
                <p className="card-text text-seconday">
                    {
                       text ? text :  'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.'
                    }
                </p>

                <a href="#!" className="btn btn-outline-secondary" target="_blank">
                    { //target="_blank" es una funcion que genera una pestania nueva en el navegador al hacer click en un input o submit
                    }
                    Go to this website
                </a>
            </div>
        </div>       
    )
}


//uso del prop-types para validar en caso de que no exista un prop especifico
//el prop-types actua como el Joi de @hapi en la base de datos 
//pero para el frontend
Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.string,
    text: PropTypes.string
}




export default Card;


/*
 * NOTA>> los archivos que son imagenes
 * en react, despues de importarlos, 
 * se deben capturar como archivo externo con llaves
 * */
