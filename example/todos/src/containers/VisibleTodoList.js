import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { ToggleListModal } from '../actions'
import { VisibilityFilters } from '../actions'
import { Show_Todo_Details } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  add_details:(text,id) => {
    dispatch(ToggleListModal(text));
    dispatch(Show_Todo_Details(id));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
