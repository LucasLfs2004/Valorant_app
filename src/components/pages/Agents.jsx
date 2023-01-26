import './Agents.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Agents = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        getAgents();
    }, [agents]
    );

    const getAgents = async () => {
        try {
            const query = await axios.get('https://valorant-api.com/v1/agents')

            if (query.status < 300) {
                setAgents(query.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="agents">Agentes
            <div>
                {
                    agents?.data?.length &&
                    agents.data.map(
                        (item, key) => (
                            <div className='cardAgent' key={key}>
                                <img className='image' src={item.fullPortrait} alt="" />
                                <img className='bg-image' src={item.background} alt="" />
                                <p>{item.displayName}</p>
                                <p>{item.role?.displayName}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Agents;