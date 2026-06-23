import type { ReactNode } from "react";

interface FeatureContainerProps {
  children: ReactNode,
  title: string,
}

export default function FeatureContainer({ children, title }: FeatureContainerProps) {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">{ title }</h1>
      <p className="my-4">{ children }</p>
    </div>
  )
}
