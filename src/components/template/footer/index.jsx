import React from 'react';
import * as C from './styles';

const Footer = props => {
  return (
    <C.Footer id='footer'>
      <div className='icons'>
        <a href='https://github.com/LucasLfs2004' target='_blank'>
          <img src={'/assets/img/github.png'} alt='git' />
        </a>
        <a href='https://www.linkedin.com/in/lucas-sil-va/' target='_blank'>
          <img src={'/assets/img/linkedin.png'} alt='linkedin' />
        </a>
      </div>

      <div className='footer-text'>
        <p>Desenvolvido por Lucas Ferreira Silva</p>
      </div>
    </C.Footer>
  );
};

export default Footer;
