import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Weapon from '../pages/Weapon';
import Maps from '../pages/Maps';
import Agents from '../pages/Agents';
import About from '../pages/About'
import NotFound from '../pages/NotFound';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/agents" element={<Agents />} />
            <Route exact path="/weapon" element={<Weapon />} />
            <Route exact path="/maps" element={<Maps />} />
            <Route exact path="/about" element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content;