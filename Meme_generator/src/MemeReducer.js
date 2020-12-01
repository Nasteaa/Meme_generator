const INITIAL_STATE = { memes: [] };

// function memeReducer(state = INITIAL_STATE, action) {
//   if(action.type === "SUBMIT") {
//     return {...state, memes: [...state.memes, action.payload]}  
//   }
//   if(action.type === "REMOVE") {
//     return {...state, memes: state.memes.filter(meme => meme !== action.payload)}
//   }
  
//   return state;
// }

function memeReducer(state = INITIAL_STATE, action) {
  switch (action.type) { 
    case "SUBMIT":
      return {...state, memes: [...state.memes, action.payload]}
   
    case "REMOVE":
      return {...state, memes: state.memes.filter(meme => meme.id !== action.payload)}

    default:
      return state;
  }
}

export default memeReducer;


