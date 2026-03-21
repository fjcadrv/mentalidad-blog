// Badges: categoría, par/activo y sesgo
// Todos opcionales — solo aparecen si están definidos en el frontmatter

const SESGO_CONFIG = {
  alcista: { label: '▲ Alcista', bg: 'bg-emerald-500/20', border: 'border-emerald-400/40', text: 'text-emerald-300' },
  bajista: { label: '▼ Bajista', bg: 'bg-red-500/20',     border: 'border-red-400/40',     text: 'text-red-300'   },
  neutral: { label: '◆ Neutral', bg: 'bg-yellow-500/20',  border: 'border-yellow-400/40',  text: 'text-yellow-300'},
};

const CATEGORIA_CONFIG = {
  'Análisis':   { bg: 'bg-blue-500/20',   border: 'border-blue-400/40',   text: 'text-blue-300'   },
  'Educación':  { bg: 'bg-purple-500/20', border: 'border-purple-400/40', text: 'text-purple-300' },
  'Noticias':   { bg: 'bg-orange-500/20', border: 'border-orange-400/40', text: 'text-orange-300' },
  'Psicología': { bg: 'bg-pink-500/20',   border: 'border-pink-400/40',   text: 'text-pink-300'   },
  'Cripto':     { bg: 'bg-yellow-500/20', border: 'border-yellow-400/40', text: 'text-yellow-300' },
};

export function CategoriaBadge({ categoria, size = 'sm' }) {
  if (!categoria) return null;
  const config = CATEGORIA_CONFIG[categoria] || { bg: 'bg-white/10', border: 'border-white/20', text: 'text-white' };
  const textSize = size === 'lg' ? 'text-sm px-4 py-1.5' : 'text-xs px-3 py-1';
  return (
    <span className={`inline-flex items-center rounded-full border font-bold uppercase tracking-wide ${config.bg} ${config.border} ${config.text} ${textSize}`}>
      {categoria}
    </span>
  );
}

export function ParBadge({ par, size = 'sm' }) {
  if (!par) return null;
  const textSize = size === 'lg' ? 'text-sm px-4 py-1.5' : 'text-xs px-3 py-1';
  return (
    <span className={`inline-flex items-center rounded-full border border-white/20 bg-white/10 text-white font-bold uppercase tracking-wider ${textSize}`}>
      {par}
    </span>
  );
}

export function SesgoBadge({ sesgo, probabilidad, size = 'sm' }) {
  if (!sesgo) return null;
  const key = sesgo.toLowerCase();
  const config = SESGO_CONFIG[key] || SESGO_CONFIG.neutral;
  const textSize = size === 'lg' ? 'text-sm px-4 py-1.5' : 'text-xs px-3 py-1';
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wide ${config.bg} ${config.border} ${config.text} ${textSize}`}>
      {config.label}
      {probabilidad && (
        <span className="opacity-70 font-normal normal-case tracking-normal">
          {probabilidad}%
        </span>
      )}
    </span>
  );
}
