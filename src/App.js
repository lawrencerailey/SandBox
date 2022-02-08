import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'


export const ThemeContext = React.createContext()

function App() {

  const [theme, setTheme] = useState()

  return (
    <ThemeContext.Provider value={ { backgroundColor: theme } }>
    <p>First Counter</p>
    <Counter initialNumber={0} />
    <p>Second Counter</p>
    <CounterHooks initialNumber={0} />
    <button onClick={() => setTheme(prevTheme => { 
      return prevTheme == 'red' ? 'blue' : 'red'
    })}>Change Color</button>
    </ ThemeContext.Provider>
  )
}

export default App;
