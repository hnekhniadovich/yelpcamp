import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import history from '../../history';

class Login extends Component {
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

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            history.push('/camps');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            history.push('/camps');
        }
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }    
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                        <h1 className="display-6 text-center mt-5">Log In</h1>
                        <p className="lead text-center">Sign in to your YelpCamp account</p>
                        <form noValidate onSubmit={this.onSubmit}>
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
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);