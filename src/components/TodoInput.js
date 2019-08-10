import React from 'react'

function TodoInput(props) {
  return (
    <div className="todo-input">
      <input
        autofocus="true"
        name="new"
        onKeyPress={(e) => {props.checkKeydown(e)}}
        onChange={props.handleInputChange}
        value={props.newTodo ? props.newTodo.new : ''}
        type="text"
      />
      <div className="add-input-button" onClick={(e) => {props.addTodo(document.querySelector('input').value); props.clearTodo()}}> + </div>
    </div>
  )
}

export default TodoInput
