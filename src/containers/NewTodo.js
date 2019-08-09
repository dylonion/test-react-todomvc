import React from 'react'

import TodoInput from '../components/TodoInput'

class NewTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodo: {
        new: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.checkKeydown = this.checkKeydown.bind(this)
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState, props) => {
      return {
        newTodo: Object.assign({}, prevState.newTodo, {[name]: value})
      }
    })//Structured with object.assign to allow for adding future inputs.
  }

  checkKeydown(e) {
    let value = e.target.value;
    const ENTER_KEY = 13;
    if(e.which === ENTER_KEY) {
      this.props.addTodo(value);
    }
    return false;
  }

  render() {
    return (
      <div className="new-todo">
        <TodoInput
          handleInputChange={this.handleInputChange}
          checkKeydown={this.checkKeydown}
          addTodo={this.props.addTodo}
          newTodo={this.state.newTodo}
        />
      </div>
    )
  }
}

export default NewTodo
