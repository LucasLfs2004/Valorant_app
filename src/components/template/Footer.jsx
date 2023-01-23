import './Footer.css'
import React from 'react'
import iconGithub from '../../assets/img/github.png'
import iconLinkedin from '../../assets/img/linkedin.png'


export default props => {
    return (
        <footer id="footer">
            <div className='icons'>
                <a href="https://github.com/LucasLfs2004" target="_blank">
                    <img src={iconGithub} alt="git" />
                </a>
                <a href="https://www.linkedin.com/in/lucas-sil-va/" target="_blank">
                    <img src={iconLinkedin} alt="linkedin" />
                </a>

            </div>

            <div className='footer-text'>
                <p>
                    Desenvolvido por Lucas Ferreira Silva
                </p>
            </div>
        </footer>
    )
}