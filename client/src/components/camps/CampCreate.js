import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCamp } from '../../actions/campActions';
import CampForm from './CampForm';

class CampCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createCamp(formValues);
    }

    render() {
        return (
            <CampForm 
                title='Create a New'
                onSubmit={this.onSubmit} />
        )
    }
}

export default connect(null, { createCamp })(CampCreate);

