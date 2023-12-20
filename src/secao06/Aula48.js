import React, { useState } from "react";

function Aula48() {

    const [tarefas, setTarefas] = useState([
        'Pagar a conta luz',
        'Estudar react hooks',
        'BackEnd Golang'
    ]);

    const [input, setInput] = useState('');

    function handleAdd(){
        setTarefas([...tarefas, input]);
        setInput('')
    }

    function onChangeInput(evt){
        setInput(evt.target.value)
    }

    return (
      <div>
        <h1>Hooks</h1>
        <ul>
            {tarefas.map(tarefa => (
                <li key={tarefa}>{tarefa}</li>
            ))}
         </ul>
         <input type="text" value={input} onChange={onChangeInput}></input>
         <button type="button" onClick={handleAdd}>Adicionar</button>
      </div>
    );
  }
  
  export default Aula48;