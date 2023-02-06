import './AgentSelected.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgentSelected = () => {
  const uri = window.location.pathname.split('/').slice(2);
  const uuid = uri[0];

  const [agent, setAgent] = useState([]);
  const [background, setBackground] = useState([]);
  useEffect(() => {
    getAgent();
  }, [agent]
  );

  const getAgent = async () => {
    try {
      const query = await axios.get(`https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`);

      if (query.status < 300) {
        setAgent(query.data.data);
        setBackground(agent.backgroundGradientColors);
        console.log(background[0]);
        document.body.style.setProperty("--bg-agent-1", `#${background[0]}`);
        document.body.style.setProperty("--bg-agent-2", `#${background[1]}`);
        document.body.style.setProperty("--bg-agent-3", `#${background[2]}`);
        document.body.style.setProperty("--bg-agent-4", `#${background[3]}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id='agent-id'>
      <h1>{agent.displayName}</h1>
      <section className='conteudo-agent'>
        <div className='poster'>
          <div className="category-inclined">
            <img src={agent.role?.displayIcon} alt="" />
            <h2>{agent.role?.displayName}</h2>
          </div>
          <img className='full' src={agent.fullPortrait} alt="" />
          <img className='bg' src={agent.background} alt="" />
        </div>
        <div className='infos'>
          <div className="description">
            <p className='description'>{agent.description}</p>
          </div>
          <div className="display-agent">
            <div className="card-agent">
              <h2 className='title-agent'>Características</h2>
              <p>{agent.role?.description}</p>
            </div>
            {
              agent.characterTags ?
                <div className="card-agent">
                  <h3 className='title-agent'>Atributos</h3>
                  {
                    agent.characterTags &&
                    agent.characterTags.map(
                      (item, key) => (
                        <ul>
                          <li key={key}>{item}</li>
                        </ul>
                      )
                    )
                  }
                </div> : <></>
            }
          </div>

          <div className="display-agent">
            {
              agent.abilities &&
              agent.abilities.map(
                (item, key) =>
                (<div className='card-agent abilities' key={key}>
                  <div className='title-agent'>
                    <img src={item.displayIcon} alt="" />
                    <h2>{item.displayName}</h2>
                    {/* <h2>{item.slot}</h2> */}
                  </div>
                  <p>{item.description}</p>
                </div>))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgentSelected;