import "./Agents.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import { connect } from "react-redux";
import Navigation from "./NavigationAgent";
import ImageAgent from "./ImageAgent";
import StatsAgent from "./StatsAgent";
import Slider from "react-slick";

const Agents = (props) => {
  const { title, agentSelected, agent, agents } = props



  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents?language=pt-BR")
      .then((resp) => {
        props.setAgents(resp.data.data);
        props.setAgent(resp.data.data[agentSelected]);
        props.setAgents(resp.data.data.length);
        props.changeTitle(resp.data.data[agentSelected - 1].displayName)
        console.log("termino");
        document.body.style.setProperty("--bg-agent-1", `#${resp.data.data[agentSelected].backgroundGradientColors[0]}`);
        document.body.style.setProperty("--bg-agent-4", `#${resp.data.data[agentSelected].backgroundGradientColors[3]}`);
      })
  }, [agentSelected]);

  return (
    <div id='agent-id'>
      <Navigation />
      <section className='conteudo-agent'>
        <ImageAgent agent={agent} />
        <StatsAgent agent={agent} />
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
