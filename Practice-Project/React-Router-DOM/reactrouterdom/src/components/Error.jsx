import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
    <div>404 Page not found</div>
    <button onClick={()=> navigate(-1)} >GO BACK</button>
    </>
  )
}

export default Error