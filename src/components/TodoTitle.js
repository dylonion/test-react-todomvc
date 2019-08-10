import React from 'react'

function TodoTitle(props) {
  return (
    <div className="todo-title">
      <div>To-Do List</div><div className="todo-count"><strong>{props.count} item{ props.count === 1  ? '' : 's'}</strong></div>
    </div>
  )
}

export default TodoTitle
