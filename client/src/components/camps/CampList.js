import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCamp } from '../../actions';

import { Jumbotron, Button, Card } from 'react-bootstrap';
import './CampList.css';

class CampList extends Component {

    renderCards() {
        return this.props.camps.map((camp) => {
            return (
                <div className="col-md-3 col-sm-6" style={{margin: "10px 0"}} key={camp.id}>
                    <Card className="text-center">
                        <Card.Img variant="top" src={camp.image} />
                        <Card.Body>
                        <Card.Title>{camp.name}</Card.Title>
                        <Link to={`camps/${camp.id}`} className="btn btn-info"
                            onClick={()=>this.props.selectCamp(camp)}>More info</Link>
                        </Card.Body>
                    </Card>
                </div>
            );
        });
    };

    render() {
        // console.log(this.props.camps);
        return (
            <div style={{margin: '0 150px'}}>
                <Jumbotron>
                    <h1><i className="fas fa-campground"></i>Welcome to YelpCamp!</h1>
                    <p>
                    View our hand-picked campgrounds from all over the world
                    </p>
                    <p>
                    <Button variant="info">Add New Campground</Button>
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
    console.log(state);
    return { camps: state.camps };
}

export default connect(
    mapStateToProps,
    { selectCamp }
)(CampList);
