import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (

      <div className='w-full h-screen duration-200'
        style={{
          backgroundColor: color
        }}
      >
        <div className='fixed bottom-12 flex justify-center flex-wrap inset-x-0 px-2'>
          <div className='bg-white flex justify-center flex-wrap gap-3 shadow-lg px-3 py-2 rounded-2xl'>
            <button onClick={() => setcolor("red")}
              className='outline-none px-4 py-2 shadow-lg rounded-xl' style={{
                backgroundColor: "#D20103"
              }}>Red</button>
            <button onClick={() => setcolor("green")}
              className='outline-none px-4 py-2 shadow-lg rounded-xl'
              style={{
                backgroundColor: "green"
              }}>Green</button>
            <button onClick={() => setcolor("aqua")}
              className='outline-none px-4 py-2 shadow-lg rounded-xl' style={{
                backgroundColor: "aqua"
              }}>Aqua</button>
            <button onClick={() => { setcolor("yellow") }}
              className='outline-none px-4 py-2 shadow-lg rounded-xl' style={{
                backgroundColor: "yellow"
              }}>Yellow</button>
            <button onClick={() => setcolor("blue")}
              className='outline-none px-4 shadow-lg rounded-xl' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setcolor("pink")}
              className='outline-none px-4 py-2 shadow-lg rounded-xl' style={{
                backgroundColor: "pink"
              }}>Pink</button>
          </div>
        </div>

      </div>

  
  )
}

export default App
