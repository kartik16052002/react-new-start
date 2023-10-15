import { useState } from 'react'



function App() {
  
const [color,setColor] = useState("olive");

  return (
    <>
<div className="w-screen h-screen flex flex-wrap items-center justify-center" style={{backgroundColor : color}}>
      <div className="w-auto h-auto flex gap-x-3 text-slate-50 bg-slate-100 px-10 py-5 rounded-full">
        <button className="bg-red-500" onClick={()=>setColor("red")}>Red</button>
        <button className='bg-blue-500' onClick={() => setColor("blue")}>Blue</button>
        <button className='bg-green-500' onClick={() => setColor("green")}>Green</button>
      </div>
      </div>
    </>
  )
}

export default App
