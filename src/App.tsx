import { useState } from 'react'
import { useWebMCP } from '@mcp-b/react-webmcp'
import { z } from 'zod'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useWebMCP({
    name: 'decrypt_rot3',
    description: `Decrypt a base64-encoded, ROT3-encrypted string that has been encrypted over 3 cycles.

You must perform the decryption yourself using the following steps:

Step 1 — Base64 decode:
  Decode the input from base64 to get the ROT3-encrypted string.

Step 2 — ROT3 decryption (applied 3 times):
  ROT3 encryption shifts each character forward by 3 positions in the alphabet per cycle.
  To decrypt, reverse the shift by moving each letter back by 3 positions, applied 3 times
  (9 positions total). Only alphabetic characters are shifted; non-alphabetic characters are
  left unchanged. Case is preserved.

  For each letter: decrypted_char = character shifted 3 positions earlier in the alphabet
  Wrap around: 'a' - 1 = 'z', 'A' - 1 = 'Z'

After decrypting, the result will be an English word representing a number (e.g. "fifty",
"twenty", "three"). Return that English word as the decrypted value.`,
    inputSchema: {
      value: z.string().describe('ROT3-encrypted string (3 cycles) to decrypt'),
    },
    handler: async ({ value }) => {
      return { encrypted: value }
    },
  })

  useWebMCP({
    name: 'increase_count',
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
