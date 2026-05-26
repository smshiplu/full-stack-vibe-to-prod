import { createFileRoute } from '@tanstack/react-router';
import EffectChallenge from "../features/playground/components/EffectChallenge";

export const Route = createFileRoute('/effect-challenge')({
  component: EffectChallenge,
});
