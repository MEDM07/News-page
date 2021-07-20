import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const url = 'http://localhost:8081/api/v1/partners/users/login'

        const data = {
            email: this.email
        };

        const token = Buffer.from(`${this.email}:${this.password}`, 'utf8').toString('base64')

        axios.post(url, data, {

            headers: {
              'Auth': `Basic ${token}`
            },
          })
          .then(
            res => {
                console.log(res)
            }
        )
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={e => this.email = e.target.value} />
                    
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange={e => this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
