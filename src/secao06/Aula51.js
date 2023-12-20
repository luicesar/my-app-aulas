
/**
 * useMemo: usa-se mais pra cálculos simples
 * o motivo em usar o useMemo é pra que 
 * quando digite uma informação no campo input
 * não execute ou renderize o return ()
 * 
 */
import React, { useState, useEffect, useMemo } from "react";

function Aula51() {

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

    function handleAdd(){
        setTarefas([...tarefas, input]);
        setInput('');
    }

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
  
  export default Aula51;