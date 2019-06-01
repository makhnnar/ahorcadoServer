import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import toggleListModal from './toggleListModal'
import Show_Todo_Details from './Show_Todo_Details'

export default combineReducers({
  todos,
  visibilityFilter,
  toggleListModal,
  Show_Todo_Details
})
