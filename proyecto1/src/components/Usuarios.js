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
      value: "" ,
      nombre: "",
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
    let resultados = this.value
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
  let nombres = this.state.value.toLowerCase()
  let resultado = this.state.api.filter((api)=>{
    return api.name.first.toLowerCase().includes(nombres)
  });
  console.log(resultado)
    this.setState({api: resultado});
  }
  

filtrarApellidos(){
  let apellidos = this.state.value.toLowerCase()
  let resultado= this.state.api.filter((api)=>{
    return api.name.last.toLowerCase().includes(apellidos)
  });
  this.setState({api: resultado});
}

filtrarEdades(){
  let edades = this.state.value
  console.log(edades)
  let resultado= this.state.api.filter((api)=>{
    return api.dob.age == edades
  })
  this.setState({api: resultado});
}

ordenar(event){ 
let valorInput = event.target.value

let nombres = this.state.api.map ((api)=>{
  return api.name.first 
})

let apellidos = this.state.api.map ((api)=>{
  return api.name.last 
})

let edades = this.state.api.map ((api)=>{
  return api.dob.age 
})

let valor 

 if (valorInput === "An" ) {
   valor = nombres
 }
 else if(valorInput === "Aa" ) {
   valor = apellidos
 }
 else{
   valor = edades
 }
 console.log(valor)

let ascendente = this.state.api.sort((a, b)=>{
      if(a.valor > b.valor){
             return 1;
        }

      if(a.valor < b.valor){
            return -1;
        }
        
      return 0;  
 })
 console.log(ascendente)
 this.setState({api: ascendente}) 
}

render(){
return (
  <React.Fragment>
    <div className="contenedorBotonAdicionar">
      <div className="botonAdicionar">

       <input className="input" type="number" id="idInput" name="cantidad" min="0" max="100" onChange={(event)=> this.setState({ value: event.target.value})}></input>
        <button className="adicionarTarjetas" onClick={this.adicionarTarjetas.bind(this)}>Adicionar contactos</button>
        
        <input className="input" id="idInputNombres" name="cantidad" onChange={(event)=> this.setState({ value: event.target.value})}></input>
        <button className="filtrarNombres" onClick={this.filtrarNombres.bind(this)}>Filtrar por nombre</button>
        
        <input className="input" id="idInputApellidos" name="cantidad" onChange={(event)=> this.setState({ value: event.target.value})} ></input>
        <button className="filtrarApellidos" onClick={this.filtrarApellidos.bind(this)}>Filtrar por apellido</button>

        <input className="input" type="number" id="idInputEdades" name="cantidad" onChange={(event)=> this.setState({ value: event.target.value})}></input>
        <button className="filtrarEdades" onClick={this.filtrarEdades.bind(this)}>Filtrar por edad</button>
 
        <select className="ordenar" onChange= {this.ordenar.bind(this)} >
            <option disabled selected>Ordenar</option>
            <option value="An" onClick={(event)=> this.setState({ value: event.target.value})}>Ascendente por nombre</option>
            <option value="Dn" onClick={(event)=> this.setState({ value: event.target.value})}>Descendente por nombre</option>
            <option value="Aa" onClick={(event)=> this.setState({ value: event.target.value})}>Ascendente por apellido</option>
            <option value="Da" onClick={(event)=> this.setState({ value: event.target.value})}>Descendente por apellido</option>
            <option value="Ae" onClick={(event)=> this.setState({ value: event.target.value})}>Ascendente por edad</option>
            <option value="De" onClick={(event)=> this.setState({ value: event.target.value})}>Descendente por edad</option>
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