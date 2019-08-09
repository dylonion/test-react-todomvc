import React from 'react'

import NewTodo from './NewTodo'
import DestroyBtn from '../components/DestroyBtn'

class TodoList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo(this)
  }

  addTodo(value) {
    let newTodo = {text:value,active:true}
    let newTodos = this.state.todos;
    newTodos.push(newTodo)
    this.setState({
      todos: newTodos
    })
  }

  removeTodo(index) {

  }

  render() {
    return (
      <div className="todos">
        <NewTodo addTodo={this.addTodo} />
        <div className={ this.state.todos.length ? 'todo-list' : 'todo-list nodisplay'}>
          <ul>
            {this.state.todos.map((item, index) => {
              return <li key={index}><p>{item.text}</p><DestroyBtn removeTodo={this.removeTodo} index={index} /></li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
