import "./Agents.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import { connect } from "react-redux";
import Navigation from "./NavigationAgent";
import ImageAgent from "./ImageAgent";
import StatsAgent from "./StatsAgent";

const Agents = (props) => {
  const { agentSelected, agent, agents } = props

  const [background, setBackground] = useState([]);
  useEffect(() => {
    getAgents();
  }, [agent, agentSelected]);

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
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id='agent-id'>
      <Navigation />
      <section className='conteudo-agent'>
        <ImageAgent />
        <StatsAgent />
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
