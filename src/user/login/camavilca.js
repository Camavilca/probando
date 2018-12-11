import React, { Component } from 'react'
import axios from 'axios'
import {signup} from '../../actions/constante'
class Registro extends Component{
    constructor(){
        super()
        this.state = {
            nombre:'',
            apellidos:'',
            carrera:'',
            correo:'',
            password:''

        }
        this.inputChange = this.inputChange.bind(this)
        this.registro = this.inputChange.bind(this)
    }
    inputChange(e){
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }
    registro(e){
        e.preventDefault();
        const username = this.state.username
        const password = this.state.password
        const data  = {
             username,
             password
        }
        axios.post(signup,data)
         .then(res=>{
             console.log(res);
         }).
         catch(err=>{
             console.log(err);
         })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.registro}>
                    <input type="text" name="nombre" value={this.state.nombre} onChange={this.inputChange}/>
                    <input type="text" name="apellidos" value={this.state.apellidos} onChange={this.inputChange}/>
                    <input type="text" name="carrera" value={this.state.carrera} onChange={this.inputChange}/>
                    <input type="text" name="correo" value={this.state.correo} onChange={this.inputChange}/>
                    <input type="text" name="password" value={this.state.password} onChange={this.inputChange}/>
                    <button>aceptar</button>
                </form>
            </div>
        )
    }
}
export default Registro