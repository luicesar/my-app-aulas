/** 
 * Entendendo props e componentes
 * O componente BemVindo, não tem estados
*/
const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem vindo, {props.nome} {props.sobrenome} !</h2>
        </div>
    );
  }

  function Aula32() {
    return (
      <div>
        <BemVindo nome="César" sobrenome="Oliveira" />
      </div>
    );
  }
  
  export default Aula32;