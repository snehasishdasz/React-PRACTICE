import Header from "./components/Header"
import './App.css';
import { useState, createContext, useContext } from "react";
import ComA from "./components/ComA";
// import ComB from "./components/ComB";
// import ComC from "./components/ComC";

const AppState = createContext();
const NameContext = createContext();   

function App() {
  const[Data,setData]=useState("Details");
  const [Name,setName]=useState({name:"Snehasish",age:21});
  return (
    <>
    <AppState.Provider value={{Data}}>
  <NameContext.Provider value={{Name}}>
      <Header/>
      <ComA  />
    </NameContext.Provider>
    </AppState.Provider>

    </>
  );
}

export default App;
export {AppState,NameContext}