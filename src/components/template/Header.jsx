import './Header.css';
import React from 'react';
import iconValorant from '../../assets/img/icons8-valorant-48.png';
import { Link } from 'react-router-dom';

export default props => (
    <header id="header">
        <div className='logo'>
            <Link className='title' to={"/"}>
                <h1>Valorant</h1>
                <i><img src={iconValorant} alt="icon" /></i>
            </Link>
        </div>
        <div className="links">
            <Link className='btn' to={"/agents"}>
                Agentes
            </Link>
            <Link className='btn' to={"/weapon"}>
                Armas
            </Link>
            <Link className='btn' to={"/maps"}>
                Mapas
            </Link>
            <Link className='btn' to={"/about"}>
                Sobre
            </Link>
        </div>
    </header>
)