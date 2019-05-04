import React from 'react'
import { connect } from 'react-redux'
import { addTodo,ToggleListModal } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let date
  let time
  let description

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(
          addTodo(
            input.value,
            date.value,
            description.value,
            time.value
          )
        )
        dispatch(
          ToggleListModal('List')
        )

        input.value = ''
        date.value = ''
        time.value = ''
        description.value = ''
      }}>
        <input type="radio" />
        <input ref={node => input = node} />
        <input ref={node => date = node} />
        <input ref={node => description = node} />
        <input ref={node => time = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)