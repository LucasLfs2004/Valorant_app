import "./Agents.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import { connect } from "react-redux";
import Navigation from "./NavigationAgent";

const Agents = (props) => {

  const { agentSelected, agent, agents } = props

  // const [agentSelected, setAgentSelected] = useState(10);
  const [background, setBackground] = useState([]);
  // const [agent, setAgent] = useState({});
  // const [agents, setAgents] = useState(1);
  useEffect(() => {
    getAgents();
  }, [agent,agentSelected]);



  const getAgents = async () => {
    try {
      const query = await axios.get(
        "https://valorant-api.com/v1/agents?language=pt-BR"
      );

      if (query.status < 300) {
        props.setAgent(query.data.data[props.agentSelected]);
        props.setAgents(query.data.data.length);
        props.changeTitle(agent.displayName);
        setBackground(agent.backgroundGradientColors);
        //console.log(background)
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
      <Navigation />
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
    agentSelected: state.title.agentSelected,
    agent: state.title.agent,
    agents: state.title.agents,
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
    },
    setAgent(agent) {
      const action = setAgent(agent);
      dispatch(action);
    },
    setAgents(agents) {
      const action = setAgents(agents);
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agents);
