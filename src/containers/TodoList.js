import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      activeTodos: {

      },
      inactiveTodos: {

      }
    }
  }

  render() {
    return (
      <div className={ this.state.activeTodos.length + this.state.inactiveTodos.length === 0 ? 'todo-list nodisplay' : 'todo-list'}>

      </div>
    )
  }
}

export default TodoList
