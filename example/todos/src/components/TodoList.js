import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, add_details }) => {  

  if(todos.length > 0){

  return( 
    <div>
        <ul>
          {todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={(id) => add_details('Details',id)}
            /> 
          )}
        </ul>
        
        <button id="flotant" onClick={() => add_details('Add',0)}>
          +
        </button>
    </div>
    )
  }else{
    return(
      <div>
        <p id="agregar">Agregue un todo a la lista</p>

        <button id="flotant" onClick={() => add_details('Add',0)}>
          +
        </button>
      </div> 
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  add_details: PropTypes.func.isRequired
}

export default TodoList
