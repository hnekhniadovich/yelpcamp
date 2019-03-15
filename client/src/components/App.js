import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CampCreate from './camps/CampCreate';
import CampDelete from './camps/CampDelete';
import CampEdit from './camps/CampEdit';
import CampList from './camps/CampList';
import CampShow from './camps/CampShow';
import Header from './Header';
// import Footer from './Footer';
import LandingPage from './LandingPage';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/camps" exact component={CampList} />
                        <Route path="/camps/new" exact component={CampCreate} />
                        <Route path="/camps/edit/:id" exact component={CampEdit} />
                        <Route path="/camps/delete/:id" exact component={CampDelete} />
                        <Route path="/camps/:id" exact component={CampShow} />
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </Router>
        </div>
    )
};

export default App;
