
import './index.css';
import  store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




export const rerenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
    <Provider store={store}>
      <App/>
      </Provider>
    </BrowserRouter>
  );
  
  }


rerenderEntireTree(store.getState());
const state = store.getState();

store.subscribe(() => {
  rerenderEntireTree(state)
});







  