import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/query')({
  component: Query,
})

function Query() {
  const { data, status } = useQuery({
    queryKey: ['fetchDogs'],
    queryFn: async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      return await res.json()
    },
  })
  return (
    <div className='p-2'>
      <p>Watch out for Dogs...</p>
      {status === 'success' ? (
        <div className='overflow-hidden w-[640px] h-[480px]'>
          <img src={data.message} alt='dog' className='w-full' />
        </div>
      ) : (
        <p>Working...</p>
      )}
    </div>
  )
}
