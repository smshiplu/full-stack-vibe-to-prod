interface AvatarProps {
  imageUrl: string,
  altText: string,
  size?: "sm" | "md" | "lg"
}

export default function Avatar({ imageUrl, altText, size="md" }: AvatarProps ) {
  const sizeClass = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20"
  }

  return (
    <img 
      src={imageUrl}
      alt={altText}
      className={`${sizeClass[size]} rounded-full border-2 border-gray-800`}
    />
  )
}
