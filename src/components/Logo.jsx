function Logo() {
    return (
      <a
        href="#home"
        aria-label="João Vitor Silva Machado — voltar ao início"
        className="group flex items-center gap-2 font-mono"
      >
        <span aria-hidden="true" className="text-lg text-fire-orange">
          {'{'}
        </span>
        <span className="text-fire-gradient text-lg font-bold">JV</span>
        <span aria-hidden="true" className="text-lg text-fire-orange">
          {'}/'}
        </span>
      </a>
    )
  }
  export default Logo