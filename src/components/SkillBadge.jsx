function SkillBadge({ icon: Icon, label, level = 80, highlight = false }) {
    return (
      <div
        className={`w-full rounded-lg border p-4 transition-all hover:-translate-y-1 sm:w-[220px] ${
          highlight
            ? 'border-fire-orange bg-fire-orange/10 shadow-glow-fire'
            : 'border-white/10 bg-hack-surface hover:border-fire-orange/50'
        }`}
      >
        <div className="mb-2 flex items-center gap-2">
          {Icon && <Icon className={highlight ? 'text-fire-yellow' : 'text-fire-orange'} size={18} aria-hidden="true" />}
          <span className="font-mono text-sm text-white/90">{label}</span>
        </div>
  
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-fire-gradient" style={{ width: `${level}%` }} />
        </div>
      </div>
    )
  }
  
  export default SkillBadge