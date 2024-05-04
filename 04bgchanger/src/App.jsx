import { useState } from 'react'


function App() {
const [color, setColor] = useState("olive"); 
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color,minWidth:'1300px'}}>
      <div className='fixed bottom-12 flex flex-wrap inset-x-0 px-2 justify-center '>
        <div className="flex flex-wrap justify-center px-3 py-2 bg-white rounded-lg gap-3 shadow-lg">
          <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white" 
          style={{backgroundColor:'red'}}
          onClick={()=>setColor("red")}>Red</button>
           <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white" 
          style={{backgroundColor:'green'}}
          onClick={()=>setColor("green")}>Green</button>
           <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white" 
          style={{backgroundColor:'blue'}}
          onClick={()=>setColor("blue")}>Blue</button>

        </div>
      </div>
    </div>

  )
}

export default App

