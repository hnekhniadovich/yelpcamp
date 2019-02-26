import React from 'react';

import { Jumbotron, Button, Card } from 'react-bootstrap';
import './CampList.css';

const CampList = () => {
    return (
        <div style={{margin: '0 150px'}}>
            <Jumbotron>
                <h1><i class="fas fa-campground"></i>Welcome to YelpCamp!</h1>
                <p>
                View our hand-picked campgrounds from all over the world
                </p>
                <p>
                <Button variant="info">Add New Campground</Button>
                </p>
            </Jumbotron> 

            <Card style={{ width: '24%' }} className="text-center">
                <Card.Img variant="top" src="https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CampList;
