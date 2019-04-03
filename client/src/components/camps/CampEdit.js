import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCamp, editCamp } from  '../../actions/campActions';
import CampForm from './CampForm';

class CampEdit extends Component {

    componentDidMount() {
        this.props.fetchCamp(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editCamp(this.props.match.params.id, formValues);
    }

    render() {
        if(!this.props.camp) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <CampForm 
                    title='Edit'
                    initialValues={_.pick(this.props.camp, 'name', 'image', 'price', 'description')}
                    onSubmit={this.onSubmit} />
            </div>
            )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { camp: state.camps[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCamp, editCamp })(CampEdit);