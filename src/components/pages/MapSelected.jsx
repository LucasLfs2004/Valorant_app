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
            <h1>
                {map.displayName}
            </h1>
            <img src={map.splash} alt="" />
            <img src={map.displayIcon} alt="" />
            <h2>Callouts</h2>
            <div className="card-localidade">
                {map?.callouts &&
                    map.callouts.map(
                        (item, key) => (
                            <div key={key} className='callouts'>
                                <p>Local: {item.regionName}</p>
                                <p>Região: {item.superRegionName}</p>
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}

export default MapSelected;