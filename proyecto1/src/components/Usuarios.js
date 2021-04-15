import React from 'react';
import Usuario from './Usuario'
import datosPersonas from '../personas.json'
import { Component } from 'react';

class Usuarios extends Component{
  constructor(){
    super();
    this.state ={

    }
  }
  render(){
return (
    <div className="container-fluid">
       <div className="row">
      {
        datosPersonas.map(function(datosPersona, idx){
          return(
            <div className="col-md-4 usuario" >
            < Usuario key={idx} persona = {datosPersona} color = "black"/>
            </div>
            
          )
        })

      }
      </div>
   </div>
  )
    }
 }
 export default Usuarios;