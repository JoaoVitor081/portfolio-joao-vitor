function NotebookFallback() {
    return (
      <div className="flex h-full w-full items-center justify-center px-6">
        <div className="relative w-full max-w-[280px]">
          <div
            className="relative mx-auto h-36 w-[88%] overflow-hidden rounded-t-lg border border-fire-orange/50 bg-hack-surface shadow-glow-fire"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-fire-gradient-radial opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5 font-mono text-[10px] text-fire-yellow">
              <span>&gt; npm run dev</span>
              <span className="text-fire-orange">const app = start()</span>
              <span className="text-fire-red">await deploy(app)</span>
              <span className="text-white/70">status: online_</span>
            </div>
          </div>
  
          <div
            className="mx-auto h-3 w-full rounded-b-[50%] border border-fire-orange/40 bg-hack-black-light shadow-glow-fire"
            aria-hidden="true"
          />
  
          <span className="sr-only">Notebook estilizado exibindo código em uma tela.</span>
        </div>
      </div>
    )
  }
  
  export default NotebookFallback