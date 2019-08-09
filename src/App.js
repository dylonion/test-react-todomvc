import React from 'react';
import './styles/App.css';

//Custom Components
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
