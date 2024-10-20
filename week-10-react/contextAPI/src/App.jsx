
import { useState } from 'react'
import './App.css'

function App() {
  const [bulbOn, setbulbOn] = useState(true)
  return (
    <>
    {/* //creating a bulb toggler */}
    <Light bulbOn={bulbOn} setbulbOn={setbulbOn}/>

    </>
  )
}

function Light({bulbOn,setbulbOn}){
  return (
  <div>
    <Bulb bulbOn={bulbOn}/>
    <BulbToggler bulbOn={bulbOn} setbulbOn={setbulbOn}/>
  </div>
  )
}

function Bulb({bulbOn}){
  return (
    <div>
      {bulbOn?"Bulb is On":"Bulb is Off"}
    </div>
  )
}

function BulbToggler({bulbOn, setbulbOn}){

  function toggler(){
    setbulbOn(!bulbOn)
  }

  return (
    <button onClick={toggler}>Toggle the bulb</button>
  )
}


export default App
