import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='mt-10'>
      <h2 className='text-center text-3xl font-semibold'>Welcome to fullstack Engineering!</h2>
      <p className='text-center'>Boilerplate is set, now we are ready to go.</p>
    </div>
  )
}
