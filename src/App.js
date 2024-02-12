
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')
  const toggelmode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3a3c3e';
      document.body.style.textColor = '#FFF';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFF';

    }
  }

  return (
    <>
      <Navbar mode={mode} toggelmode={toggelmode} />
      <div className="container my-3">
        <Textform  mode={mode} heading="Enter the text to analyse below" />
      </div>
    </>
  );
}

export default App;
