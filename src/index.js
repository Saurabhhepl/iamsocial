import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
 

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

  <DarkModeContextProvider>
    <AuthContextProvider>
      <Provider store={store}>
   
          <App />
    
      </Provider>
    </AuthContextProvider>
  </DarkModeContextProvider>

  ,
  document.getElementById('root')
);
