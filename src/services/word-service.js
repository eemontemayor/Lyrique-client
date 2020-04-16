
import config from '../config';
// import TokenService from './TokenService';
 const axios = require("axios");

 const WordService = {
    getRhymes(word){

      return  axios({
            "method":"GET",
            "url":`https://wordsapiv1.p.rapidapi.com/words/%7B${word}%7D/rhymes`,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key":"b5f70bd1c9msh133a4bbdfb3c433p1463c0jsn8429fb0c932c"
            }
            })
            .then((response)=>{
              console.log(Object(response.data))
            })
            .catch((error)=>{
              console.log(error)
            })
    }




}
export default WordService