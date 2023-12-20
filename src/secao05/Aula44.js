/** 
 * Manipulando e praticando formulários 2
*/

import React, { Component } from "react";

class Aula44 extends Component {

      constructor(props){
        super(props);
      
        this.state = {
          form :{
            nome: '',
            email: '',
            senha: '',
            sexo: 'masculino',
          },
          error: ''
        };

      this.setDataForm = this.setDataForm.bind(this);
      this.cadastrar = this.cadastrar.bind(this);
    }

    setDataForm(evt){
      let form = this.state.form;
      form[evt.target.name] = evt.target.value;

      this.setState({
        form: form
      });
    }

    cadastrar(evt){
      const {nome, email, senha} = this.state.form;

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
          <input type="text" name="nome" value={this.state.form.nome}
            onChange={this.setDataForm}/>
          <br />

          <label>E-mail</label>
          <input type="email" name="email" value={this.state.form.email}
            onChange={this.setDataForm}/>
          <br />

          <label>Senha</label>
          <input type="password" name="senha" value={this.state.form.senha}
            onChange={this.setDataForm}/>
          <br />

          <label>Sexo</label>
          <select name="sexo" value={this.state.form.sexo} onChange={this.setDataForm}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <br />
          <button type="submit">Cadastrar</button>
          <br />
        </form>
        
        {this.state.form.nome} - {this.state.form.email} - {this.state.form.senha} - {this.state.form.sexo}
      </div>
    );
  }
}
  
export default Aula44;