import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode,
  title?: string
}

export default function Card({ children, title }: CardProps) {
  return (
    <div className="border border-gray-100 overflow-hidden rounded-2xl shadow-lg max-w-xs w-full">
      {title && (
        <div className="border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-50">{title}</h3>
        </div>
      )}
      <div className="p-6">
        { children }
      </div>
    </div>
  )
}
