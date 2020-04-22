import React from 'react'
import WordItem from '../WordItem/WordItem'

export default function WordList(props){
    let list

    if(props.results){
  
    
  
     list = props.results.map((item , index)=>{
      return <li key={index}><WordItem word = {item.word} handleWordClick = {props.handleWordClick}>

     
          
          {item.word}
      
      </WordItem>
          </li>
  
    })
}
  return (
  <ul className = 'result-List'>{list}</ul>
  )
    
  
  }