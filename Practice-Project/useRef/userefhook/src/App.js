import Header from './components/Header';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [input,setInput]= useState("");
  // const[counter,setCounter]= useState(0);
  const counter = useRef(0);

  useEffect(()=>{
    // console.log("rendered");
    // setCounter(counter+1);
    
  })

  const formHandler = (e) => {
    setInput(e.target.value);    
    // "e.target.value" means we can get the value which we will write on the  input box
  }



  return (
    <>
      <Header/>
      <input value={input} onChange={formHandler} />
      <h4>Application has been rendered {counter} times</h4>
    </>
  );
}

export default App;
