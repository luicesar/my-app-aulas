import React, { Component } from "react";

//Criando o arquivo Index.js para organizar os componentes

class Membro extends Component{

  constructor(props){
    super(props);

    this.state = {
      nome : props.nome,
      contador: 0
    };
    this.entrar = this.entrar.bind(this);
    this.entrar2 = this.entrar2.bind(this);
  }

  entrar(){
    let state = this.state;
    state.contador +=1;
    this.setState(
        {nome: `César ${state.contador}`});
  }

  entrar2(nome){
    let state = this.state;
    state.contador -=1;
    this.setState(
        {nome: `${nome} ${state.contador}`});
  }

    render (props){
        return (
          <div>
            <h1>Membro {this.state.nome}</h1>
            <button onClick={this.entrar}>
                Entrar como Cesar
            </button>
            <button onClick={() => this.entrar2('Luis')}>
                Entrar como Luis
            </button>
            <button onClick={() => this.setState({nome:'',contador: 0})}>
                Sair
            </button>
          </div>
        );
      }
}

export default Membro;