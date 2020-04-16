import {createContext} from 'react';


const UserContext = createContext({
    word:'',
    lyrics:[],

    
    sayHello:()=>{console.log('hello')}

})

export default UserContext;