import React from 'react'
import { connect } from 'react-redux'
import './AddTodo.css'
import { addTodo,ToggleListModal } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let date
  let time
  let description

  return (
    <div id="modal" className="modal-container">
      <form id="form" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          alert('Rellene el campo title')
          return
        }else if(!date.value.trim()){
          alert('Rellene el campo date')
          return
        }else if(!time.value.trim()){
          alert('Rellene el campo time')
          return
        }else if(!description.value.trim()){
          alert('Rellene el campo description')
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
        <div id="div">
          <input type="radio" />
          <input placeholder="Title" ref={node => input = node} />
          <input placeholder="Date" ref={node => date = node} />
          <input placeholder="Time" ref={node => time = node} />
        </div>
        <div id="div">
          <textarea 
            name="textarea" 
            placeholder="Description"
            rows="10" 
            className="textArea" 
            ref={node => description = node} 
          >
          </textarea>
        </div>
        <div id="div">
          <button type="submit">
            Add Todo
          </button>
          <button onClick={
            e => {
              e.preventDefault()
              dispatch(
                ToggleListModal('List')
              )
            }}>
            Close
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)