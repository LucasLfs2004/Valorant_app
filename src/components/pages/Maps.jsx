import './Maps.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Maps = () => {
    const [maps, setMaps] = useState([]);
    useEffect(() => {
        getMaps();
    }, [maps]
    );

    const getMaps = async () => {
        try {
            const query = await axios.get('https://valorant-api.com/v1/maps');

            if (query.status < 300) {
                setMaps(query.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="maps">
            <h1>Maps</h1>
            <img src="" alt="" />
            <div className='cards'>
                {
                    maps?.data?.length &&
                    maps.data.map(
                        (item, key) => (
                            <Link to={`/maps/${item.uuid}`} >
                                <div className='card-map' key={key}>
                                    <img src={item.listViewIcon} alt="" />
                                    <p>{item.displayName}</p>
                                </div>
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Maps;