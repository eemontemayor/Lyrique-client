import React from 'react'
import WordItem from '../WordItem/WordItem'
import './WordList.css'
export default function WordList(props){
    let list

    if(props.results){
  
  
     list = props.results.map((item , index)=>{
     
        let word = item.word;
    
      return <li className = 'result_word' key={index}>
        {/* <button */}
      {/* //  onClick ={()=>props.handleWordClick(word)} */}
      {/* > */}
          {item.word}

          {/* </button> */}

          </li>
  
    })
}
  return (
  <ul className = 'result_list'>{list}</ul>
  )
    
  
  }