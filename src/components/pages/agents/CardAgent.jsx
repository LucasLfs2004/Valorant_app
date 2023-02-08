import './CardAgent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CardAgent = ({ uuid, image, bg_image, name, type, background_color }) => {
  const styles = {
    backgrounCard: {
      background: `linear-gradient(90deg, #${background_color[0]} 0%, #${background_color[1]} 35%, #${background_color[2]} 100%)`
    }
  }
  return (
    <Link to={`/agents/${uuid}`} >
      <div id='cardAgent' className='card' style={styles.backgrounCard}>
        <div id='visual-card'>
          <img className='img-card' src={image} alt="" />
          <img className='bg-img-card' src={bg_image} alt="" />
        </div>
        <div className="name">
          <p>{name}</p>
          <p>{type}</p>
        </div>
      </div >
    </Link>
  )
}
export default CardAgent;