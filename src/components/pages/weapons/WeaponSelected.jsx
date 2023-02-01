import './WeaponSelected.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeaponSelected = () => {
    const uri = window.location.pathname.split('/').slice(2);
    const uuid = uri[0];

    const [weapon, setWeapon] = useState([]);
    useEffect(() => {
        getWeaponId();
    }, [weapon]
    );

    const getWeaponId = async () => {
        try {
            const query = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}`);

            if (query.status < 300) {
                    setWeapon(query.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className='weapon-id'>
            <h1>{weapon.displayName}</h1>
            <img src={weapon.displayIcon} alt="" />
        </div>
    )
}

export default WeaponSelected;