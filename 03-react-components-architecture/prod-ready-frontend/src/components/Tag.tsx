interface TagProps {
  title: string
}

export default function Tag({ title }: TagProps) {
  return (
    <span className="px-4 py-1 rounded-full mx-1 bg-purple-800 text-gray-300">{ title }</span>
  )
}
