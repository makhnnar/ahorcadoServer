const toggleListModal = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_LIST_MODAL':
      return action.value
    
    default:
      return state
  }
}

export default toggleListModal

    