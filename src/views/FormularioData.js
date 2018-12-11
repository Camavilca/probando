import React, { Component } from 'react'
// import FormularioDocs from '../components/subir_docs/FormularioDocs'
import FormularioDocs from '../subir_docs/UPLOAD'
import Nav from '../views/Nav'
import { Row } from 'mdbreact'
class FormData extends Component {

    render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
              <Row>
              <div style={{marginLeft:'25rem',width:'600px',height:'650px',marginTop:'150px'}}>
                  <FormularioDocs />
               </div>
              </Row>
            </div>
        )
    }
}

export default FormData;