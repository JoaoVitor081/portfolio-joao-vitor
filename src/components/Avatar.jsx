// PLACEHOLDER: foto/avatar do João ainda não definida.
// Quando a foto estiver disponível, importe e substitua o bloco de iniciais:
// import avatarImg from '../assets/avatar.jpg'
// <img src={avatarImg} alt="João Vitor Silva Machado, desenvolvedor Web e Mobile" className="h-full w-full rounded-full object-cover" />

function Avatar({ size = 'md' }) {
    const sizes = {
      sm: 'h-12 w-12 text-sm',
      md: 'h-32 w-32 text-2xl',
      lg: 'h-56 w-56 text-4xl',
    }
  
    return (
      <div
        role="img"
        aria-label="Placeholder da foto de João Vitor Silva Machado"
        className={`${sizes[size]} rounded-full bg-fire-gradient p-[3px] shadow-glow-fire`}
      >
        <div
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center rounded-full bg-hack-black font-display font-bold text-fire-gradient"
        >
          JV
        </div>
      </div>
    )
  }
  
  export default Avatar