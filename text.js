mport { useState } from "react";

import "./App.css";

import Alert from "./components/Alert";

import About from "./components/About";

import Navbar from "./components/Navbar";

import TextForm from "./components/TextForm";

import React from "react";

import {

  BrowserRouter as Router,

  Route,

  Routes,

} from "react-router-dom";







function App() {

  const [mode, setMode] = useState('light'); //Weather dark mode is enable or not

  const [alert, setAlert] = useState(null);



  const showAlert = (massage, type) => {

    setAlert({

      msg: massage,

      type: type

    })

    setTimeout(() => {

      setAlert(null);

    }, 1500);

  }





  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark')

      document.body.style.backgroundColor = '#010922';

      showAlert("Dark Mode has been enable", "success");

      // document.title = 'TextUtiles - Dark Mode'

      // setInterval(() => {

      //   document.title = 'TextUtiles is Amazing Utility to transform text'

      // }, 1000);

      // setInterval(() => {

      //   document.title = 'Install TextUtiles Now'

      // }, 1500);

    }

    else {

      setMode('light')

      document.body.style.backgroundColor = 'White';

      showAlert("Light Mode has been enable", "success");



    }

  }



  return (

    <>

    <div>

    

       <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

    </div>

    <Router>

      <Routes>

        <Route exact path="/about" element={<About />} />



        <Route exact path="/" element={

          <div className="container my-3">

            <TextForm showAlert={showAlert} heading="Enter The text to analyse Below" mode={mode} />

          </div>

        }/>

          

        </Routes>

       </Router>

      </> 

  );



}





export default App;