import avatarImage from '../assets/avatar.jpeg'

function Avatar({ size = 'md' }) {
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-32 w-32',
    lg: 'h-56 w-56',
  }

  return (
    <div
      className={`${sizes[size]} overflow-hidden rounded-full border-2 border-fire-orange p-[3px] shadow-glow-fire`}
    >
      <img
        src={avatarImage}
        alt="João Vitor Silva Machado, desenvolvedor Web e Mobile"
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  )
}

export default Avatar