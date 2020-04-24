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
  synonyms:[],
  definitions:[],
  syllables:[],
  word:'',
  rhymes:[]

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


WordService.getWordData(word)
.then(res=>{
  console.log(res)
  // for( let key in res){
  //   if(res.hasOwnProperty(key)){
  //     console.log(key)
  //         this.setState({
  //   [key]:res[key]
  // })


  //   }
  // }
this.setState({
  // definitions:res.definitions.definition,
  // partOfSpeech:res.definitions.partOfSpeech,
count:res.syllables.count,
  syllables:res.syllables.list,
  synonyms:res.synonyms,
  results:res.rhymes.all
},()=>{
  console.log(this.state)
})
})

  WordService.getRhymes(word)
.then(res=>{
  this.setState({
    rhymes:res

  },()=>{console.log(this.state.rhymes)})
})





}


//TODO: USE CONTEXT
        // CHANGE CLASS NAMES
        //fix side bar toggle / either use customizable sidebar or use jquery



  render(){



  return (





    <div className="grid-container">
   <div className="menu-icon">
    <i className="fas fa-bars header__menu"></i>
  </div>
   
  <header className="header">
    <div className="header__search">Search...
    <WordForm classNameName='App__word_form'
      handleChange = {this.handleChange}
      handleWordSubmit={this.handleWordSubmit}
      /></div>
    <div className="header__avatar">Your face</div>
  </header>

  <aside className="sidenav">
    <div className="sidenav__close-icon">
      <i className="fas fa-times sidenav__brand-close"></i>
    </div>
    <ul className="sidenav__list">
      <li className="sidenav__list-item">Item One</li>
      <li className="sidenav__list-item">Item Two</li>
      <li className="sidenav__list-item">Item Three</li>
      <li className="sidenav__list-item">Item Four</li>
      <li className="sidenav__list-item">Item Five</li>
    </ul>
  </aside>

  <main className="main">
    <div className="main-header">
        
      <div className="main-header__heading">Hello User</div>
 
        {this.state.word}
        {this.state.syllables}
        {this.state.partOfSpeech}
        {this.state.definitions}
      <div className="main-header__updates">Recent Items</div>
    </div>

    <div className="main-overview">
      <div className="overviewcard">
        <div className="overviewcard__icon">Rhymes</div>
           {/* <WordList results = {this.state.results}/> */}
        <div className="overviewcard__info">Card</div>
      </div>
      <div className="overviewcard">
        <div className="overviewcard__icon">Synonyms</div>
            {/* <WordList results = {this.state.synonyms}/> */}
        <div className="overviewcard__info">Card</div>
      </div>
      <div className="overviewcard">
        <div className="overviewcard__icon">Rhymes2</div>
        {/* <WordList results = {this.state.rhymes}/> */}
        <div className="overviewcard__info">Card</div>
      </div>
      <div className="overviewcard">
        <div className="overviewcard__icon">Overview</div>
        <div className="overviewcard__info">Card</div>
      </div>
    </div>

    <div className="main-cards">
      <div className="card">1-4 syllables 
      {/* <WordList handleWordClick = {this.handleWordClick}results = {this.state.results}/> */}

      </div>
      <div className="card">4-8
      {/* <WordList results = {this.state.results}/> */}
      </div>

      <div className="card">8+
      {/* <WordList results = {this.state.results}/> */}

      </div>
    </div>
  </main>

  <Sidebar width={10} height={"100vh"}>
  

 
  </Sidebar>
  <footer className="footer">
    <div className="footer__copyright">&copy; 2018 MTH</div>
    <div className="footer__signature">Made with love by pure genius</div>
  </footer>
</div>
  );
}
}

export default App;