import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { updateNewPost } from './redux/state';
import { addPost } from './redux/state';
import state from './redux/state';




export const rerenderEntireTree = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </React.StrictMode>
  );
  
  
  }

  