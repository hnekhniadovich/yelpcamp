import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import history from '../../history';

class CampDelete extends Component {

  renderActions() {
    this.props.deleteCamp();
    history.push("/camps");
  }

  render() {
    return (
      <div>
          <Modal show={this.props.show} onHide={this.props.close}>
              <Modal.Header closeButton>
                  <Modal.Title>Delete Campground</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this camp?</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={() => this.renderActions()}>
                  Delete
                  </Button>
                  <Button variant="primary" onClick={this.props.close}>
                  Cancel
                  </Button>
              </Modal.Footer>
          </Modal>
      </div>
    );
  } 
};

export default CampDelete;