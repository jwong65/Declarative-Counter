import React, {useState} from 'react'

function App(){
  let [counter, changeCounter] = useState(1)
  //Declarative Rendering
  window.changeCounter = changeCounter
  return(
  <h1>{counter}</h1>
  )
}


export default App;