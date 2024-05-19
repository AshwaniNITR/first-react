// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
 const[mode,setmode]=useState("light");
 const[navtext,setnavtext]=useState("Enable Dark Mode");
 const[tarea,settarea]=useState({
  backgroundColor:"white",
  color:"black"
 })
 const[alert,setAlert]=useState(null);
 function showAlert(message,type){
 setAlert({
  msg:message,
  type:type
 })
 setTimeout(() => {
   setAlert(null);
 },1500);
 }
 function togglemode(){
  if(mode==="light"){
    setmode("dark");
    document.querySelector("body").style.backgroundColor="#042743";
    document.querySelector("body").style.color="white";
    settarea({
      backgroundColor:"grey",
      color:"white",
      border:"2px solid aqua"
    })
    setnavtext("Enable Light Mode");
    showAlert("dark mode has been enabled","success");
   }
   else{
    setmode("light");
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.color="black";
    settarea({
      backgroundColor:"white",
      color:"black"
    })
    setnavtext("Enable Dark Mode");
    showAlert("light mode has been enabled","success");
   }
 }
  return (
    // <Router>
   <>
   <Navbar title="Text Analyzer" mode={mode} togglemode={togglemode} text={navtext} />
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform tarea={tarea} showAlert={showAlert} />} />
          </Routes> */}
   <Textform tarea={tarea} showAlert={showAlert} />
   </div>
   </>
  //  </Router>
  );
}
export default App;
