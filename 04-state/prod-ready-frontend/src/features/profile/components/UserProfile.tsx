import Avatar from "../../../components/Avatar"
import Badge from "../../../components/Badge"

interface UserProfileProps {
  name: string,
  avatarUrl: string,
  role: string,
  isAdmin?: boolean
}

export default function UserProfile({ name, avatarUrl, role, isAdmin }: UserProfileProps) {
  return (
    <div className="max-w-sm flex items-center gap-4 p-6 rounded-xl shadow-sm border border-gray-100 truncate">
      <Avatar imageUrl={avatarUrl} altText={`${name}'s avatar`} size="lg"/>
      
      <div>
        <h2 className="text-xl font-extrabold text-gray-800 dark:text-gray-50">{name}</h2>
        <div className="mt-2">
          <Badge role={role} isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  )
}
