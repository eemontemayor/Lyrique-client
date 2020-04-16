import React from 'react';
import {Sidebar} from './components/Sidebar/Sidebar'
import UserContext from './context/user-context';
class App extends React.Component {

handleChange =(e)=>{


  this.setState({
    [e.target.name]:e.target.value

  },()=>{

    console.log(this.state)
  }
  )


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



    <div className="word-form">
  
  <div className="field">
    <label>
      word
      <input 
      name='word'
        type="text"
    
        onChange={this.handleChange} />
    </label>
  </div>
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
  </div>
</div>




    </main>
  {/* </UserContext.Provider> */}
    </div>
  );
}
}

export default App;