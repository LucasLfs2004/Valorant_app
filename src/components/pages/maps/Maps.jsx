import './Maps.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTitle } from '../../../store/actions/functions';
import { getMaps } from '../../../api/api';

const Maps = props => {
  const [maps, setMaps] = useState([]);
  useEffect(() => {
    loadMaps();
  }, [changeTitle]);

  const loadMaps = async () => {
    try {
      const response = await getMaps();
      setMaps(response);
      console.log(response);
      props.changeTitle('Mapas');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='maps'>
      <div className='content'>
        <div className='cards'>
          {maps?.length &&
            maps.map((item, key) => (
              <Link
                to={`/maps/${item.uuid}`}
                key={key}
                onClick={e => props.changeTitle(item.displayName)}
              >
                <div className='card-map'>
                  <img src={item.listViewIcon} alt='' />
                  <p>{item.displayName}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    title: state.title.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(title) {
      // action creator -> action
      const action = changeTitle(title);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
