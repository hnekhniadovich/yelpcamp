import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

class CampForm extends Component {

    renderError({ error, touched }) {
        if(touched && error) {
            return (
                <div className="alert alert-danger" role="alert">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, placeholder, type, meta }) => {
        return (
            <div className="form-group">
                <input className="form-control" autoComplete="off"
                    {...input} 
                    type={type} 
                    placeholder={placeholder}/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div className="container" style={{marginTop: '60px'}}>
                <h1 style={{textAlign: 'center', fontWeight: 600}}>{this.props.title} Campground</h1>
                <div style={{width: '35%', margin: '40px auto'}}>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field 
                            name="name" 
                            component={this.renderInput} 
                            type="text"
                            placeholder="name"/>
                        <Field 
                            name="image" 
                            component={this.renderInput} 
                            type="text"
                            placeholder="image url"/>
                        <Field 
                            name="description" 
                            component={this.renderInput} 
                            type="text"
                            placeholder="description"/>
                        <Field 
                            name="price" 
                            component={this.renderInput} 
                            type="text"
                            placeholder="price"/>
                        <Button variant="primary" type="submit" style={{width: '100%'}}>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'You must enter a name';
    }

    if(!formValues.imageUrl) {
        errors.imageUrl = 'You must enter an image URL';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description';
    }

    if(!formValues.price) {
        errors.price = 'You must enter a price';
    } else if(isNaN(Number(formValues.price))) {
        errors.price = 'Must be a number';
    }

    return errors;
}

export default reduxForm({
    form: 'campForm',
    validate
})(CampForm);



