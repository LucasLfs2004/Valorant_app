import "./Agents.css";
import 'slick-carousel/slick/slick.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import { connect, useDispatch } from "react-redux";
import ContentAgent from "./ContentAgent";
import Slider from "react-slick";
import { getAgents } from "../../../api/api";

const Agents = (props) => {
  const dispatch = useDispatch();
  const { title, agentSelected, agent, agents } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const loadAgents = async () => {
  const agentsData = await getAgents();
  console.log('agents vindo da api: ', agentsData)
  dispatch(setAgents(agentsData))
  // document.body.style.setProperty("--bg-agent-1", `#${agentsData[agentSelected].backgroundGradientColors[0]}`);
  // document.body.style.setProperty("--bg-agent-4", `#${agentsData[agentSelected].backgroundGradientColors[3]}`);
}

useEffect(() => {

    dispatch(changeTitle("Operadores"))
    loadAgents()
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

