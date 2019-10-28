import React from 'react';
import { Route } from 'react-router-dom';
import Hoc from "./hoc/hoc";

import UserList from './components/user/UserList';
import UserCreate from './components/user/UserCreate';

const BaseRouter = () => (
    <Hoc>
        <Route exact path = '/' component = { UserList } />
        <Route exact path = '/criar_usuario/' component = { UserCreate } />
    </Hoc>
);

export default BaseRouter;