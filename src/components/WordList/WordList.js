import React from 'react'
import WordItem from '../WordItem/WordItem'

export default function WordList(props){
    let list

    if(props.results){
  
  
     list = props.results.map((item , index)=>{
        console.log('item', item)
        let word = item.word;
        console.log('word', typeof word)
      return <li key={index}><button onClick ={()=>props.handleWordClick(word)}>
          {item.word}

          </button>

          </li>
  
    })
}
  return (
  <ul className = 'result-List'>{list}</ul>
  )
    
  
  }