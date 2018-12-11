import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDocumentos } from '../actions/index'
import DocsPage from '../docs/DocsPage'
// import Buscar from '../buscar/v1'
import Nav from './Nav'
import { Row } from 'mdbreact'
class Home extends Component {
  componentWillMount() {
    this.props.getDocumentos();
  }
  render() {
    let documen = [];
    if (this.props.documentos.data) {
      documen = this.props.documentos.data.map((currentValue, index, array) => {
        return (
          <DocsPage
            key={index}
            titulo={currentValue.titulo}
            descripcion={currentValue.descripcion}
            archivo={currentValue.archivo}
            id={currentValue.id}
            fechaCreacion={currentValue.fechaCreacion}
          />
        );
      })
    }
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div style={{ marginLeft: '15rem'}}>
          <section className="text-center">
            {/* <Buscar /> */}
            <Row>
              {documen}
            </Row>
          </section>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    documentos: state.getDocumentos
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDocumentos
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
