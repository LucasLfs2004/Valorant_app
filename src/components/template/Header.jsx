import './Header.css'
import React from 'react'
import iconValorant from '../../assets/img/icons8-valorant-48.png'

export default props => (
    <header id="header">
        <div className="btn">
            <button className='efeito'>
                Armas
            </button>
            <button className='efeito'>
                Personagens
            </button>
            <button className='efeito'>
                Mapas
            </button>
        </div>
        <div className="title">
            <h1>Valorant</h1>
            <i><img src={iconValorant} alt="icon" /></i>
        </div>
        <div>
            <button className='efeito'>Sobre</button>
        </div>

    </header>

)