import React from 'react';
import { Component } from 'react';

class Usuario extends Component{
    constructor(props){
      super(props);
      this.state = {
        hidden: true,
        mover: false,
        }
}
render(){
  return(
     <React.Fragment>
    <div id="infoContenedor" className={

        this.state.mover ? "uk-card uk-card-default uk-card-body uk-text-center" : "contenedor"

    }  onMouseOver={()=> this.setState({mover: true})} onMouseLeave={()=> this.setState({mover: false})}>
        <div  className="infoContenedor" >

            <img className="imagenUsuario" width="85" height="85" src={this.props.persona.picture.large}/>
            <button className="borrarContacto" onClick={this.props.onDelete.bind(this, this.props.persona.login.uuid)}>X</button>
            <h3>{this.props.persona.name.title}  {this.props.persona.name.first}  {this.props.persona.name.last}</h3>
            <p><time> Nacimiento: {this.props.persona.dob.date} Edad: ({this.props.persona.dob.age}) </time></p>
            <p className="email">Email: {this.props.persona.email}</p>
        
            <div className= { 
                
                    this.state.hidden ? "hidden" : "notHidden"
                    
                //  en el primero dice lo que tiene que ser verdad, y en el segundo lo falso
            }>
                <p>Dirección: {this.props.persona.location.street.name} {this.props.persona.location.street.number}</p>
                <p>Ciudad/estado: {this.props.persona.location.city}, {this.props.persona.location.state}</p>
                <p>País: {this.props.persona.location.country}</p>
                <p>CP: {this.props.persona.location.postcode}</p>
                <p>Fecha registro: {this.props.persona.registered.date}</p>
                <p>Celular: {this.props.persona.phone}</p>
            </div>

        </div>
     
        <div>
            <button className="verDetalle" id="botonVerDetalle" onClick={()=> this.setState({hidden: false})}>Ver detalle</button>
        </div>
     </div>
    <br></br> 
     </React.Fragment>
   )
}
}
 export default Usuario;