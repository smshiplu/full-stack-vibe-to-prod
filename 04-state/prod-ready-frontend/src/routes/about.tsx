import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mt-10'>
      <h2 className='text-3xl font-semibold'>About!</h2>
      <p className=''>Boilerplate si set, now ready to go.</p>
    </div>
  )
}
