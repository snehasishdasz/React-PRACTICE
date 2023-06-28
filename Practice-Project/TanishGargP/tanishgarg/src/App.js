// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import NavbarComponent from './components/NavbarComponent';
import Button from 'react-bootstrap/esm/Button';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {

  const[ name, setName] = useState("")

  const storeGFName = (e) =>{
    e.preventDefault();
    localStorage.setItem("gfName",name);
    window.location.reload();
  }

  useEffect(() => {
    alert("website Open")
  },[]);

  // console.log("Name:",name)


  return (
    <div>
    {/* <NavbarComponent title="Bikash React Pratice" />
    <NavbarComponent title="Ankita React Pratice" />
    <NavbarComponent title="Dilip React Pratice" />
    <NavbarComponent title="Ashish React Pratice" />
    <CardComponent /> */}
    <NavbarComponent title="Girlfriend Website" />
    <div className="container mt-4">

    <h4>Enter your Girlfriend name</h4>
    <input placeholder='Enter your Girlfriend name'
    style={{width:300,height:40}}
     value={name} 
     onChange={(e) => setName(e.target.value)} />
     <Button onClick={storeGFName} style={{marginLeft:10}} variant="info">Submit</Button>{' '}

     <h1> {localStorage.getItem ("gfName")} </h1>
    </div>
    </div>
  );
}

export default App;
