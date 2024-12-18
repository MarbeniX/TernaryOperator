import { useState } from 'react'

export default function App(){
  const[isGoingout, setIsGoingOut] = useState(false)

  function changeMing(){
    setIsGoingOut(prev => !prev)
  }

  return(
    <main>
      <h1>Do i feel like going out tonight?</h1>
      <button 
        onClick={changeMing}
        className='value'
        aria-label={`Current answer is ${isGoingout ? "Yes" : "No"}. Click to change it.`}
      >{isGoingout ?  "Yes" : "No"}</button>
    </main>
  )
}


//export default function App() {
//  const isGoingOut = false
//  return (
//    <>
//      <h1>Do i feel like going out tonight</h1>
//      <button>{(isGoingOut) ? 'Yes' : 'No'}</button>
//    </>
//  )
//}
