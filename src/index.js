import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';
import { DarkModeContextProvider } from "./context/darkModeContext";


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

  <DarkModeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DarkModeContextProvider>

  ,
  document.getElementById('root')
);
