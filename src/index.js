
import './index.css';
import  store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



export const rerenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} store={store}/>
    </React.StrictMode>
  );
  
  }


rerenderEntireTree(store.getState());
const state = store.getState();

store.subscribe(() => {
  rerenderEntireTree(state)
});







  