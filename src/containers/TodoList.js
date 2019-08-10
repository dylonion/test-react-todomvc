import React from 'react'

import NewTodo from './NewTodo'
import DestroyBtn from '../components/DestroyBtn'
import TodoTitle from '../components/TodoTitle'

class TodoList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.setComplete = this.setComplete.bind(this)
  }

  addTodo(value) {
    if(value) {
      let newTodo = {
        text:value.trim(),
        completed: false
      }
      let newTodos = this.state.todos;
      newTodos.push(newTodo)
      this.setState({
        todos: newTodos
      })
    }
  }

  setComplete(index) {
    let todos = [...this.state.todos]
    todos[index].completed = true;
    this.setState({
      todos: todos
    })
  }

  removeTodo(e,index) {
    let todos = [...this.state.todos]
    let newTodos = todos.splice(index,1)
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todos">
        <TodoTitle count={this.state.todos.length} />
        <NewTodo addTodo={this.addTodo} />
        <div className={ this.state.todos.length > 0 ? 'todo-list' : 'todo-list nodisplay'}>
          <ul>
            {this.state.todos.map((item, index) => {
              return <li key={index} className={ item.completed ? 'completed' : '' }>
                        <div>{item.text}</div>
                        <div className="options">
                          <div onClick={(e) => {this.setComplete(index)}}>&#9989;</div>
                          <DestroyBtn removeTodo={this.removeTodo} index={index} />
                        </div>
                      </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
