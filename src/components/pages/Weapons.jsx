import './Weapons.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        getWeapons();
    }, [weapons]
    );

    const getWeapons = async () => {
        try {
            const query = await axios.get('https://valorant-api.com/v1/weapons');

            if (query.status < 300) {
                setWeapons(query.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="agents">
            <h1>Weapons</h1>
            <div className='cards'>
                {
                    weapons?.data?.length &&
                    weapons.data.map(
                        (item, key) => (
                            <div key={key}>
                                <img src={item.displayIcon} alt="" />
                                <p>{item.displayName}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Weapons;