import { createFileRoute } from '@tanstack/react-router';
import StateChallenge from "../features/playground/components/StateChallenge";
export const Route = createFileRoute('/state-challenge')({
  component: StateChallenge,
});