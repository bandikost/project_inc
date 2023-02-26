
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profilecontent from './components/Profilecontent';
import MyPosts from './components/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (

    <div className="App">
      <Header />
      <div className='App-wrapper'>      
      <Navbar />
      <Profilecontent />
      <Dialogs />     
      </div>
    </div>
    
  );
}

export default App;
