import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.registerUser(newUser);

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
                        <form noValidate onSubmit={this.onSubmit} >
                            <TextFieldGroup
                                placeholder="Username"
                                name="username"
                                type="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                error={errors.username}
                                autoComplete="new-username"
                            />

                            <TextFieldGroup
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                error={errors.password}
                                autoComplete="new-password"
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

const mapStateToProps = (state) => ({
    auth: state.auths,
    errors: state.errors
})


export default connect(mapStateToProps, { registerUser })(Register);