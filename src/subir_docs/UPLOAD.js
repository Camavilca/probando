import React, { Component } from 'react';
import { upload } from '../actions/constante'
import axios from 'axios';
import {
    Fa,
    Button,
    MDBInput,
    MDBContainer,
    MDBAlert,
    Progress
} from 'mdbreact'

class uploadMyFile extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            descripcion: '',
            archivo: null,
            loading: '',
            message: '',
            error_file: '',
            campos_vacios: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
    }
    //**UPLOAD FILE */
    fileSelectedHandler(event) {
        var archivo = event.target.files[0]
        var nombre = event.target.files[0].name
        var extencion = (/[.]/.exec(nombre)) ? /[^.]+$/.exec(nombre)[0] : undefined
        if (extencion === 'doc' || extencion === 'docx') {
            this.setState({
                archivo: event.target.files[0]
            })
        } else {
            this.setState({
                error_file: 'error.. archivos validos .doc .docx'
            })
            archivo.value = ''
            return false
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let archivo = this.state.archivo
        let titulo = this.state.titulo
        let descripcion = this.state.descripcion
        let data = new FormData()
        data.append('titulo', titulo)
        data.append('descripcion', descripcion)
        data.append('archivo', archivo)
        this.setState({
            loading: true
        })
       
        if (titulo === '' || descripcion === '' || archivo === null) {
            this.setState({
                campos_vacios: 'todos los campos son requeridos'
            })
           
        }
        axios.post(upload, data)
            .then(response => {
                this.setState({
                    loading: false,
                    // message: response.data
                })
                console.log(response);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false
                })
            })

    }

    handleInputChange(e) {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    mensageShow() {
        if (this.state.loading) {
            return <p>
                <Fa icon="spinner" pulse size="3x" fixed />
                <span className="sr-only">Loading...</span>
            </p>
        } else {
            return <p>{this.state.message}</p>
        }
    }
    render() {
        return (
            <div>
                <div className="card mx-xl-5 upload_file">
                    <div className="card-body" >
                        <form onSubmit={this.handleSubmit}>
                            <p className="h4 text-center text-uppercase text-secondary">
                                subir archivos
                        </p>
                            <label
                                htmlFor="defaultFormCardNameEx"
                                className="grey-text font-weight-light">
                                Titulo *
                        </label>
                            <MDBInput
                                label="Ingrese el titulo del arhivo"
                                icon="file-pdf-o"
                                group
                                type="text"
                                required
                                validate
                                name="titulo"
                                error="wrong"
                                value={this.state.titulo}
                                onChange={this.handleInputChange}
                                success="right"
                            />
                            <label
                                className="grey-text font-weight-light text-left">
                                Descripción *
                            </label>
                           
                            <MDBInput
                                label="Ingrese la descripcion del arhivo"
                                icon="newspaper-o"
                                group
                                type="text"
                                validate
                                name="descripcion"
                                required
                                error="wrong"
                                value={this.state.descripcion}
                                onChange={this.handleInputChange}
                                success="right"
                            />
                            <label
                                className="grey-text font-weight-light text-left mx-5">
                                Elija archivo *
                            </label>
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                required
                                className="form-control ml-5"
                                onChange={(e) => this.fileSelectedHandler(e)}
                                ref={fileInput => this.fileInput = fileInput}
                            />
                            <Button
                                onClick={() => this.fileInput.click()}
                                outline
                                required
                                className="center my-2"
                                color="danger"
                            >
                                <Fa
                                    icon="cloud-upload"
                                    size="3x"
                                    className="m-2"
                                >
                                </Fa>
                            </Button>
                            <br />
                            {this.state.error_file ? (
                                <MDBContainer>
                                    <MDBAlert color="danger" dismiss>
                                        <span className="text-primary">{this.state.error_file}</span>
                                    </MDBAlert>
                                </MDBContainer>
                            ) : (
                                    <span></span>
                                )}

                            <br />
                            <Button
                                type="submit"
                                className="align-text-bottom btn_block mt-3"
                                outline
                                color="primary">
                                Guardar
                                <Fa icon="paper-plane-o"></Fa>
                            </Button>
                        </form>
                        {this.state.campos_vacios ? (
                                <MDBContainer>
                                    <MDBAlert color="danger" dismiss>
                                        <span className="text-primary">{this.state.campos_vacios}</span>
                                    </MDBAlert>
                                </MDBContainer>
                            ) : (
                                    <span></span>
                                )}
                         <br />
                        {this.mensageShow()}
                    </div>
                </div>
            </div>
        )
    }
}
export default uploadMyFile;
