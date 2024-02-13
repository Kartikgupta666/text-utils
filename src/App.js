
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState( null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
  }

  const toggelmode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3a3c3e';
      document.body.style.textColor = '#FFF';
      showAlert("Dark mode has been enabled", " success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFF';
      showAlert("Light mode has been enabled", " success");

    }
  }

  return (
    <>
      <Navbar mode={mode} toggelmode={toggelmode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform mode={mode} heading="Enter the text to analyse below" />
      </div>
    </>
  );
}

export default App;
