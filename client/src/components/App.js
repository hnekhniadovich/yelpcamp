import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';
import CampCreate from './camps/CampCreate';
import CampEdit from './camps/CampEdit';
import CampList from './camps/CampList';
import CampShow from './camps/CampShow';
import Header from './Header';
import LandingPage from './LandingPage';
import history from '../history';
import CommentCreate from './comments/CommentCreate';
import Login from './auth/Login';
import Register from './auth/Register';


const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <PrivateRoute path="/camps" exact component={CampList} />
                        <PrivateRoute path="/camps/new" exact component={CampCreate} />
                        <PrivateRoute path="/camps/edit/:id" exact component={CampEdit} />
                        <PrivateRoute path="/camps/:id" exact component={CampShow} />
                        <PrivateRoute path="/camps/:id/comments/new" exact component={CommentCreate} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;
