import './MapSelected.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MapSelected = () => {
    const uri = window.location.pathname.split('/').slice(2);
    const uuid = uri[0];

    const [map, setMap] = useState([]);
    useEffect(() => {
        getMap();
    }, [map]
    );

    const getMap = async () => {
        try {
            const query = await axios.get(`https://valorant-api.com/v1/maps/${uuid}?language=pt-BR`);

            if (query.status < 300) {
                setMap(query.data.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='map-id'>
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

export default MapSelected;