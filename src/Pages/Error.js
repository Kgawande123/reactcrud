import React from 'react'
import Img from'../Pages/download.png'

const Error = () => {
  return (
    <div>
        <h1>Page Not Found!!!</h1>
        <h2>Error 404</h2>
        <img src={Img} alt='error 404' width={400} className='rounded-5'/>
    </div>
  )
}

export default Error