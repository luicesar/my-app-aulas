/** 
 * Aplicando Class Component, trabalhando com states
*/

import React, { Component } from "react";

class Aula35 extends Component {

  constructor(props){
    super(props);

    this.state = {
      acao: 'Clique',
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.acao = 'Aumentar ...';
    state.contador +=1;
    
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    state.acao = 'Diminuir ...';

    if(state.contador === 0){
      alert('Contador zerado');
      return;
    }

    state.contador--;
    this.setState(state);
  }

  render (){
    return (
      <div>
        <h1>Contador</h1>
        <h3>
          {this.state.acao}
          <br />
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}
  
  export default Aula35;