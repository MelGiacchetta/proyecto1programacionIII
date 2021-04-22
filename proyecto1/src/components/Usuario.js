 import React from 'react';
 import { Component } from 'react';

  class Usuario extends Component{
    constructor(props){
      super(props);
      this.state = {
          width: this.props.width,
       
          }
    }

   render(){
  return (
     <React.Fragment>  
    <div id="infoContenedor" className="contenedor">
        <div  className="infoContenedor" >
            
            <img className="imagenUsuario" width="85" height="85" src={this.props.persona.picture.large}/>
            <button className="borrarContacto" onClick={this.props.onDelete.bind(this, this.props.persona.login.uuid)}>X</button>
            <h3>{this.props.persona.name.title}  {this.props.persona.name.first}  {this.props.persona.name.last}</h3>
            <p><time> Nacimiento: {this.props.persona.dob.date} Edad: ({this.props.persona.dob.age}) </time></p>
            <p className="email">Email: {this.props.persona.email}</p>
            <p className="hidden" id="hidden1">Dirección: {this.props.persona.location.street.name} {this.props.persona.location.street.number}</p>
            <p className="hidden" id="hidden2">Ciudad/estado: {this.props.persona.location.city}, {this.props.persona.location.state}</p>
            <p className="hidden" id="hidden3">País: {this.props.persona.location.country}</p>
            <p className="hidden" id="hidden4">CP: {this.props.persona.location.postcode}</p>
            <p className="hidden" id="hidden5">Fecha registro: {this.props.persona.registered.date}</p>
            <p className="hidden" id="hidden6">Celular: {this.props.persona.phone}</p>
        </div>
        <div >
            <button className="verDetalle" id="botonVerDetalle" onClick={this.props.onDetalle.bind(this, this.props.persona.login.uuid)}>Ver detalle</button>
        </div>
    </div> 
     </React.Fragment>
   )
  }
  }
 export default Usuario;