
/**
 * useEffect basicamente vai substituir o cliclo de vida
 * dos componentes componentDidMount, componentDidUpdate e
 * 
 */
import React, { useState, useEffect } from "react";

function Aula50() {

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    //componentDidMount
    useEffect(()=> {
      const tarefasStorage = localStorage.getItem('tarefas')
      if(JSON.parse(tarefasStorage)?.length > 0){
        console.log('componentDidMount: ', tarefasStorage)
        setTarefas(JSON.parse(tarefasStorage));
      }

      //posso retornar uma função
      //pode ser usar quando sair do componente
      // return () => {};

    }, []);

    //Todas vez que houver uma mudança na state tarefas
    // componentDidUpdate
    useEffect(()=> {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

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
  
  export default Aula50;