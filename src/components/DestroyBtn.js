import React from 'react'

function DestroyBtn(props) {
  return (
    <div className="destroy-button" onClick={(e) => {props.removeTodo(e,props.index)}}>
      <span>X</span>
    </div>
  )
}

export default DestroyBtn
