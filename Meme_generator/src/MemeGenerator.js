import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function MemeGenerator() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ topText:'', bottomText: '', imageUrl: ''});

  function handleSubmit(evt) {
    evt.preventDefault();
    let newMeme = { 
                  poster: 
                    <div className="poster">
                      <div className="topTextString">{formData.topText}</div>
                      <img src={formData.imageUrl} alt="here's a pic" />
                      <div className="bottomTextString">{formData.bottomText}</div>
                    </div>,
                  id: uuid() 
                }
    
    dispatch({ type: "SUBMIT", payload: newMeme });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Top Text Here</label>
        <input name="topText" value={formData.topText} onChange={handleChange} />
        <br/>
        <label>Bottom Text Here</label>
        <input name="bottomText" value={formData.bottomText} onChange={handleChange} />
        <br/>
        <label>Image URL Here</label>
        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}


export default MemeGenerator;

// https://react-hook-form.com/