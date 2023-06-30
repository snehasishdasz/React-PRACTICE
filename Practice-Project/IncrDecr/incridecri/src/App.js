import './App.css';
import Header from './components/Header';
import React, {useState} from 'react';

function App() {
  const[num, setNum] = useState(1);

   function inc(){
    setNum(num + 1);
   }
   function dec(){
    setNum(num - 1);
   }


  return (
    <div className="App">
      <Header />
      <div className='main'>
        <h1 className='heading'>{num}</h1>
        <div className="buttons">
        <button className='button' onClick={inc}>Increment</button>
        <button className='button2' onClick={dec}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
