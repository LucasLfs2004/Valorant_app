import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </main>
)

export default Content;