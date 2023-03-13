import "./Agents.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle } from "../../../store/actions/functions";
import { changeAgentSelected } from "../../../store/actions/functions";
import { connect } from "react-redux";

const Agents = (props) => {

  const { agentSelected } = props

  // const [agentSelected, setAgentSelected] = useState(10);
  const [background, setBackground] = useState([]);
  const [agent, setAgent] = useState({});
  const [agents, setAgents] = useState(1);
  useEffect(() => {
    getAgents();
  }, [agent,agentSelected]);


  function alternateAgent(value) {
    props.changeAgentSelected(agentSelected + value)
    
  }

  const getAgents = async () => {
    try {
      const query = await axios.get(
        "https://valorant-api.com/v1/agents?language=pt-BR"
      );

      if (query.status < 300) {
        setAgent(query.data.data[props.agentSelected]);
        setAgents(query.data.data.length);
        props.changeTitle(agent.displayName);
        setBackground(agent.backgroundGradientColors);
        console.log(background)
        document.body.style.setProperty("--bg-agent-1", `#${background[0]}`);
        document.body.style.setProperty("--bg-agent-2", `#${background[1]}`);
        document.body.style.setProperty("--bg-agent-3", `#${background[2]}`);
        document.body.style.setProperty("--bg-agent-4", `#${background[3]}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id='agent-id'>
      {/* <button onClick={() => {
        console.log("agents", agents, " posicao ", agentSelected)
        if (agentSelected < agents - 1) {
          if (agent.uuid === "117ed9e3-49f3-6512-3ccf-0cada7e3823b") {
            return alternateAgent(2)
          } else alternateAgent(1)
        }

      }
      }>ADD</button>
      <button onClick={() => {
        if (agentSelected > 0) {
          if (agent.uuid === "320b2a48-4d9b-a075-30f1-1f93a9b638fa") {
            return alternateAgent(-2)
          }
          alternateAgent(-1)
        }
      }
      }>SUB</button> */}
      {/* <h1>{agents.displayName}</h1> */}
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
  );
};


function mapStateToProps(state) {
  return {
    title: state.title.title,
    agentSelected: state.title.agentSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(title) {
      // action creator -> action
      const action = changeTitle(title);
      dispatch(action);
    },
    changeAgentSelected(agentSelected) {
      const action = changeAgentSelected(agentSelected);
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agents);
