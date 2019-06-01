import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick,id,completed,text,date,time,description}) => (
  <li
    onClick={e => {
      e.preventDefault(); 
      onClick(id);
    }
  }
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {
    "Titulo: "+text+
    " Date:  "+date+
    " Time:  "+time+
    " Description: "+description
    }
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Todo
