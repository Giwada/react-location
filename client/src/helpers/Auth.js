import axios from 'axios';

function setAuthToken(token){
    if (token) {
      axios.defaults.headers.common['token'] = `${token}`
    }else{
      delete axios.defaults.headers.common['token']
    }
  }
    
export {setAuthToken};