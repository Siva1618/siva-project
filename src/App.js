import logo from "./logo.svg";
import React, { useState} from "react";
import "./App.css";
import "./index.css";
import Modal from "./page/Modalling/Modal";
function App() {
  const[show,setShow]=useState(false)
 
  return (
    <>

      <div className="App">
      <button onClick={()=>setShow(true)}>Show Modal</button>
       <Modal  onClose={()=>setShow(false)} show={show}/> 
      </div>
      </>
  );
}

export default App;
