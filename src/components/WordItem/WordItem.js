import React from 'react'
import WordService from '../../services/word-service'
import './WordItem.css'

export default class WordItem extends React.Component{
  state={
    definitions:''
  }



    componentDidMount(){

      WordService.getWordData(this.props.word)
      .then(res=>{
        for( let key in res){
          if(res.hasOwnProperty(key)){
         
                this.setState({
          [key] : res[key]
        })
    
    
          }
        }
    
      })
    }
   
      render(){


          return (
              <div className = 'word-data-box'>
 
      </div>
  )
}
    
  
  }