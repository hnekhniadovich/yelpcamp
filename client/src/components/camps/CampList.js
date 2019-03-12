import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCamps } from '../../actions';

import { Jumbotron, Card } from 'react-bootstrap';
import './CampList.css';

class CampList extends Component {

    componentDidMount() {
        this.props.fetchCamps();
    }

    renderCards() {
        console.log(this.props.camps);
        return this.props.camps.map((camp) => {
            return (
                <div className="col-md-3 col-sm-6" style={{margin: "10px 0"}} key={camp._id}>
                    <Card className="text-center">
                        <Card.Img variant="top" src={camp.image} />
                        <Card.Body>
                        <Card.Title>{camp.name}</Card.Title>
                        <Link to={`camps/${camp._id}`} className="btn btn-info">More info</Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
    };

    render() {
        
        return (
            <div className="main">
                <Jumbotron>
                    <h1 className="header"><i className="fas fa-campground"></i>Welcome to YelpCamp!</h1>
                    <p>
                    View our hand-picked campgrounds from all over the world
                    </p>
                    <p>
                    <Link to={'camps/new'} className="btn btn-info">Add New Campground</Link>
                    </p>
                </Jumbotron> 

                <div className="row" style={{display: "flex", flexWrap: "wrap"}}>
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { camps: Object.values(state.camps) };
}

export default connect(
    mapStateToProps,
    { fetchCamps }
)(CampList);
