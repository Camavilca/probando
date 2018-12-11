import React, { Component } from 'react';
import axios from 'axios';
import { urlbuscar } from '../actions/constante'
import Navegador from '../views/Nav'
import DocsPage from '../docs/DocsPage'
import {
    Col,
    FormInline,
    Button,
    Fa
} from "mdbreact";
class uploadMyFile extends Component {
    constructor() {
        super();
        this.state = {
            valor: '',
            datos: []
        };
        this.input = this.input.bind(this);
        this.buscar = this.buscar.bind(this);
    }
    buscar(e) {
        e.preventDefault();
        let valor = this.state.valor
        axios.get(urlbuscar + `${valor}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    datos: res.data
                });
                console.log("--------------");
                console.log(this.state.datos);
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
                <Navegador />
                <div style={{ marginLeft: '15rem' }}>
                    <Col >
                        <FormInline className="mb-4" onSubmit={this.buscar}>
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                name="valor"
                                required
                                value={this.state.valor}
                                onChange={this.input}
                                placeholder="Buscar Archivo"
                                aria-label="Search"
                            />
                            <Button
                                outline
                                color="warning"
                                rounded
                                size="sm"
                                type="submit"
                                className="mr-auto"
                            >
                                <Fa
                                    icon="search"
                                    size="2x"
                                >
                                </Fa>
                            </Button>
                        </FormInline>
                    </Col>
                </div>
                {this.state.datos.map(dato => {
                    return (
                            <div style={{ marginLeft: '15rem' }} key={dato.id}>
                                <section className="text-center">
                                    <Col>
                                        <DocsPage
                                            titulo={dato.titulo}
                                            descripcion={dato.descripcion}
                                            archivo={dato.archivo}
                                            id={dato.id}
                                            fechaCreacion={dato.fechaCreacion}
                                        />
                                    </Col>
                                </section>
                            </div>
                    )
                }
                )}
            </div>
        )
    }
}
export default uploadMyFile;
