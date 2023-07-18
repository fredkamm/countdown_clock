import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dayjs from 'dayjs'

//import dayjs from 'dayjs' // ES 2015


function App() {
  const [count, setCount] = useState(0)

  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  console.log(now);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{now}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
