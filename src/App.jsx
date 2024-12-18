import { useState } from 'react'

function App() {
  const isGoingOut = false
  return (
    <>
      <h1>Do i feel like going out tonight</h1>
      <button>{(isGoingOut) ? 'Yes' : 'No'}</button>
    </>
  )
}

export default App
