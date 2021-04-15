 import React from 'react';
 import { Component } from 'react';

  class Usuario extends Component{
    constructor(props){
      super(props);
      this.state = {
          color: this.props.color
          }
    }
    render(){
  return (
     <React.Fragment>  
            <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="images/avatar.jpg"/>
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{this.props.persona.name.title}  {this.props.persona.name.first}  {this.props.persona.name.last}</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{this.props.persona.dob.date} ({this.props.persona.dob.age}) </time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <p>{this.props.persona.email}</p>
    </div>
    <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Ver detalle</a>
    </div>
</div> 
     </React.Fragment>
   )
  }
  }
 export default Usuario;