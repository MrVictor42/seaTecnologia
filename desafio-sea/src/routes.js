import React from 'react';
import { Route } from 'react-router-dom';
import Hoc from "./hoc/hoc";

import Homepage from './components/homepage/Homepage';

const BaseRouter = () => (
    <Hoc>
        <Route exact path = '/' component = { Homepage } />
    </Hoc>
);

export default BaseRouter;