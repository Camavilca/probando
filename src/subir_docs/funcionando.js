import React, { Component } from 'react';
import axios from 'axios';
class uploadMyFile extends Component {
    constructor(){
        super()
        this.state =  { 
            titulo:'',
            descripcion:'',
            archivo:null
        }
        this.subir = this.subir.bind(this)
        this.upload = this.upload.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    subir(e){
        let archivo = e.target.files[0]
        this.setState({
            archivo:archivo
        })
    }
    upload(e){
        let file  = this.state.archivo
        let titulo = this.state.titulo
        let descripcion = this.state.descripcion
        let formdata  = new FormData()
        formdata.append('titulo',titulo)
        formdata.append('descripcion',descripcion)
        formdata.append('archivo',file)
        axios.post('http://ec2-52-43-55-173.us-west-2.compute.amazonaws.com:8080/v2/documentos/',formdata)
            .then(res=>{
                console.log(res);
                
            })
            .catch(err=>{
                console.log(err);
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
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="titulo" value={this.state.titulo} onChange={this.handleInputChange}/>
                    <input type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange}/>
                    <input type="file" name="file" onChange={(e)=> this.subir(e)} />
                    <button
                        type="button"
                        onClick={(e)=>this.upload(e)}
                        >Enviar</button>
                </form>
            </div>
        )
    }
}
export default uploadMyFile;
    