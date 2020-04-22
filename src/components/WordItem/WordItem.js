import React from 'react'
import WordService from '../../services/word-service'


export default class WordItem extends React.Component{
 

   
      render(){
        const word = this.props.word
          return (
              <div>
      {word}
      
      </div>
  )
}
    
  
  }