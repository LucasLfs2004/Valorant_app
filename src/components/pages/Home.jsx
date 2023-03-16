import './Home.css'
import React from 'react';
import { changeTitle } from '../../store/actions/functions';
import { connect } from 'react-redux';

const Home = props => {

props.changeTitle("");

    return (
        <div id="home">
            <div className='poster-home'>
                <img className='image-home' src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png" alt="" />
                <img className='background-home' src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/background.png" alt="" />
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
)(Home);
