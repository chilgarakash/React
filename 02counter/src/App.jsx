import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  const addValue=()=>{
    if(counter == 20){
      setCounter(20)
    }else{
    
      setCounter(counter+1)
    }
    
  }
  const removeValue=()=>{
    if(counter==0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      
      <h1>Chai aur React</h1>
      <h3>COunter Value : {counter}</h3>
      <button 
      onClick = {addValue}
      >Add Value {counter}</button>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>

    </>
  )
}

export default App
