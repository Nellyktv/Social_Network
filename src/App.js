import './App.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import Profile from './components/Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <Header/>
     <NavBar/>
      <Routes>
          <Route path='/dialogs'  element={<Dialogs/>}/>
          <Route path='/profile' element={<Profile/>}/> 
     </Routes>
     <div className='app_wrapper-content'>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;







