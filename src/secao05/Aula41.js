/** 
 * Trabalhando com listas
*/

import React, { Component } from "react";
import Feed from "./Feed/Index";

class Aula41 extends Component {

      constructor(props){
      super(props);
    
      this.state = {
        feed: [
          {id: 1, username: 'César', curtidas:10, comentarios: 2},
          {id: 2, username: 'Luis', curtidas: 120, comentarios: 24},
          {id: 3, username: 'Oliveira', curtidas:30, comentarios: 12},
        ]
      };
    }

   render (){
    return (
      <div>
        <h1>Rede Social</h1>
        {this.state.feed.map((item) => {
          return(
            <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
          );
        })}
      </div>
    );
  }
}
  
  export default Aula41;