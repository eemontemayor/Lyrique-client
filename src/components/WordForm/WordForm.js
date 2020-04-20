import React from 'react'

export const WordForm = (props) =>{
    return(
        <form className="word-form" onSubmit ={props.handleWordSubmit}>
  
        <div className="field">
          <label>
            word
            <input 
            name='word'
              type="text"
          
              onChange={props.handleChange} />
          </label>
          <button type ='submit'>Search</button>
        </div>
      
      
      
      
      
      </form>
    )
    
}
