import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, date ,time,description}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text+"  date:  "+date+ " time:  "+time+" description:  "+description}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Todo
