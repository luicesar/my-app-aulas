/** 
 * Ciclo de vida dos componentes
 * Os principais ciclos de vida são:
 * - componentDidMount, componentDidUpdate
*/

import React, { Component } from "react";

class Aula37 extends Component {

  //Primeiro a ser executado
  constructor(props){
    super(props);

    this.state = {
      ciclo: 'Ciclo constructor',
      hora: '00:00:00',
      status: 'false'
    };
  }

  //Roda Apenas uma vez
  componentDidMount(){

    setInterval(() => {
      this.setState({
        ciclo: 'Ciclo componentDidMount',
        hora: new Date().toLocaleTimeString()
      })
    }, 1000);

  }

  //toda vez que atualizou um state em algum componente
  componentDidUpdate(){
    console.log('Ciclo componentDidUpdate: Atualizou componente');
  }

  //retorna true ou false: 'Pergunta se este componente deve atualizar ?'
  // shouldComponentUpdate() {
  // }

   render (){
    return (
      <div>
       <h1>Meu projeto</h1>
       <h2>{this.state.ciclo} - {this.state.hora}</h2>
       {/* <h3>Status: {this.state.status}</h3> */}
      </div>
    );
  }
}
  
  export default Aula37;