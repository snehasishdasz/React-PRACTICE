import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="" />
        <p className='first'>{props.title}</p><br />
        <p className='second'>Year: {props.year}</p>
        
    </div>
    
  )
}

export default Movie

// https://c8.alamy.com/comp/F2DWKY/iron-man-1951-01-movie-poster-F2DWKY.jpg