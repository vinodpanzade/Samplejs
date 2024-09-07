
import React from 'react'
import Navbar from './component/Navbar'
import Text from './component/Text'
import './App.css';
function App() {
  return (
    <div  >
     <Navbar/>
     <Text/>
     {/* position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1; */}
     <img   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSefCnbNY-UxbeNc6OnTII92Vq2wbJuqL7w&s" alt=""  style={{position: 'absolute',
  borderRadius: '20px', 
  height: '836px',
  width: '100%',
  marginTop: '-424px',
  marginRight: '-88px',
  zIndex: '-22',}}/>
    </div>
  )
}

export default App

