import './Header.css';
import React, { useEffect, useState } from 'react';
import iconValorant from '../../assets/img/icons8-valorant-48.png';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeTitle } from '../../store/actions/title';

const Header = (props) => {

  const { title } = props

  return (
    <header id="header">
      <div className="content-top">
        <div className='logo'>
          <h1>
            <Link to={"/"} onClick={() => props.changeTitle("")}>
              Valorant
            </Link>
          </h1>
          <i><img src={iconValorant} alt="icon" /></i>
        </div>

        <div className="links">
          <Link className='btn' to={"/agents"} onClick={() => props.changeTitle("Operadores")}>
            Agentes
          </Link>
          <Link className='btn' to={"/weapons"} onClick={() => props.changeTitle("Armas")}>
            Armas
          </Link>
          <Link className='btn' to={"/maps"} onClick={() => props.changeTitle("Mapas")}>
            Mapas
          </Link>
          <Link className='btn' to={"/about"} onClick={() => props.changeTitle("Sobre Nós")}>
            Sobre
          </Link>
        </div>
      </div>
      <div className="content-bottom">
        <h1 className='title-dinamic'>{title}</h1>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    title: state.title.title,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    changeTitle(title) {
      // action creator -> action
      const action = changeTitle(title);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Header);
