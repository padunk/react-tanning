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
        <div className='p-2 flex gap-2 absolute top-0 left-0 w-full border-b-2 border-white'>
          <Link to='/' className='[&.active]:text-orange-500'>
            Home
          </Link>{' '}
          <Link to='/query' className='[&.active]:text-orange-500'>
            Query
          </Link>
          <Link to='/form' className='[&.active]:text-orange-500'>
            Form
          </Link>
          <Link to='/table' className='[&.active]:text-orange-500'>
            Table
          </Link>
        </div>
        <QueryClientProvider client={queryClient}>
          <div className='mt-32'>
            <Outlet />
          </div>
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </>
    )
  },
})
