import React from 'react'

function TodoInput(props) {
  return (
    <div className="todo-input">
      <input
        name="new"
        onKeyPress={(e) => {props.checkKeydown(e)}}
        onChange={props.handleInputChange}
        value={props.newTodo ? props.newTodo.new : ''}
        type="text"
      />

    </div>
  )
}

export default TodoInput
