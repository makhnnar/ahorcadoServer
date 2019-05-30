let nextTodoId = 2
export const addTodo = (text,date,description,time) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  date,
  description,
  time
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const Show_Todo_Details = (id) => ({
  type:'TODO_DETAILS',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ToggleListModal = (value) => ({
  type:'TOGGLE_LIST_MODAL',
  value
})
