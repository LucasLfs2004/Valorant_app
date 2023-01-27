import './Agents.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardAgent from '../template/CardAgent';

const Agents = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        getAgents();
    }, [agents]
    );

    const getAgents = async () => {
        try {
            const query = await axios.get('https://valorant-api.com/v1/agents');

            if (query.status < 300) {
                setAgents(query.data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="agents">
            <h1>Operadores</h1>
            <div className='cards'>
                {
                    agents?.data?.length &&
                    agents.data.map(
                        (item, key) => (
                            <CardAgent key={key}
                            image={item.fullPortrait}
                            bg_image={item.background}
                            name={item.displayName}
                            type={item.role?.displayName}
                            background_color1={item.backgroundGradientColors}>
                            </CardAgent>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Agents;