import './Home.css';
import React, { useEffect } from 'react';
import { changeTitle } from '../../../store/actions/functions';
import { connect, useDispatch } from 'react-redux';
import * as C from './styles';
import { setAgents } from '../../../store/actions/functions';

const Home = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle(''));
  }, []);

  return (
    <C.Home>
      <C.AgentBanner>
        <img
          src='https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png'
          alt=''
        />
      </C.AgentBanner>
      <div className='apresentacao'>
        <h1>Desafie seus limites</h1>
        <p>Ingresse em um jogo extremamente divertido e competitivo</p>
        <p>Ainda não joga?</p>
        <div className='button-border'>
          <a
            href='https://playvalorant.com/pt-br/?gclid=CjwKCAiAoL6eBhA3EiwAXDom5mNYfI9NtG1N6fvya40ANktgQFc_ZiMDLUCHoscBYrS6LBGVmDuzJRoCiZMQAvD_BwE&gclsrc=aw.ds'
            target='_blank'
            rel='noreferrer'
          >
            Jogar agora
          </a>
        </div>
      </div>
    </C.Home>
  );
};

export default Home;
