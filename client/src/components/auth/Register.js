import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            username: this.state.email,
            password: this.state.password
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                        <h1 className="display-6 text-center mt-5">Sign Up</h1>
                        <p className="lead text-center">Create your YelpCamp account</p>
                        <form noValidate onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                placeholder="Email Address"
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}
                            />

                            <TextFieldGroup
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                            />
                            
                            <input 
                                type="submit" 
                                className="btn btn-info btn-block mt-4" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    
    )
  }
}


export default Register;