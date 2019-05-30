const todos = (state = [
        {
          id: 0,
          text:'Gustavo',
          completed: false,
          date:'12 may',
          description:'Lo que quieras',
          time:'12:00'
        },
        {
          id: 1,
          text:'Ant',
          completed: false,
          date:'13 may',
          description:'Lo que quieras',
          time:'11:00'
        }

  ], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          date:action.date,
          description:action.description,
          time:action.time
        }
      ]

    default:
      return state
  }
}

export default todos
