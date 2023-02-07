import './Agents.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAgent from './CardAgent';
import { connect } from 'react-redux';
import { changeTitle } from '../../../store/actions/title';

const Agents = ({ title }) => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAgents();
  }, [agents]
  );

changeTitle(title = "Agentes")

  const getAgents = async () => {
    try {
      const query = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR');

      if (query.status < 300) {
        setAgents(query.data);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="agents">
      <h1>Operadores</h1>
      <div className='cards'>
        {
          agents?.data?.length && 
          agents.data.map(
            (item, key) => {
              if(item.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9") return (
                <CardAgent key={key}
                  uuid={item.uuid}
                  image={item.fullPortrait}
                  bg_image={item.background}
                  name={item.displayName}
                  type={item.role?.displayName}
                  background_color={item.backgroundGradientColors}>
                </CardAgent>
              )
            }
          )
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    title: state.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) => dispatch(changeTitle(title)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Agents);