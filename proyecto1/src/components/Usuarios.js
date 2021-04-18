import React from 'react';
import Usuario from './Usuario'
import { Component } from 'react';

class Usuarios extends Component{
  constructor(props){
    super(props);
    this.state ={
      api: [],
      cantidadOriginal: this.props.cantidad,
      cantidad: this.props.cantidad,
    }
  }
  componentDidMount(){
     fetch("https://randomuser.me/api/?results=" + this.state.cantidadOriginal)
     .then(result => result.json())
     .then(data =>{
       this.setState({api: data.results})
        console.log(this.state.api);
     })
     .catch((e) => console.log(e))
  }
  componentDidUpdate(prevProps, prevStates){
    console.log()
  }
  adicionarTarjetas (cantidadElegida){
    fetch("https://randomuser.me/api/?results=" + cantidadElegida)
    .then(result => result.json())
    .then(data =>{
      this.state.api.push(data.results)
      this.setState({api: this.state.api})
      this.setState({cantidad:cantidadElegida})
     })
    .catch((e) => console.log(e))
  }
  render(){
return (
  <React.Fragment>
      
       <div className="row">
<br></br>
 <div className="botonAdicionar">
       <input className="imput"type="number" id="tentacles" name="cantidad" min="0" max="100"></input>
       
        <button className="adicionarTarjetas" onClick={this.adicionarTarjetas.bind(this, this.state.cantidad)}>Adicionar contactos</button>
        </div>
      {
      

        this.state.api.map((datosPersona) => {
          return(
            <div className="hola">
            < Usuario key= {datosPersona.login.uuid} persona = {datosPersona} color = "black"/>
            </div>
          )
        })
      }
      </div>
      </React.Fragment>
  )
    }
 }
 export default Usuarios;