import Header from './components/Header';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [input,setInput]= useState("");
  // const[counter,setCounter]= useState(0);
  // const counter = useRef(0);
  // const prevState = useRef("");
  const inputField = useRef();

  // useEffect(()=>{
  //   // console.log("rendered");
  //   // setCounter(counter+1);
  //   // counter.current = counter.current+1;
  //   prevState.current = input;
  // },[input])

  const formHandler = (e) => {
    setInput(e.target.value);    
    // "e.target.value" means we can get the value which we will write on the  input box
  }

const clickHandler= () =>{
  // inputField.current.focus();
  // inputField.current.value ='BIKASH';
  // console.log(inputField.current.value)
    inputField.current.style.border="2px solid red"
}

  return (
    <>
      <Header/>
      <input ref={inputField} value={input} onChange={formHandler} />
      {/* <h4>Application has been rendered {counter.current} times</h4>
       */}
      {/* <h4>Prev State was {prevState.current} </h4> */}
      <button onClick={clickHandler}>Click Me</button>

    </>
  );
}

export default App;
