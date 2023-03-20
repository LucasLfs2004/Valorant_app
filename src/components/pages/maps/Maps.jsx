import './Maps.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeTitle } from '../../../store/actions/functions';
import Slider from 'react-slick';

const Maps = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }



  const uri = window.location.pathname.split('/').slice(2);
  const uuid = uri[0];

  const [maps, setMaps] = useState([]);
  useEffect(() => {
    getMap();
    console.log("mapa")
  }, [changeTitle]
  );

  const getMap = async () => {
    try {
      const query = await axios.get(`https://valorant-api.com/v1/maps?language=pt-BR`);

      if (query.status < 300) {
        setMaps(query.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Slider id="map-slider" {...settings}>
      {
        maps?.length && maps.map((map, index) => {

          return (
            <div className='map-id' key={index}>
              <img className='bg-map' src={map.splash} alt="" />
              <div className='conteudo'>
                <h1>
                  {map.displayName}
                </h1>
                <div className='display'>
                  <img className='map-icon' src={map.displayIcon} alt="" />
                  <div className='card-coordinates'>
                    <h2>Coordenadas</h2>
                    <p>{map.coordinates}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </Slider>
  )

}


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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps);