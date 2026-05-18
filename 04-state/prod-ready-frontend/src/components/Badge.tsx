interface BadgeProps {
  role: string,
  isAdmin?: boolean
}

export default function Badge({ role, isAdmin=false }: BadgeProps) {
  return (
    <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-lg truncate ${isAdmin ? "bg-purple-800 text-white" : "bg-green-800 text-white"}`}>
      {role}
    </span>
  )
}
