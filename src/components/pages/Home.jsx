import './Home.css'
import React from 'react';

const Home = props => (
    <div id="home">
        <div className='poster'>
            <img className='image' src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png" alt="" />
            <img className='background' src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png" alt="" />
        </div>
        <div className='apresentacao'>
            <h1>
                Desafie seus limites
            </h1>
            <p>Ingresse em um jogo extremamente divertido e competitivo</p>
            <p>Ainda não joga?</p>
            <div className='button-border'>
                <a href="https://playvalorant.com/pt-br/?gclid=CjwKCAiAoL6eBhA3EiwAXDom5mNYfI9NtG1N6fvya40ANktgQFc_ZiMDLUCHoscBYrS6LBGVmDuzJRoCiZMQAvD_BwE&gclsrc=aw.ds" target="_blank" rel='noreferrer'>Jogar agora</a>
            </div>
        </div>
    </div>
)

export default Home