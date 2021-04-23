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
    console.log("Se modifico el componente")
  }
  adicionarTarjetas (){
    let resultados = document.getElementById("idInput").value
    console.log(resultados)
    fetch("https://randomuser.me/api/?results=" + resultados)
    .then(result => result.json())
    .then(data =>{
      //console.log(data.results)
      let contactos = this.state.api.concat(data.results)
      //console.log(contactos)
      this.setState(
        {api: contactos}
        )
      //console.log(this.state.api)
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

filtrarNombres(){
  let nombres = document.getElementById("idInputNombres").value.toLowerCase()
  let resultado = this.state.api.filter((api)=>{
    return api.name.first.toLowerCase().includes(nombres)
  });
    this.setState({api: resultado});
  }
  

filtrarApellidos(){
  let apellidos = document.getElementById("idInputApellidos").value.toLowerCase()
  let resultado= this.state.api.filter((api)=>{
    return api.name.last.toLowerCase().includes(apellidos)
  });
  this.setState({api: resultado});
}

filtrarEdades(){
  let edades = document.getElementById("idInputEdades").value
  console.log(edades)
  let resultado= this.state.api.filter((api)=>{
    return api.dob.age == edades
  })
  this.setState({api: resultado});
}

ordenar(){ 
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let edad = document.getElementById("edad")
let chequeado 

if (nombre.checked === true){
   chequeado = this.state.api.name.first
   console.log(chequeado)
}

else if (apellido.checked === true){
   chequeado = this.state.api.name.last
}

else if (edad.checked === true){
    chequeado = this.state.api.dob.age
}

let ascendente = this.state.api.sort((a, b)=> {
      if (a.chequeado > b.chequeado){
             return 1;
        }

      else if (a.chequeado < b.chequeado){
            return -1;
        }

      else {
            return 0;
        }
        
 })
 this.setState({api: ascendente})
}

render(){
return (
  <React.Fragment>
    <div className="contenedorBotonAdicionar">
      <div className="botonAdicionar">

       <input className="input" type="number" id="idInput" name="cantidad" min="0" max="100"></input>
        <button className="adicionarTarjetas" onClick={this.adicionarTarjetas.bind(this)}>Adicionar contactos</button>
        
        <input className="input" id="idInputNombres" name="cantidad" ></input>
        <button className="filtrarNombres" onClick={this.filtrarNombres.bind(this)}>Filtrar por nombre</button>
        
        <input className="input" id="idInputApellidos" name="cantidad" ></input>
        <button className="filtrarApellidos" onClick={this.filtrarApellidos.bind(this)}>Filtrar por apellido</button>

        <input className="input" type="number" id="idInputEdades" name="cantidad"></input>
        <button className="filtrarEdades" onClick={this.filtrarEdades.bind(this)}>Filtrar por edad</button>
 
        <select className="ordenar" onChange= {this.ordenar.bind(this)}>
            <option disabled selected>Ordenar</option>
            <option value="A" >Ascendente por nombre</option>
            <option value="D">Descendente por nombre</option>
        </select>

        </div>
        </div>
       <div className="row">
<br></br>
      {
        this.state.api.map((datosPersona) => {
          return(
            <div>
            < Usuario key= {datosPersona.login.uuid} persona = {datosPersona} onDelete={this.borrarContacto.bind(this)}  />
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