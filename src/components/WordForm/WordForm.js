import React from 'react'

export class WordForm extends React.Component{
  renderButtons = () =>{
    const arr = ['rhymes', 'synonyms', 'alliterations','homophones','definition']
  
    return arr.map((i,index)=>{
      return (<li key={index}><button  name={i} value= {i} type ='radio' onClick = {this.props.handleChangeView}/>
    <label htmlFor={i}>{i}</label></li>)
      
  
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
              required
              onChange={this.props.handleChange} />
          </label>
          <ul>

          {this.renderButtons()}
          </ul>
          <button type ='submit'>Search</button>
        </div>
      
      
      
      
      
      </form>
    )
}
}
