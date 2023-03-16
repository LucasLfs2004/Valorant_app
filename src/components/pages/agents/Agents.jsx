import "./Agents.css";
import 'slick-carousel/slick/slick.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import { connect } from "react-redux";
import ContentAgent from "./ContentAgent";
import Slider from "react-slick";

const Agents = (props) => {
  const { title, agentSelected, agent, agents } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents?language=pt-BR")
      .then((resp) => {
        props.setAgents(resp.data.data);
        //props.setAgent(resp.data.data[agentSelected]);
        //props.setAgents(resp.data.data.length);
        props.changeTitle("Operadores")
        console.log("termino");
        document.body.style.setProperty("--bg-agent-1", `#${resp.data.data[agentSelected].backgroundGradientColors[0]}`);
        document.body.style.setProperty("--bg-agent-4", `#${resp.data.data[agentSelected].backgroundGradientColors[3]}`);
      })
  }, [agentSelected]);

  return (
    <div id='agent-id'>
      <Slider className="slider-agent" {...settings}>
        {
          agents?.length &&
          agents.map(
            (agent, index) => {
              {
                if (agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
                  let backImg = `.item-agente-list-${index}`;
                  return (
                    <>
                      <style type="text/css">
                        {backImg} {
                          `{background-image: linear-gradient(to right, #${agent.backgroundGradientColors[0]} 0%, #${agent.backgroundGradientColors[3]} 100%)!important}`
                        }
                      </style>
                      <div className={`item-agente-list-${index}`} key={`item-agente-list-${index}`}>
                        <h1 className="title-page">{agent.displayName}</h1>
                        <ContentAgent agent={agent} backImg={backImg} />
                      </div>
                    </>)
                }
              }

            }
          )}
      </Slider>
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

