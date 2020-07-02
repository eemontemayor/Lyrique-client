
import config from '../config';
// import TokenService from './TokenService';


 const WordService = {

  getSearchResults(word='',type='rhymes'){

  
    return fetch(`${config.API_ENDPOINT}/word/${type}/${word}`,{
      method:'GET',
      headers:{
        'content-type':'application/json',
        // 'authorization':`bearer ${TokenService.getAuthToken()}`,
      },



    })
    .then((res) => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .catch(error => {
      console.error({error})
    })

  },










    getRhymes(word){


      return fetch(`${config.API_ENDPOINT}/word/rhymes/${word}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },


    getAlliterations(word){


      return fetch(`${config.API_ENDPOINT}/word/alliterations/${word}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },

    getHomophones(word){


      return fetch(`${config.API_ENDPOINT}/word/homophones/${word}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },

    getWordData(word){
      return fetch(`${config.API_ENDPOINT}/word/data/${word}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },


    getSynonyms(word){
      return fetch(`${config.API_ENDPOINT}/word/synonyms/${word}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },

    getSimPhrases(phrase){

    // TO-DO : ADD INPUT VALIDATION HERE

      // let regEx = /\/

      const UrlPhrase = phrase.split(' ')


      return fetch(`${config.API_ENDPOINT}/word/similairPhrases/${UrlPhrase}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          // 'authorization':`bearer ${TokenService.getAuthToken()}`,
        },
  


      })
      .then((res) => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .catch(error => {
        console.error({error})
      })
    },



}
export default WordService