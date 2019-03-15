import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCamp } from '../../actions';
import CampForm from './CampForm';

class CampCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createCamp(formValues);
    }

    render() {
        return (
            <CampForm 
                title='Create'
                onSubmit={this.onSubmit} />
        )
    }
}

export default connect(null, { createCamp })(CampCreate);

