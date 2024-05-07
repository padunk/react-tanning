import '../index.css'
import '../App.css'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      })
    )
    return (
      <>
        <div className='p-2 flex gap-2'>
          <Link to='/' className='[&.active]:text-orange-500'>
            Home
          </Link>{' '}
          <Link to='/about' className='[&.active]:text-orange-500'>
            About
          </Link>
          <Link to='/form' className='[&.active]:text-orange-500'>
            Form
          </Link>
          <Link to='/table' className='[&.active]:text-orange-500'>
            Form
          </Link>
        </div>
        <hr />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </>
    )
  },
})
