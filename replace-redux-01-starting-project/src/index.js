import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// **CONSTEM STORE **
import ConfigureProductStore from './customStore/configureStore';
ConfigureProductStore();
// ** CONTEXT**

// import {ProdContextProvider} from './context/context'


// **REDUX**
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);


ReactDOM.render(
  // <Provider>
  // <ProdContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </ProdContextProvider>
  // </Provider>
  document.getElementById('root')
);
