import React from 'react'

export class WordForm extends React.Component{


  render(){
    return(
        <form className="word-form" onSubmit ={this.props.handleWordSubmit}>
  
        <div className="field">
          <label>
            word
            <input 
            name='searchWord'
              type="text"
              required
              onChange={this.props.handleChange} />
          </label>
       
          <button type ='submit'>Search</button>
        </div>
      
      
      
      
      
      </form>
    )
}
}
