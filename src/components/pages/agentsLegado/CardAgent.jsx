import './CardAgent.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTitle } from '../../../store/actions/title';

const CardAgent = ({ uuid, image, bg_image, name, type, background_color, key}) => {
  const styles = {
    backgrounCard: {
      background: `linear-gradient(90deg, #${background_color[0]} 0%, #${background_color[1]} 35%, #${background_color[2]} 100%)`
    }
  }
  return (
    <Link key={key} to={`/agents/${uuid}`}>
      <div id='card-agent' className='card' style={styles.backgrounCard}>
        <div id='visual-card'>
          <img className='img-card' src={image} alt="" />
          <img className='bg-img-card' src={bg_image} alt="" />
        </div>
        <div className="name-category">
          <p className='name'>{name}</p>
          <p className='category'>{type}</p>
        </div>
      </div >
    </Link>
  )
}


function mapStateToProps(state) {
  return {
    title: state.title.title,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    changeTitle(title) {
      // action creator -> action
      const action = changeTitle(title);
      dispatch(action);
    },
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProp
)(CardAgent);