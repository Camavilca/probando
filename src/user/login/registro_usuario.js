import React, { Component } from 'react'
import axios from 'axios'
import { signup } from '../../actions/constante'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',
            contraseña: '',
            carrera: ''
        }
        this.input = this.input.bind(this)
        this.registro = this.registro.bind(this)
    }
    registro(e) {
        e.preventDefault();
        let nombre = this.state.nombre
        let apellidos = this.state.apellidos
        let correo = this.state.correo
        let carrera = this.state.carrera
        let contraseña = this.state.contraseña
        let data = new FormData()
        data.append('nombre', nombre)
        data.append('apellidos', apellidos)
        data.append('correo', correo)
        data.append('contraseña', contraseña)
        data.append('carrera', carrera)
        // let data = {
        //     nombre,
        //     apellidos,
        //     correo,
        //     carrera, 
        //     contraseña
        // }
        axios.post(signup, data)
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
                <form onSubmit={this.registro}>
                    <input
                        name="nombre"
                        value={this.state.nombre}
                        placeholder="Ingrese nombre"
                        onChange={this.input}
                    />
                    <input
                        name="apellidos"
                        value={this.state.apellidos}
                        placeholder="Ingrese apellidos"
                        onChange={this.input}
                    />
                    <input
                        name="carrera"
                        value={this.state.carrera}
                        placeholder="Ingrese carrera"
                        onChange={this.input}
                    />
                    <input
                        name="correo"
                        value={this.state.correo}
                        placeholder="Ingrese correo"
                        onChange={this.input}
                    />
                    <input
                        name="contraseña"
                        value={this.state.contraseña}
                        placeholder="Ingrese contraseña"
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