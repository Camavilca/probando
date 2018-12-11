import React, { Component } from 'react'
import axios from 'axios'
import { login } from '../../actions/constante'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.input = this.input.bind(this)
        this.sesion = this.sesion.bind(this)
    }
    
    sesion(e) {
        e.preventDefault();
        let username = this.state.username
        let password = this.state.password
        const headers = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
        });
        let data = new FormData();
        data.append('username', username);
        data.append('password', password);
        data.append('header',headers)
        
        // {
        //     "username":"perro@gmail",
        //       "password":"123456"
        // }
        axios.post(login, data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    input(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.sesion}>
                    <input
                        name="username"
                        value={this.state.username}
                        placeholder="Ingrese usuario"
                        onChange={this.input}
                    />

                    <input
                        name="password"
                        value={this.state.password}
                        placeholder="Ingrese constraseña"
                        onChange={this.input}
                    />
                    <button>
                        aceptar
                    </button>
                </form>
            </div>
        )
    }
}
export default Login