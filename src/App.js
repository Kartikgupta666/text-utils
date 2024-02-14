
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import React, { useState } from 'react'
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
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
      <Router>
        <Navbar mode={mode} toggelmode={toggelmode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
{/* exact path is used to match exact file path and react do partial matching thats why we used this {exact path} keyword */}
            <Route exact path="/" element={<Textform mode={mode} showAlert={showAlert} heading="Enter the text to analyse below" />} />

            <Route exact path='/about' element={<About />} />

          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
