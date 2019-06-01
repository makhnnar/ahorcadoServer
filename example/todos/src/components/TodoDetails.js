import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ToggleListModal} from '../actions'

const TodoDetails = ({ id ,todos, dispatch}) => {
    console.log(JSON.stringify(todos));
    console.log(id);
    return (
        <div id="Details">
          <p>Titulo: {todos[id].text}</p>
          <p>Fecha: {todos[id].date}</p>
          <p>Hora: {todos[id].time}</p>
          <p>Descripcion: {todos[id].description}</p>
          <button className="back" onClick={()=> dispatch(ToggleListModal('List'))}>Back</button>
        </div>
    )
}

TodoDetails.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired).isRequired,
  id:PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  id:state.Show_Todo_Details,
  todos:state.todos
})

export default connect(mapStateToProps)(TodoDetails)
