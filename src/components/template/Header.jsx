import './Header.css';
import React, { useEffect, useState } from 'react';
import iconValorant from '../../assets/img/icons8-valorant-48.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({title}) => {

  return (
    <>
    <header id="header">
      <h1>{title}</h1>
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
        <Link className='btn' to={"/weapons"}>
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
    </>
  )
}

const mapStateToProps = state => ({
  title: state.title
})

export default connect(
    mapStateToProps
)(Header);
