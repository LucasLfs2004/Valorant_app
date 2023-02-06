import './Weapons.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    const [category, setCategory] = useState(null);
    useEffect(() => {
        getWeaponsCategory();
    }, [category]
    );

    const getWeaponsCategory = async () => {
        try {
            const query = await axios.get('https://valorant-api.com/v1/weapons');

            if (query.status < 300) {
                if (category != null && category != "") {
                    query.data.data = query.data.data.filter(
                        listCategory => {
                            if (listCategory.category === category)
                                return listCategory
                        }
                    );
                    console.log(query.data)
                    setWeapons(query.data);
                    //setWeapons(query.data);
                } else {
                    setWeapons(query.data);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="weapons">
            <h1>Weapons</h1>

            <div className=''>
                <select className='filtro' onChange={e => setCategory(e.target.value)} name="select">
                    <option onChange value="" selected>Filtrar</option>
                    <option value="EEquippableCategory::Heavy">Metralhadora</option>
                    <option value="EEquippableCategory::SMG">Sub-metralhadora</option>
                    <option value="EEquippableCategory::Rifle">Rifle de assalto</option>
                    <option value="EEquippableCategory::Sniper">Rifle de precisão</option>
                    <option value="EEquippableCategory::Shotgun">Escopeta</option>
                    <option value="EEquippableCategory::Sidearm">Arma secundária</option>
                    <option value="EEquippableCategory::Melee">Arma branca</option>
                </select>
            </div>
            <div className='cards-weapon'>
                {
                    weapons?.data?.length &&
                    weapons.data.map(
                        (item, key) => (
                            <Link key={key} to={`/weapons/${item.uuid}`}>
                                <div className='card-weapon'>
                                    <img src={item.displayIcon} alt="" />
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

export default Weapons;