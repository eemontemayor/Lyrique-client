import React from 'react'

export class WordForm extends React.Component{
  renderButtons = () =>{
    const arr = ['rhymes', 'synonyms', 'alliterations','homophones']
  
    return arr.map(i=>{
      return <button key ={i} type ='click' onClick = {this.props.handleChangeView}>
        {i}
      </button>
  
    })
  
  }

  render(){
    return(
        <form className="word-form" onSubmit ={this.props.handleWordSubmit}>
  
        <div className="field">
          <label>
            word
            <input 
            name='word'
              type="text"
          
              onChange={this.props.handleChange} />
          </label>
          {this.renderButtons()}
          <button type ='submit'>Search</button>
        </div>
      
      
      
      
      
      </form>
    )
}
}
