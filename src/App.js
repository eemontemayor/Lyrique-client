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
  word:'',
  data:[]

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
    for( let key in res){
      if(res.hasOwnProperty(key)){
        console.log(res[key])
            this.setState({
      [key] : res[key]
    })


      }
    }

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

   
console.log('this.state', this.state)
  return (

    <div className = 'App'>
  {/* <UserContext.Provider value ={{word}}> */}
  <main className='App'>
    <Sidebar width={300} height={"100vh"}>
    <WordForm className='App__word_form'
      handleChange = {this.handleChange}
      handleWordSubmit={this.handleWordSubmit}
      />
        <WordList results = {this.state.results}
        handleWordClick={this.handleWordClick}
       />
        </Sidebar>
  {this.state.word && <WordItem word = {this.state.data}/>}
     

     






    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;