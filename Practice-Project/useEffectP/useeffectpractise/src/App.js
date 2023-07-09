
import './App.css';
import Header from "./components/Header";
import React, {useState, useEffect} from 'react';


function App() {

  const[state,setState]= useState(0);

  useEffect(()=>{
    console.log("useEffect Called");
  })
  console.log("Function body");

  return (
    <div className="App">
      <Header />
      <button onClick={()=>setState(state+1)}>Clickme {state}</button>
    </div>
  );
}

export default App;
