import { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import LlogIn from './pages/LlogIn';
import Hhome from './pages/Hhome';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/LlogIn" element={<LlogIn/>}/>
      <Route path="/Hhome" element={<Hhome/>}/>
    </Routes>
   
   </>
  );
  
  
}

export default App;
