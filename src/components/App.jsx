import React, { useState } from "react";



function App() {
    const [count, setCount] = useState(0)
    function oshirish() {
        setCount(count + 500
            
        )
    } 
    // ayirish
    function ayirish() {
        setCount(count - 500)
    } 
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ayirish}>-</button>
            <button onClick={oshirish}>+</button>
            
        </div>
    )
}

export default App;