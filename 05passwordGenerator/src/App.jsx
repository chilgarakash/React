import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
    const [length,setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [charAllowed, setCharAllowed] = useState(true)
    const passwordRef = useRef(null)
    const [password, setPassword] = useState("")

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password)
    },[password])

    const passwordGenerator = useCallback(()=>{
      let pass=""
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(numberAllowed) str+="0123456789"
      if(charAllowed) str+="!@#$%^&*()~|}{[]_-+"
      for(let i=1;i<length;i++){
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },[length,numberAllowed,charAllowed,password,setPassword]);
    useEffect(()=>{
      passwordGenerator();
    },[length,numberAllowed,charAllowed]);
   
  return (
    <>
    <div style={{width:'500px'}} className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h3 className='text-white text-center my-3'>Password Generator</h3>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
        type="text"
        ref={passwordRef}
        value={password}
        className='outline-none w-full py-1 px-3 mb-3 rounded-lg'
        placeholder='Password'
        readOnly
      />
      <button  onClick ={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white shrink-0 px-3 py-0 p-0 btn-sm'>Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex-center gap-x-1">
        <input 
              type="range"
              className='cursor-pointer'
              value={length}
            
              min={6}
              max={100}
              onChange={(e)=> {setLength(e.target.value)}}
              />
              <label htmlFor="">Length : {length}</label>
      </div>
      <div className="flex-center gap-x-1">
        <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              value={length}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="">Number</label>
      </div>
      <div className="flex-center gap-x-1">
        <input 
              type="checkbox"
              defaultChecked={charAllowed}
              value={length}
              id='numberInput'
              onChange={()=>{
                setCharAllowed((prev) => !prev);
              }}
              />
              <label htmlFor="">Characters</label>
      </div>
    </div>

    </div>
    </>
  ) 
}

export default App
