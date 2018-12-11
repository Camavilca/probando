import React, { Component } from 'react';
import axios from 'axios';
import { urlbuscar } from '../actions/constante'
class uploadMyFile extends Component {
    constructor() {
        super();
        this.state = {
            valor: '',
        };
        this.input = this.input.bind(this);
        this.buscar = this.buscar.bind(this);
    }
    buscar(e) {
        e.preventDefault();
        let valor = this.state.valor
        axios.get(urlbuscar + `${valor}`)
        .then(response => {
            console.log(response);
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
            <form onSubmit={this.buscar}>
                <input
                    type="text"
                    name="valor"
                    className="form-control"
                    value={this.state.valor}
                    onChange={this.input}
                    placeholder="Ingrese el titulo del archivo"
                    required
                />
                <button
                    className="my-5 align-text-bottom"
                    color="primary">
                    Guardar
                </button>
            </form>


        )
    }
}
export default uploadMyFile;
