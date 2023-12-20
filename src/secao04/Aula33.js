/** 
 * Entendendo props e componentes 2
 * O componente Equipe e Sobre não tem estado
*/

const Equipe = (props) => {
  return (
      <div>
         <Sobre nome={props.nome} cargo={props.cargo}  />
         <Social facebook={props.facebook} instagram={props.instagram}
                linkedin={props.linkedin} />
      </div>
  );
}

const Sobre = (props) => {
  return (
      <div>
        <h1>Informações Pessoais:</h1>
        <h2>{props.nome} é {props.cargo} </h2>
      </div>
  );
}

const Social = (props) => {
  return (
      <div>
        <a href="{props.facebook}">Facebook</a> |
        <a href="{props.instagram}">Instagram</a> |
        <a href="{props.linkedin}">Linkedin</a>
      </div>
  );
}

  function Aula33() {
    return (
      <div>
        <Equipe nome="César" cargo="Programador"
                facebook="https//www.facebook.com.br"
                instagram="https//www.instagram.com.br"
                linkedin="https//www.linkedin.com.br"
               />
      </div>
    );
  }
  
  export default Aula33;