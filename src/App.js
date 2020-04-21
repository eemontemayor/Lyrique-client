import React from 'react';
import {Sidebar} from './components/Sidebar/Sidebar'
// import UserContext from './context/user-context';
import WordService from './services/word-service'
import {WordForm} from './components/WordForm/WordForm'
import './App.css'
class App extends React.Component {
state = {
  results:[],
  searchWord:'',
  selectedWord:'',

}
handleChange =(e)=>{


  this.setState({
    [e.target.name]:e.target.value

  },()=>{

    console.log(this.state)
  }
  )


}


handleClickWord = () =>{
const word = this.state.selectedWord
  WordService.getWordData(word)
  .then(res=>{
      console.log(res)
  })


}



handleWordSubmit = (e) =>{
e.preventDefault()

let word = this.state.word

WordService.getRhymes(word)
.then(res=>{
  this.setState({
    results:res

  })
})

// WordService.getSynonyms(word)
// .then(res=>{
//   console.log(res)
// })
// WordService.getAlliterations(word)
// .then(res=>{
//   console.log(res)
// })

// WordService.getSimPhrases(word)
// .then(res=>{
//   console.log(res)
// })

}

renderList = () =>{
  if(this.state.results){

  

  const list = this.state.results.map((item , index)=>{
    return <li key={index}>{item.word}</li>

  })
return (
<ul className = 'result-List'>{list}</ul>
)
  

  }
}


  render(){

   

  return (

    <div className = 'App'>
  {/* <UserContext.Provider value ={{word}}> */}
  <main className='App'>
    <Sidebar width={120} height={"100vh"}>
    <WordForm className='App__word_form'
      handleChange = {this.handleChange}
      handleWordSubmit={this.handleWordSubmit}
      />
          <button>Ryhmes</button>
          <button>Thesaurus</button>
          <button>Alliterations</button>
          <button>Homophones</button>
          <button>Nav Item</button>
        </Sidebar>
     
<Sidebar width={120} height={"100vh"}>
        {this.state.results && this.renderList()}

</Sidebar>
<Sidebar width={120} height={"100vh"}>
     {this.state.selectedWord && <h1>placeholder</h1>}

  </Sidebar>




{/* 
 
<Sidebar width={120} height={"100vh"}>
        {this.state.results && this.renderList()}

</Sidebar>
<Sidebar width={120} height={"100vh"}>
     {this.state.selectedWord && <h1>placeholder</h1>}

  </Sidebar>
   */}




    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;