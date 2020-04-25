import React from 'react'
import WordService from '../../services/word-service'
import './WordItem.css'

export default class WordItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      word:'',
      definitions:[],
      synonyms:[],
      syllables:[],
      
    };
    // this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  
  componentDidMount(){



    WordService.getWordData(this.props.word)
    .then(res=>{
 
    this.setState({
      definitions:res.definitions,
      count:res.syllables.count,
      syllables:res.syllables.list,
      synonyms:res.synonyms,
      results:res.rhymes.all
    })
    })

  }
  renderDefinitions(){

    const arr = this.state.definitions

    const list = arr.map(i =>{

 
      return <li>
        ( {i.partOfSpeech} ) : {i.definition}
      </li>

    })
    return list
  }
  renderSynonyms(){

    const arr = this.state.synonyms

    const list = arr.map(i =>{

      
      return <li>
       {i}
      </li>

    })
    return list
  }
  renderSyllables(){
let syll = this.state.syllables
   

if(syll.length){

  return (
  <div>
        {this.state.count > 1 ? syll.join(" - ") : syll}
      </div>
      )

}


}


  

  render(){

    return (
      <div className = 'word-data-box'>
            
                {this.props.word}  
                {this.renderSyllables()}
                <br/>
                {/* {this.renderSynonyms()} */}
                <br/>
                <br/>
                {this.renderDefinitions()}
      </div>
  )
}
}
    
  
  