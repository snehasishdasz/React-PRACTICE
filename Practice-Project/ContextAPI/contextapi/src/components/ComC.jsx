import React ,{useContext} from 'react'
import{AppState} from "../App"
import{NameContext} from "../App"


const ComC = () => {
    const appData = useContext(AppState)
    const nameData = useContext(NameContext)
  return (
    <div className='compc'>
        <div>ComC</div>
        <h1>{appData.Data}</h1>
        <h1>Name:{nameData.Name.name}</h1>
        <h1>Age:{nameData.Name.age}</h1>
    </div>
  )
}

export default ComC