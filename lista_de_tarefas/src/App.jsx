import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputValor, setInputValor] = useState('');

  useEffect(() => {
    const itensIniciais = [
      { id: 1, name: "Fazer a tarefa de Desenvolvimento Web", favorito: false },
      { id: 2, name: "Estudar como alinhar uma div", favorito: false },
      { id: 3, name: "Separar as moedas shopee para o Zépa", favorito: false },
      { id: 4, name: "Almoçar", favorito: false },
      { id: 5, name: "Alimentar os pets", favorito: false },
      { id: 6, name: "Editar fotos", favorito: false },
      { id: 7, name: "Estudar sobre React Native", favorito: false },
      { id: 8, name: "Planejar as tarefas da semana", favorito: false },
      { id: 9, name: "Fazer trabalho da mentoria de carreira", favorito: false },
      { id: 10, name: "Dormir 8 horas(Quando der)", favorito: false }
    ];
    setTarefas(itensIniciais);
  }, []);

  const addTarefa = () => {
    if (inputValor) {
      setTarefas([...tarefas, { id: Date.now(), name: inputValor, favorito: false }]);
      setInputValor('');
    }
  };

  const removeTarefa = (id) => {
    const updatedTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(updatedTarefas);
  };

  const toggleFavorito = (id) => {
    const updatedTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, favorito: !tarefa.favorito } : tarefa
    );
    setTarefas(updatedTarefas);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
        />
        <button onClick={addTarefa}>Adicionar Tarefa</button>
      </div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="text"
              value={tarefa.name}
              onChange={(e) => updateTarefa(tarefa.id, e.target.value)}
            />
            <button onClick={() => removeTarefa(tarefa.id)}>Remover</button>
            <button onClick={() => toggleFavorito(tarefa.id)}>
              {tarefa.favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;