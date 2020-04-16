import React from 'react';
import {Sidebar} from './components/Sidebar/Sidebar'
import UserContext from './context/user-context';
import WordService from './services/word-service'
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

WordService.getRhymes(word)
.then(res=>{
  console.log(res)
})


}




  render(){
  return (

    <div className = 'App'>
  {/* <UserContext.Provider value ={{word}}> */}

    <Sidebar width={300} height={"100vh"}>
          <h1>Ryhmes</h1>
          <h1>Thesaurus</h1>
          <h1>Alliterations</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
        </Sidebar>
    
    <main className='App'>



    <form className="word-form" onSubmit ={this.handleWordSubmit}>
  
  <div className="field">
    <label>
      word
      <input 
      name='word'
        type="text"
    
        onChange={this.handleChange} />
    </label>
    <button type ='submit'>Search</button>
  </div>




{/* 
  <div className="field">
    <label>
      E-mail
      <input
        type="text"
    
        onChange={this.handleChange} />    </label>
  </div>
  <div className="field">
    <label>
      Phone
      <input
        type="text"
  
        onChange={this.handleChange} />    </label>
  </div> */}
</form>




    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;