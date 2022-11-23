import {React, useState }from 'react'

const ClickTracker = () => {
    const [count, setCount] = useState(0);
  return (
    
    <>
    <div>ClickTracker</div>
    <h1>Click numero: {count} </h1>

    <button onClick={() => {
        setCount(count + 1)
    }}>Haz Click</button>

    </>
  )
}

export default ClickTracker