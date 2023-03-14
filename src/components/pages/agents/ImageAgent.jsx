import "./ImageAgent.css";
import React from "react";
import { connect } from "react-redux";

const ImageAgent = (props) => {
  const { agent } = props;

  return (
    <div className="poster">
      <div className="category-agent">
      <img src={agent.role?.displayIcon} alt="" />
      <h2>{agent.role?.displayName}</h2>
      </div>
      <div className="image-agent">
        <img className='full' src={agent.fullPortrait} alt="" />
        <img className='bg' src={agent.background} alt="" />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    agent: state.title.agent,
  };
}

export default connect(mapStateToProps)(ImageAgent)