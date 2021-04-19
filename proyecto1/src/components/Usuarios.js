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
  borrarContacto(idTarjeta){
    let resultado= this.state.api.filter((api)=>{
      return api.login.uuid !== idTarjeta
    })
    //TODOS LOS CONTACTOS QUE SON DISTINTOS AL QUE SELECCIONE PARRA BORRAR TE LOS DEJA, Y DESAPARECE EL SELECCIONADO
    //Si el id no coincide con el que yo estoy borrando, los mantiene en la colección
    console.log("Tarjeta a borrar: " + idTarjeta);
    this.setState({api: resultado});
  }
  render(){
return (
  <React.Fragment>
    <div className="contenedorBotonAdicionar">
      <div className="botonAdicionar">
       <input className="imput"type="number" id="tentacles" name="cantidad" min="0" max="100"></input>
       
        <button className="adicionarTarjetas" onClick={this.adicionarTarjetas.bind(this, this.state.cantidad)}>Adicionar contactos</button>
        </div>
        </div>
       <div className="row">
<br></br>
      {
      

        this.state.api.map((datosPersona) => {
          return(
            <div>
            < Usuario key= {datosPersona.login.uuid} persona = {datosPersona} color = "black" onDelete={this.borrarContacto.bind(this)}/>
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