import { useState } from 'react'
import { useWebMCP } from '@mcp-b/react-webmcp'
import { z } from 'zod'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useWebMCP({
    name: 'increment_counter',
    description: 'Increment the counter by a given amount',
    inputSchema: {
      amount: z.coerce.number().int().min(1).default(1).describe('Amount to increment by'),
    },
    handler: async ({ amount }) => {
      const n = Number(amount)
      setCount((prev) => prev + n)
      return { success: true, newCount: count + n }
    },
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
