import React, {useState} from 'react'

function App(){
  let [counter, setCounter] = useState(1)
  //Declarative Rendering
  let newCount =() => {setCounter(counter+1)}
  window.changeCounter = setCounter
  return(
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
      {/* Virtual DOM so changeCounter is needed */}
      <button onClick={newCount}>Increase the Counter</button>
    </div>
  )
}


export default App;