import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampCreate from './camps/CampCreate';
import CampDelete from './camps/CampDelete';
import CampEdit from './camps/CampEdit';
import CampList from './camps/CampList';
import CampShow from './camps/CampShow';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/camps" exact component={CampList} />
                    <Route path="/camps/new" exact component={CampCreate} />
                    <Route path="/camps/edit/:id" exact component={CampEdit} />
                    <Route path="/camps/delete" exact component={CampDelete} />
                    <Route path="/camps/:id" exact component={CampShow} />
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
