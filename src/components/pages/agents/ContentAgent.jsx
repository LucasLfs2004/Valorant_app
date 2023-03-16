import "./ContentAgent.css";

import React from "react";
import { changeAgentSelected } from "../../../store/actions/functions";
import { connect } from "react-redux";
import Agents from "./Agents";


const ContentAgent = (props) => {

  const { agent } = props

  return (
    <div id="agent-content">
      <div className="poster" >
        <div className="category-agent">
          <img src={agent.role?.displayIcon} alt="" />
          <h2>{agent.role?.displayName}</h2>
        </div>
        <div className="image-agent">
          <img className='full' src={agent.fullPortrait} alt="" />
          <img className='bg' src={agent.background} alt="" />
        </div>
      </div>

      <div className='infos'>
        <div className="description">
          <p>{agent.description}</p>
        </div>
        <div className="display-agent">
          <div className=" card-agent">
            <h2 className='title-agent'>Características</h2>
            <p>{agent.role?.description}</p>
          </div>
          {
            agent.characterTags ?
              <div className="card-agent">
                <h2 className='title-agent'>Atributos</h2>
                {
                  agent.characterTags &&
                  agent.characterTags.map(
                    (item, key) => (
                        <li className="list" key={`list-${key}`}>{item}</li>
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
              (<div className='card-agent abilities' key={`card-abilities-${key}`}>
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
    </div>
  )
}
export default ContentAgent