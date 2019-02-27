import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CampCreate from './camps/CampCreate';
import CampDelete from './camps/CampDelete';
import CampEdit from './camps/CampEdit';
import CampList from './camps/CampList';
import CampShow from './camps/CampShow';
import Header from './Header';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={CampList} />
                    <Route path="/camps/new" exact component={CampCreate} />
                    <Route path="/camps/edit" exact component={CampEdit} />
                    <Route path="/camps/delete" exact component={CampDelete} />
                    <Route path="/camps/show" exact component={CampShow} />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;
