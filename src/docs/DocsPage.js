import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Col,Card,CardBody,Fa,} from 'mdbreact'
import { Redirect } from 'react-router'
import './estilo.css'
class DocsPage extends Component {
    constructor() {
        super();
        this.state = {
            isRedirected: false
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.setState({ isRedirected: true });
    }
    render() {
        /**TAMBIEN SE PUEDE USAT 'descripcion---archivo' */
        const { id, titulo, fechaCreacion,archivo } = this.props;
        if (this.state.isRedirected) {
            return (<Redirect to={"detail/" + id} />);
        }
        return (
            <div style={{maxHeight:'300px'}}>
            <Col lg="6" md="12" className="mb-lg-0 mb-4">
                <div style={{minWidth:'20rem', minHeight:'30rem'}}>
                    <Card className="my-5">
                        <CardBody>
                            <h5 className="">{titulo}</h5>
                            <div className="d-flex justify-content-center">
                                <div className="card-circle d-flex justify-content-center align-items-center">
                                    <Fa
                                        icon="file-word-o"
                                        className="indigo-text"
                                        size="3x"
                                    ></Fa>
                                </div>
                            </div>
                            <Fa
                                className="my-3"
                                icon="plus-circle"
                                fixed
                                size="2x"
                                onClick={this.onClick}
                            />
                            <a href={'https://integrador-camavilca.c9users.io/uploads/'+archivo} >
                                <Fa
                                    className="my-3"
                                    icon="cloud-download"
                                    fixed
                                    size="2x"
                                />
                            </a>
                        </CardBody>
                        <hr className="bg-info"/>
                        <p>{fechaCreacion}</p>
                    </Card>
                </div>
            </Col>
            </div>
        )
    }
}
DocsPage.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    archivo: PropTypes.string.isRequired,
    fechaCreacion: PropTypes.string.isRequired
}


export default DocsPage;