import React from 'react';
import './styles/App.css';

//Custom Components
import NewTodo from './containers/NewTodo'
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
