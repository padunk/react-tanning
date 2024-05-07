import viteLogo from '/vite.svg'
import { useState } from 'react'

import { createLazyFileRoute } from '@tanstack/react-router'

import reactLogo from '../assets/react.svg'
import tailwindLogo from '../assets/tailwind.svg'
import tanstackLogo from '../assets/tanstack.png'

export const Route = createLazyFileRoute('/')({
  component: App,
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center gap-x-6'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://tanstack.com' target='_blank'>
          <img src={tanstackLogo} className='logo' alt='TanStack logo' />
        </a>
        <a href='https://tailwind.com' target='_blank'>
          <img src={tailwindLogo} className='logo' alt='Tailwind logo' />
        </a>
      </div>
      <h1>React Tanning 🌴</h1>
      <p className='font-bold mt-2'>
        React + Vite + TypeScript + TanStack + Tailwind
      </p>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)} className='mb-6'>
          count is {count}
        </button>
        <p>
          Edit <code>src/routes/index.lazy.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
