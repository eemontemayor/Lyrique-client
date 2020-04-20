
import config from '../config';
// import TokenService from './TokenService';


 const WordService = {
    getRhymes(word){

  console.log('get rhymes')
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
    }




}
export default WordService