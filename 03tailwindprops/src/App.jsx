import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let someobj = {
    username:"Akash",
    age:21
  }
  let myArr = ['1','2','3'];
  return (
    <>
      <h3 className='bg-green-400 p-4 text-black rounded-xl'>React with Tailwind CSS</h3>
      
    <Card  channelName = "Chai aur Code" btnText = "Click Me" someobj={someobj} myArr={myArr}/>
    <Card  channelName = "Sky aur Code" />

    </>
  )
}

export default App
