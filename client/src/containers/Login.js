import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {
    Form,
    FormGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import '../styles/Login.css';

import { connect } from 'react-redux';
import { loginUser } from '../service/actions/userAction';
import { removeError } from '../service/actions/errorAction';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillReceiveProps(newProps){
        if(newProps.errorMessage.err){
            alert(newProps.errorMessage.err)
            this.props.removeError()
        }
        if(Object.keys(newProps.auth).length > 0){
            this.props.history.push('/')
        }
    }

    handleInput(e){
        let name = e.target.id
        let val = e.target.value
        this.setState({[name]: val})
    }

    submitForm(e){
        e.preventDefault();
        this.props.loginUser(this.state)
    }

    render(){
        return (
            <Form
                onSubmit={this.submitForm}
                className="form-signin"
            >
                <h2>Log In</h2>
                <FormGroup controlId="formHorizontalEmail">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter email"
                        onChange={this.handleInput}
                    />
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter password"
                        onChange={this.handleInput}
                    />
                </FormGroup>
                <FormGroup className="center-button">
                    <Button type="submit">Login</Button>
                </FormGroup>
                <Link to="/register" className="login-btn">Sign Up</Link>
            </Form>
        )
    }
}

const reduxProps = state => {
    return ({
        auth: state.user.authUser,
        errorMessage: state.errors
    })
};

export default connect(reduxProps, { loginUser, removeError })(Login);