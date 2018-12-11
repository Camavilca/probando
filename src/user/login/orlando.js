import React, { Component } from 'react'
import axios from 'axios'
import { login } from '../../actions/constante'
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.registro = this.inputChange.bind(this)
    }
    inputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }
    registro(e) {
        e.preventDefault();
        let username = this.state.username
        let password = this.state.password
        let data = {
            username,
            password
        }
        axios.post(login, data).
            then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.registro}>
                    <input type="text" name="username" value={this.state.username} onChange={this.inputChange} />
                    <input type="text" name="password" value={this.state.password} onChange={this.inputChange} />
                    <button type="submit">aceptar</button>
                </form>
            </div>
        )
    }
}
export default Login