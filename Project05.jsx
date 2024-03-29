import {useState} from "react"

function App() {
  const [color, setColor] = useState("skyblue")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}> {/*setting the color for background color */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">{/*setting the bottom bar */}
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setColor("red")}//onclick-> passes a function but if we dont pass onclick then it will give a reference of that function
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"red"}}>
            Red
          </button>

          <button onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"blue"}}>
            blue
          </button>

          <button onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"green"}}>
            green
          </button>

          <button onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"yellow"}}>
            yellow
          </button> 
          
          <button onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-white shadow-lg"
          style={{backgroundColor:"olive"}}>
            olive
          </button>

          <button onClick={() => setColor("darkgray")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"darkgray"}}>
            darkgray
          </button>

          <button onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-white shadow-lg"
          style={{backgroundColor:"purple"}}>
            purple
          </button>
          
           <button onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-black shadow-lg"
          style={{backgroundColor:"lavender"}}>
            lavender
          </button>

          <button onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full font-extrabold  text-white shadow-lg"
          style={{backgroundColor:"black"}}>
            black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
