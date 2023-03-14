import React from "react";
import { connect } from "react-redux";
import { changeTitle, changeAgentSelected, setAgent, setAgents } from "../../../store/actions/functions";
import seta from "../../../assets/img/setaBege.png";


export const Navigation = (props) => {
  const { agentSelected, agent, agents } = props

  function alternateAgent(value) {
    props.changeAgentSelected(agentSelected + value)
  }

  return (
    <div id="button-navigation">
      <button className="btn-navigation" onClick={() => {
        if (agentSelected > 0) {
          if (props.agent.uuid === "320b2a48-4d9b-a075-30f1-1f93a9b638fa") {
            return alternateAgent(-2)
          }
          alternateAgent(-1)
        }
      }
      }>
        <img src={seta} alt="" />
      </button>
      <button className="btn-navigation invert" onClick={() => {
        if (agentSelected < agents - 1) {
          if (agent.uuid === "117ed9e3-49f3-6512-3ccf-0cada7e3823b") {
            return alternateAgent(2)
          } else alternateAgent(1)
        }

      }
      }>
        <img src={seta} alt="" />
      </button>
    </div>
  )
}

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
)(Navigation);
