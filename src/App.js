import React from 'react';
import {Sidebar} from './components/Sidebar/Sidebar'
// import UserContext from './context/user-context';
import WordService from './services/word-service'
import {WordForm} from './components/WordForm/WordForm'
import WordList from './components/WordList/WordList'
import WordItem from './components/WordItem/WordItem'
import './App.css'
class App extends React.Component {
state = {
  results:[],
  searchWord:'',
  word:'',

}
handleChange =(e)=>{


  this.setState({
    [e.target.name]:e.target.value

  },()=>{

    console.log(this.state)
  }
  )


}



handleWordClick = (word) =>{
  console.log(word)
  WordService.getWordData(word)
  .then(res=>{
    console.log('res', res)

    // this.setState({
    //   data : res
    // })
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


// WordService.getAlliterations(word)
// .then(res=>{
//   console.log(res)
// })



}






  render(){

   

  return (

    <div className = 'App'>
  {/* <UserContext.Provider value ={{word}}> */}
  <main className='App'>
    <Sidebar width={150} height={"100vh"}>
    <WordForm className='App__word_form'
      handleChange = {this.handleChange}
      handleWordSubmit={this.handleWordSubmit}
      />
        </Sidebar>
       <Sidebar width={150} height={"100vh"}>
       <WordList results = {this.state.results}
        handleWordClick={this.handleWordClick}
       />
</Sidebar>

     

     






    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;