/** 
 * Aplicando Class Component, desta forma possue estados
*/

import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
        <div>
            <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
        </div>
    );
  }
}

class Sobre extends Component {
  render (){
    return (
      <div>
        <p>Eu sou <b>{this.props.nome}</b>, novo {this.props.cargo} <span>e tenho {this.props.idade} anos.</span></p>
      </div>
    );
  }
}

  function Aula34() {
    return (
      <div>
        <h1>Conheça nossa equipe</h1>
        <Equipe nome="Arthur Monteiro" cargo="programador" idade="41" />
      </div>
    );
  }
  
  export default Aula34;