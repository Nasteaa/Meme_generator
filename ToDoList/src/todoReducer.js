const INITIAL_STATE = { todos: [] };


function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) { 
    case "SUBMIT":
      return {...state, memes: [...state.todos, action.payload]}
   
    case "REMOVE":
      return {...state, memes: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}

export default todoReducer;
