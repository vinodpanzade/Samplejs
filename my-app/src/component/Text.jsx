import React from 'react'

function Text() {
  return (
    <div>
      <h1 style={{margin:'50px'}}> <b>The Power</b> </h1>
      <h1 style={{marginLeft:'50px',marginTop:'-50px'}}><b>Of Good Components</b></h1>
      <p style={{margin:'50px'}}>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      <p style={{marginLeft:'50px',marginTop:'-40px'}}>Lorem ipsum dolor  </p>
      <button className='rounded-4  bg-primary p-2 ps-4 pe-4 border-dark border-3 border ' style={{marginLeft:'50px',marginTop:'30px', color:'black'}}> <b>Submit</b></button>
    </div>
  )
}

export default Text
