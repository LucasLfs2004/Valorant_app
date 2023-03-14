import '../../main/App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Agents from '../pages/agents/Agents';
//import AgentSelected from '../pages/agents/AgentSelected';
import Weapon from '../pages/weapons/Weapons';
import WeaponSelected from '../pages/weapons/WeaponSelected';
import Maps from '../pages/maps/Maps';
import MapsSelected from '../pages/maps/MapSelected'
import About from '../pages/About'
import NotFound from '../pages/NotFound';
import PageAgents from '../pages/agents/PageAgents';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/agents" element={<Agents />} />
            {/* <Route exact path="/agents/:uuid"  element={<AgentSelected />} /> */}
            <Route exact path="/weapons" element={<Weapon />} />
            <Route exact path="/weapons/:uuid" element={<WeaponSelected />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/maps/:uuid" element={<MapsSelected />} />
            <Route exact path="/about" element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content;