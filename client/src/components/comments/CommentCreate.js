import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../actions';
import CommentForm from './CommentForm';

class CommentCreate extends Component {

    onSubmit = (formValues) => {
        const id = this.props.match.params.id;
        this.props.createComment(id, formValues);
    }

    render() {
        return (
            <CommentForm 
                title='Create'
                onSubmit={this.onSubmit} />
        )
    }
}

export default connect(null, { createComment })(CommentCreate);