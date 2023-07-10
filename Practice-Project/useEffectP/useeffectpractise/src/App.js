
import './App.css';
import Header from "./components/Header";
import React, {useState, useEffect} from 'react';


function App() {

  const[state,setState]= useState(2);
  const[data, setData] = useState();

  useEffect(() => {
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
    document.title = `(${state}) Employees online`;
  },[state])

  // [] means dependency is null so no performance is work on the page.
  // [state] means useEffect is only work for "state" property which is used in 1st button.


  return (
    <>
      <Header />
      <button onClick={()=>setState(state+1)}>Clickme {state}</button>
      {
        data.map((element,index)=>{
          return(
            <div className='data' key={index}>
              <h4 className='data1'>{element.firstName}</h4>
              <h4 className='data2'>{element.lastName}</h4>
              <h4 className='data3'>{element.email}</h4>
              
            </div>
          )
        })
      }

    </>
  );
}

export default App;
