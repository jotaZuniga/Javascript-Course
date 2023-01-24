import Login from "./Login.js";
import loginWitUsername from "./async.js";

export const initListeners = () => {

  const LoginListener = new Login('', '');

  const cacheElements = {
    successBtn: document.querySelector('#loginSuccess'),
    failureBtn: document.querySelector('#loginFailure'),
    successAsyncBtn: document.querySelector('#loginSuccessAsync'),
    failureAsyncBtn: document.querySelector('#loginFailureAsync'),
  }

  try {
    cacheElements.successBtn.addEventListener('click', function(event) {
      event.preventDefault();
      LoginListener.setUser('admin');
      LoginListener.setPassword('passwd');    
      LoginListener.checkCredentials();
      
      console.log('User Login correctly:', LoginListener.getIsValidCredentials());
    });
  
    cacheElements.failureBtn.addEventListener('click', function(event) {
      event.preventDefault();
      LoginListener.setUser('jose');
      LoginListener.setPassword('123');
      LoginListener.checkCredentials();
  
      console.log('User Login correctly:', LoginListener.getIsValidCredentials());
    });


    // Async
    cacheElements.successAsyncBtn.addEventListener('click', async (ev) => {
      ev.preventDefault();
      const initInterval = setInterval(() => console.log('Checking...'), 300);
      await loginWitUsername('admin', 'passwd').then( () => {
        alert('User Logged');
        clearInterval(initInterval);
      });
    });

    cacheElements.failureAsyncBtn.addEventListener('click', async (ev) => {
      ev.preventDefault();
      const initInterval = setInterval(() => console.log('Checking...'), 300);
      await loginWitUsername('jose', '123').then( () => {
        // console.log('here');
      }).catch((error) => {
        console.log(error);
        clearInterval(initInterval);
      });
    });    

  } catch (error) {
    throw new Error(error);
  }

};