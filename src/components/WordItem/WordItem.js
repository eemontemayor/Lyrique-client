import React from 'react'
import WordService from '../../services/word-service'
import './WordItem.css'

export default class WordItem extends React.Component{
 

   
      render(){
      console.log('this.props', this.props)
          return (
              <div className = 'word-data-box'>
   
      {this.props.word}
      </div>
  )
}
    
  
  }