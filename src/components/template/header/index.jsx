import * as C from './styles';
import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { changeTitle } from '../../../store/actions/functions';

const Header = props => {
  const { title } = useSelector(state => state.title);
  const dispatch = useDispatch();

  return (
    <C.Header id='header'>
      <div className='content-top'>
        <C.Logo className='logo'>
          <h1>
            <Link to={'/'}>Valorant</Link>
          </h1>
          <img src={'/assets/img/icons8-valorant-48.png'} alt='icon' />
        </C.Logo>
        <C.Title>{title}</C.Title>

        <C.Links className='links'>
          <Link
            className='btn'
            to={'/agents'}
            onClick={() => dispatch(changeTitle(''))}
          >
            Agentes
          </Link>
          <Link
            className='btn'
            to={'/weapons'}
            onClick={() => dispatch(changeTitle('Armas'))}
          >
            Armas
          </Link>
          <Link
            className='btn'
            to={'/maps'}
            onClick={() => dispatch(changeTitle('Mapas'))}
          >
            Mapas
          </Link>
          {/* <Link className='btn' to={"/about"} onClick={() => props.changeTitle("Sobre Nós")}>
            Sobre
          </Link> */}
        </C.Links>
      </div>
    </C.Header>
  );
};

export default Header;
