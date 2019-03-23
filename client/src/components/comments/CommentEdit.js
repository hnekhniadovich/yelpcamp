
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editComment } from '../../actions';
import CommentForm from './CommentForm';

class CommentEdit extends Component {

    onSubmit = (formValues) => {
        this.props.editComment(this.props.match.params.id, this.props.match.params.comment_id, formValues);
    }

    render() {

        const comment_id = this.props.match.params.comment_id;
        let data = _.mapKeys(this.props.camp.comments, '_id');

        if(!data[comment_id]) {
            return <div>Loading...</div>
        }
  
        return (
            <div>
                <CommentForm 
                    title='Edit'
                    initialValues={_.pick(data[comment_id], 'text', 'author')}
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { camp: state.camps[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { editComment })(CommentEdit)