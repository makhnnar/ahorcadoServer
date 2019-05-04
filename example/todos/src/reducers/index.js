import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import toggleListModal from './toggleListModal'

export default combineReducers({
  todos,
  visibilityFilter,
  toggleListModal
})
