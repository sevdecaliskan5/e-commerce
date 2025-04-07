import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import TopNavbar from './layout/TopNavbar';
import NavBar from './layout/NavBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen h-[852px] w-[1440px] flex flex-col mx-auto">
        <TopNavbar />
        <NavBar />



      </div>
    </Router>
  );
}

export default App;

