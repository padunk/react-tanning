import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/query')({
  component: Query,
})

function Query() {
  const { data, status } = useQuery<{ message: Array<string> }>({
    queryKey: ['fetchDogs'],
    queryFn: async () => {
      const res = await fetch(
        'https://dog.ceo/api/breed/terrier/american/images'
      )
      return await res.json()
    },
  })
  return (
    <div className='p-2'>
      <p>Watch out for Dogs...</p>
      {status === 'success' ? (
        <div className='grid grid-cols-4 gap-2'>
          {data.message.map((src: string) => {
            return (
              <div className='overflow-hidden h-64'>
                <img
                  src={src}
                  alt='dog'
                  className='w-full h-full object-cover'
                />
              </div>
            )
          })}
        </div>
      ) : (
        <p>Working...</p>
      )}
    </div>
  )
}
