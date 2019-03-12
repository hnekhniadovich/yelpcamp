import React from 'react';

import { Form, Button } from 'react-bootstrap';

const CampCreate = () => {
    return (
        <div className="container" style={{marginTop: '60px'}}>
                <h1 style={{textAlign: 'center', fontWeight: 600}}>Create a New Campground</h1>
                <div style={{width: '35%', margin: '40px auto'}}>
                    <Form>
                        <Form.Group controlId="formGridName">
                            <Form.Control placeholder="name" type="text" />
                        </Form.Group>
                        <Form.Group controlId="formGridPrice">
                            <Form.Control placeholder="price" />
                        </Form.Group>
                        <Form.Group controlId="formGridImageUrl">
                            <Form.Control placeholder="image url" />
                        </Form.Group>
                        <Form.Group controlId="formGridDescription">
                            <Form.Control placeholder="description" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width: '100%'}}>Submit</Button>
                    </Form>
                </div>
            </div>
    
    )
}

export default CampCreate;