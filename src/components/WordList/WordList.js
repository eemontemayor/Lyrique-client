import React from "react";
import WordItem from "../WordItem/WordItem";
import "./WordList.css";
export default function WordList(props) {
  let resList = props.results || []

let list;

  if (resList.length) {
    list = resList.map((item, index) => {
      let word = item.word;

      return (
        <li className="result_word" key={index}>
          <button
           onClick ={()=>props.handleClickWord(word)}
          >
          {item.word}

          </button>
        </li>
      );
    });
  }
  return <ul className="result_list">{list}</ul>;
}
