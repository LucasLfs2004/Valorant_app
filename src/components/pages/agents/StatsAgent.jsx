import './StatsAgent.css'
import React from "react";
import { connect } from "react-redux";

const StatsAgents = (props) => {
  const { agent } = props;

  return (
    <div className='infos'>
          <div className="description">
            <p>{agent.description}</p>
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
  )
}

function mapStateToProps(state) {
  return {
    agent: state.title.agent,
  };
}

export default connect (mapStateToProps)(StatsAgents);