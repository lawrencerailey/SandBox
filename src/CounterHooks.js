import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({initialNumber}) {
    
    const [count, setCount] = useState(initialNumber)
    const style = useContext(ThemeContext)
    return ( 
        <div>
        
            <button style={style} className="btn" onClick={() => setCount(prevCount => prevCount - 1)}>Minus</button>
            <span>{count}</span>
            <button style={style} className="btn" onClick={() => setCount(prevCount => prevCount + 1)}>Plus</button>

        </div>
    )
}