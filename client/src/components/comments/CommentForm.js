import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

class CommentForm extends Component {

    renderInput = ({ input, placeholder, type }) => {
        return (
            <div className="form-group">
                <input className="form-control" autoComplete="off"
                    {...input} 
                    type={type} 
                    placeholder={placeholder}/>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div className="container" style={{marginTop: '60px'}}>
                <h1 style={{textAlign: 'center', fontWeight: 600}}>{this.props.title} Comment</h1>
                <div style={{width: '35%', margin: '40px auto'}}>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field 
                            name="text" 
                            component={this.renderInput} 
                            type="text"
                            placeholder="text"/>
                        <Button variant="primary" type="submit" style={{width: '100%'}}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'commentForm',
})(CommentForm);



