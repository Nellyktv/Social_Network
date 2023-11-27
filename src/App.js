import './App.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import Profile from './components/Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';







function App(props) {

console.log(props.state.messagesPage.messagesData,'wwwwwwwww');
  return (
    <BrowserRouter>
    <div className='App'>
     <Header/>
     <NavBar/>
      <Routes>
          <Route path='/dialogs'  element={<Dialogs store={props.store} />}/>
          <Route path='/profile' element={<Profile dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText} postsData={props.state.profilePage.postsData}  />}/> 
     </Routes>
     <div className='app_wrapper-content'>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;








