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
import { addUser } from '../service/actions/userAction';
import { removeError } from '../service/actions/errorAction';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    
    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
          };
        console.log(newUser);

        this.props.addUser(this.state)
    };
    

    render(){
        return (
            <Form
                onSubmit={this.onSubmit}
                className="form-signin"
            >
                <h2>Sign Up</h2>
                <FormGroup controlId="name">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter name"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup controlId="email">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter email"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter password"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup controlId="password2">
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Confirm password"
                        onChange={this.onChange}
                    />
                </FormGroup>
                <FormGroup className="center-button">
                    <Button type="submit">Sign Up</Button>
                </FormGroup>
                <Link to="/login" className="login-btn">Login</Link>
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

export default connect(reduxProps, { addUser, removeError })(Register);