import axios from 'axios';


const Request = {};

let CancelToken = axios.CancelToken;
let cancel;

Request.make = (ops) => {
    let options = ops || {};
    let headers = {};
    options.headers = options.headers || {};
    headers = {
       ...options.headers,
       'Content-type': 'application/json',

    }

    const defer = new Promise(function(resolve, reject) {
      axios({
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      }),
       url: options.url,
       method: options.method,
       headers:headers,
       baseURL : options.baseURL,
       params: options.params,
       data: options.data || {}
     })
     .then((response)=>{
       resolve(response);
     })
     .catch((error)=>{
      if (axios.isCancel(error)){
        
      }
       if(error.response){
         reject(error.response)
       }else{
         reject('ERROR_NO_RESPONSE');
       }
     })
    });

    return defer;
}

Request.get = (options) => {
  options.method = 'GET';
  return Request.make(options);
}

Request.post = (options) => {
  options.method = 'POST';
  return Request.make(options);
}

Request.delete = (options) => {
  options.method = 'DELETE';
  return Request.make(options);
}

Request.cancel = () => {
  cancel && cancel();
}


export default Request;
