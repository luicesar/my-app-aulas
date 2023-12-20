/** 
 * Manipulando e praticando formulários
*/

import React, { Component } from "react";

class Aula42 extends Component {

      constructor(props){
        super(props);
      
        this.state = {
          nome: '',
          email: '',
          senha: '',
          sexo: 'masculino',
          error: ''
        };

      this.setNome = this.setNome.bind(this);
      this.setEmail = this.setEmail.bind(this);
      this.setSenha = this.setSenha.bind(this);
      this.setSexo = this.setSexo.bind(this);

      this.cadastrar = this.cadastrar.bind(this);
    }

    setNome(evt){
      this.setState({
        nome: evt.target.value
      });
    }

    setEmail(evt){
      this.setState({
        email: evt.target.value
      });
    }

    setSenha(evt){
      this.setState({
        senha: evt.target.value
      });
    }

    setSexo(evt){
      this.setState({
        sexo: evt.target.value
      });
    }

    cadastrar(evt){
      const {nome, email, senha} = this.state;

      if(nome !=='' && email !== '' && senha !==''){
        alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        this.setState({
          error: ''
        });
      }
      else {
        this.setState({
          error: 'Todos os campos são Obrigatórios'
        });
      }

      evt.preventDefault();
    }

   render (){
    return (
      <div>
        <h1>Formulários</h1>
        <br />
        {this.state.error && <span>{this.state.error}</span>}
        <form onSubmit={this.cadastrar}>
          <label>Nome</label>
          <input type="text" name="nome" value={this.state.nome}
            onChange={this.setNome}/>
          <br />

          <label>E-mail</label>
          <input type="email" name="email" value={this.state.email}
            onChange={this.setEmail}/>
          <br />

          <label>Senha</label>
          <input type="password" name="senha" value={this.state.senha}
            onChange={this.setSenha}/>
          <br />

          <label>Sexo</label>
          <select name="sexo" value={this.state.sexo} onChange={this.setSexo}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <br />
          <button type="submit">Cadastrar</button>
          <br />
        </form>
        
        {this.state.nome} - {this.state.email} - {this.state.senha} - {this.state.sexo}
      </div>
    );
  }
}
  
export default Aula42;