import React from "react";
import { useSelector, useDispatch } from "react-redux";

function MemeList() {
  
  let memes = useSelector(store => store.memes);
  const dispatch = useDispatch();
  //debugger;
  console.log(memes);

  function handleRemove(evt) {
    let buttonId = evt.target.id;
    dispatch({ type: "REMOVE", payload: buttonId });
  }

  return (
    <ul>
      { memes.map(meme => 
        <li className="container" key={meme.id}>
          {meme.poster}
          <button className="exes" id={meme.id} onClick={handleRemove}>X</button>
        </li>) }
    </ul>
  )
}

export default MemeList;