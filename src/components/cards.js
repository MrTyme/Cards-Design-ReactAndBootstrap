//componente para un conjunto de tarjetas
import React from 'react';

//importacion de la tarjeta
import Card from './Card';

//importacion de la imagen
import img1 from '../assets/img-1.jpeg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';



//array para almacenar las tarjetas
const cards = [
    {
        id: 1,
        title: 'Lo Fi HipHop',
        image: img1,
        text: 'es una expresion musical moderna que se centra en el uso de articulos electronicos antiguos para componer una melodia'
    },
    {
       id: 2,
        title: 'luz',
        image: img2,
        text: 'bella es la imagen que representa aquel brillo que se arroja hacia el alma'
    },
    {
        id: 3,
        title: 'url de muestra',
        image: img3
    }
];



function Cards() {
    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
            
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} text={card.text}/>
                        </div>
                    ))
                }   
            </div>

        </div>
    )
}

export default Cards;
