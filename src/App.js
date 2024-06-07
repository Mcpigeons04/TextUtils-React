// import logo from './logo.svg';
// import { useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/about';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode is enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enabled","success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" style={{ color: mode === 'dark' ? 'white' : '#042743' }}>
        <h1 style={{ color: mode === 'dark' ? 'white' : '#042743' }}>Enter the Text to Analyse below</h1>
        <TextForm showalert={showalert} heading="Enter the Text to Analyse below" mode={mode} />
        {/* <About/> */}
       
      </div>
    </>
  );
}

export default App;

//showalert consists of setalert and alert and setalert consists of message and type of the alert.showlaert displays the setalert with alert 