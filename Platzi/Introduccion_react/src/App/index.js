import React from 'react';
import { TodoCounter } from './TodoCounter';
import {TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Sacar al perro', completed: false},
  { text: 'Hacer ejercicio', completed: false}
];



function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo=> todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      {<TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />}
    
      <TodoSearch 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map( todo => (
          <TodoItem
           key={todo.text} 
           text={todo.text}
           completed={todo.completed}
           onComplete= { () => completeTodo(todo.text)}
           onDelete= { () => deleteTodo(todo.text)}
           />))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;