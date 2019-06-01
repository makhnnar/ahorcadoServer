const Show_Todo_Details = (state = 0 , action) => {
  switch (action.type) {
    case 'TODO_DETAILS':
      state = action.id;
      return state    
    default:
      return state
  }
}

export default Show_Todo_Details

    