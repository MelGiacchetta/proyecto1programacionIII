 import React from 'react';
 import { Component } from 'react';

  class Usuario extends Component{
    constructor(props){
      super(props);
      this.state = {
          color: this.props.color,
       
          }
    }
    // verDetalle (detalle){
    
    // }
   render(){
  return (
     <React.Fragment>  
    <div className="contenedor">
        <div className="infoContenedor">
            
            <img className="imagenUsuario" width="85" height="85" src={this.props.persona.picture.large}/>
            <button className="borrarContacto" onClick={this.props.onDelete.bind(this, this.props.persona.login.uuid)}>X</button>
            <h3>{this.props.persona.name.title}  {this.props.persona.name.first}  {this.props.persona.name.last}</h3>
            <p><time> {this.props.persona.dob.date} ({this.props.persona.dob.age}) </time></p>
            <p>{this.props.persona.email}</p>
        </div>
        <div >
            <button className="verDetalle">Ver detalle</button>
        </div>
    </div> 
     </React.Fragment>
   )
  }
  }
 export default Usuario;