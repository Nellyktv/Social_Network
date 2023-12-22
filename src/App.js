import './App.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';








function App() {

  return (
    <div className='App'>
    
     <Header/>
     <NavBar/>
      <Routes>
          <Route path='/dialogs'  element={<DialogsContainer />}/>
          <Route path='/profile' element={<Profile />}/> 
     </Routes>
     <div className='app_wrapper-content'>
     </div>
    </div>

  );
}

export default App;








