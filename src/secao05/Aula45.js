/** 
 * Projeto Biscoito da sorte
*/

import React, { Component } from "react";
import '../css/estilo.css';
import biscoito from '../assets/biscoito.png';

class Aula45 extends Component {

      constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.outraAcao = this.outraAcao.bind(this);
        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
                      'O riso é a menor distância entre duas pessoas.', 
                      'Deixe de lado as preocupações e seja feliz.',
                      'Realize o óbvio, pense no improvável e conquiste o impossível.',
                      'Acredite em milagres, mas não dependa deles.',
                      'A maior barreira para o sucesso é o medo do fracasso.'];
    }

    quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
      this.setState(state);
    }

    outraAcao(){
      alert('Executando outra ação...')
    }

   render (){
    return (
      <div className="container">
        <img src={biscoito} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <Botao nome="Outra ação" acaoBtn={this.outraAcao}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>   
    );
  }
}

class Botao extends Component{
  render(){
      return(
          <div>
              <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
          </div>
      );
  }
}
  
export default Aula45;