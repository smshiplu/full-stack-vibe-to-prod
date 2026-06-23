import { createFileRoute } from '@tanstack/react-router'
import { Compositions } from '../features/playground/components/Composition'

export const Route = createFileRoute('/composition')({
  component: Compositions,
})

