import Header from "./components/Header"
import './App.css';
import { useState, createContext } from "react";
import ComA from "./components/ComA";
// import ComB from "./components/ComB";
// import ComC from "./components/ComC";

const AppState = createContext();

function App() {
  const[data,setData]=useState("xyz")
  return (
    <>
    <AppState.Provider value={data}>
      <Header/>
      <ComA  />
    </AppState.Provider>
    </>
  );
}

export default App;
export {AppState}