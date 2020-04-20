import React from 'react';
import {Sidebar} from './components/Sidebar/Sidebar'
// import UserContext from './context/user-context';
import WordService from './services/word-service'
import {WordForm} from './components/WordForm/WordForm'
import './App.css'
class App extends React.Component {

handleChange =(e)=>{


  this.setState({
    [e.target.name]:e.target.value

  },()=>{

    console.log(this.state)
  }
  )


}


handleWordSubmit = (e) =>{
e.preventDefault()

let word = this.state.word

// WordService.getRhymes(word)
// .then(res=>{
//   this.setState({
//     rhymeList:res

//   })
// })
// WordService.getSyllables(word)
// .then(res=>{
//   console.log(res)
// })

// WordService.getSynonyms(word)
// .then(res=>{
//   console.log(res)
// })
WordService.getAlliterations(word)
.then(res=>{
  console.log(res)
})
}




  render(){
  return (

    <div className = 'App'>
  {/* <UserContext.Provider value ={{word}}> */}
{/* 
    <Sidebar width={300} height={"100vh"}>
          <h1>Ryhmes</h1>
          <h1>Thesaurus</h1>
          <h1>Alliterations</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
        </Sidebar> */}
    
    <main className='App'>


    <WordForm className='App__word_form'
      handleChange = {this.handleChange}
      handleWordSubmit={this.handleWordSubmit}
    />
  




    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;