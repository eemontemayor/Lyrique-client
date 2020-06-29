import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
// import UserContext from './context/user-context';
import WordService from "./services/word-service";
import { WordForm } from "./components/WordForm/WordForm";
import WordList from "./components/WordList/WordList";
import WordItem from "./components/WordItem/WordItem";
import "./App.css";
class App extends React.Component {
  state = {
    synonyms: [],
    defs: [],

    syllables: [],
    word: "",
    results: [[], [], []],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleWordSubmit = (e) => {
    e.preventDefault();

    this.setState({
      word: this.state.searchWord,
    });

    WordService.getWordData(this.state.searchWord)
    .then((res) => {
      const { defs, word } = res[0];

     

      const pronunciation = res[0].tags[1].slice(4).replace(/\d+/g, "");
    
      this.setState({
        defs,
        word,
        pronunciation,
      });
    });

    WordService.getRhymes(this.state.searchWord)
    .then((res) => {
      this.setState({
        results: res,
      });
    });
  };





  handleGetAllits = () => {
    this.setState(
      {
        results: [],
      },
      () => {
        WordService.getAlliterations(this.state.word).then((res) => {
          this.setState({
            results: res,
          });
        });
      }
    );
  };



  handleGetSyns = () => {
    this.setState(
      {
        results: [],
      },
      () => {
        WordService.getSynonyms(this.state.word).then((res) => {
          this.setState({
            results: res,
          });
        });
      }
    );
  };

  handleGetRhymes = () => {
    this.setState(
      {
        results: [],
      },
      () => {
        WordService.getRhymes(this.state.word).then((res) => {
          this.setState({
            results: res,
          });
        });
      }
    );
  };

  renderDefs = () => {
    const arr = this.state.defs || [];
    if (arr.length) {
      const list = arr.map((item, index) => {
        let regEx = /\t/;

        let type = item.slice(0, item.search(regEx));

        let def = item.slice(item.search(regEx));

        return (
          <li style={{ fontSize: "14px" }} key={index}>
            {type}:{def}
          </li>
        );
      });
      return list;
    }
  };

  handleClickWord = (word) =>{

   

    this.setState(
      {
        results: [],
      },
      () => {

        WordService.getWordData(word)
        .then((res) => {
          const { defs, word } = res[0];
    
      
    
          const pronunciation = res[0].tags[1].slice(4).replace(/\d+/g, "");
        
          this.setState({
            defs,
            word,
            pronunciation,
          });
        });
    
        WordService.getRhymes(word)
        .then((res) => {
          this.setState({
            results: res,
          });
        });



      })


  }






  render() {
    const { word, pronunciation } = this.state;

    return (
      <div className="grid-container">
        <div className="menu-icon">
          <i className="fas fa-bars header__menu"></i>
        </div>

        <header className="header">
          <div className="header__search">
            Search...
            <WordForm
              classNameName="App__word_form"
              handleChange={this.handleChange}
              handleWordSubmit={this.handleWordSubmit}
            />
          </div>
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
            <div className="main-header__heading">
              {word}
              {pronunciation}
            </div>

            <div className="main-header__updates">{this.renderDefs()}</div>
          </div>

          <div className="main-overview">
            <button onClick={this.handleGetRhymes}>
              <div className="overviewcard">
                <div className="overviewcard__icon">Rhymes</div>

                <div className="overviewcard__info">similair sound</div>
              </div>
            </button>
            <button onClick={this.handleGetSyns}>
              <div className="overviewcard">
                <div className="overviewcard__icon">Synonyms</div>

                <div className="overviewcard__info">similair meaning</div>
              </div>
            </button>
            <button onClick={this.handleGetAllits}>
              <div className="overviewcard">
                <div className="overviewcard__icon">Alliterations</div>

                <div className="overviewcard__info">same inital sound/letter</div>
              </div>
            </button>
            {/* <div className="overviewcard">
        <div className="overviewcard__icon">Overview</div>

        <div className="overviewcard__info">Card</div>
      </div> */}
          </div>

          <div className="main-cards">
            <div className="card">
              1 syllable
              <WordList results={this.state.results[0]} handleClickWord={this.handleClickWord} />
            </div>
            <div className="card">
              2 syllables
              <WordList results={this.state.results[1]}  handleClickWord={this.handleClickWord}/>
            </div>

            <div className="card">
              3+ syllables
              <WordList results={this.state.results[2]}  handleClickWord={this.handleClickWord}/>
            </div>
          </div>
        </main>

        <Sidebar width={10} height={"100vh"}></Sidebar>
        <footer className="footer">
          <div className="footer__copyright">&copy; 2018 MTH</div>
          <div className="footer__signature">Made with love by pure genius</div>
        </footer>
      </div>
    );
  }
}

export default App;
