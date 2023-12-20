
/**
 * useCallback: tem a mesma a funcionalidade do useMemo
 * mas é usado para trabalhar com funções complexas e
 * retorna uma função, e é usado toda vez que foi trabalhar com hooks
 * 
 */
import React, { useState, useEffect, useMemo, useCallback } from "react";

function Aula52() {

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    //componentDidMount
    useEffect(()=> {
      const tarefasStorage = localStorage.getItem('tarefas')
      if(JSON.parse(tarefasStorage)?.length > 0){
        console.log('componentDidMount: ', tarefasStorage);
        setTarefas(JSON.parse(tarefasStorage));
      }
    }, []);

    //Todas vez que houver uma mudança na state tarefas
    // componentDidUpdate
    useEffect(()=> {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    //esta função não será criada toda vez que digitando alguma coisa no campo input
    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input]);
        setInput('');
    }, [input, tarefas]);

    function onChangeInput(evt){
        setInput(evt.target.value);
    }

    const totalTarefas = useMemo(() => tarefas.length, [tarefas])

    return (
      <div>
        <h1>Hooks</h1>
        <ul>
            {tarefas.map(tarefa => (
                <li key={tarefa}>{tarefa}</li>
            ))}
         </ul>
         <br />
         <strong>Você tem {totalTarefas} tarefas.</strong>
         <br />
         <input type="text" value={input} onChange={onChangeInput}></input>
         <button type="button" onClick={handleAdd}>Adicionar</button>
      </div>
    );
  }
  
  export default Aula52;