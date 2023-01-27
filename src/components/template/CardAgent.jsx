import './CardAgent.css';
import React from 'react';
import { Card } from '../StyledComponents/CardAgent/';

const CardAgent = ({ image, bg_image, name, type, background_color1 }) => {
    console.log(background_color1)


    return (

        <div id='cardAgent' className='card'>
            <div id='visual-card' style={{ backgroundColor: background_color1[0] }}>
                <img className='img-card' src={image} alt="" />
                <img className='bg-img-card' src={bg_image} alt="" />
            </div>
            <p>{name}</p>
            <p>{type}</p>
        </div>
    )
}
export default CardAgent;