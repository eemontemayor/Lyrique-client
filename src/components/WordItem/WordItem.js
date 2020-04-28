import React from "react";
import WordService from "../../services/word-service";
import "./WordItem.css";

export default class WordItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      definitions: [],
      synonyms: [],
      syllables: [],
      pronunciation:[]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

   
  }
  renderDefinitions() {
    const arr = this.state.definitions;

    const list = arr.map((i) => {
      return (
        <li>
          ( {i.partOfSpeech} ) : {i.definition}
        </li>
      );
    });
    return list;
  }
  renderSynonyms() {
    const arr = this.state.synonyms;
  
    const list = arr.map((i) => {
    return <li>{i}</li>;
    });
    return list;
  }
  renderSyllables() {
    let syll = this.state.syllables;

    if (syll.length) {
      return <div>{this.state.count > 1 ? syll.join(" - ") : syll}</div>;
    }
  }
  renderPronunciation() {
    const pronunciation = this.state.pronunciation

    if (pronunciation.length) {
    return <div>{pronunciation}</div>;
    }
  }


  render() {
    return (
      <>
      <div className="word-data-box">
      <div className = 'word-basic-data'>

        {this.props.word}
        {this.renderSyllables()}
        {this.renderPronunciation()}
      </div>
     <div className = 'word-defs'>

        {/* {this.renderSynonyms()} */}
        
        {this.renderDefinitions()}
     </div>
      </div>
      </>
    );
  }
}
