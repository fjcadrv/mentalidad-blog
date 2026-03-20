import { useEffect, useMemo, useRef } from 'react';

const hasGiscusConfig = (cfg) => {
  return Boolean(
    cfg.repo && cfg.repoId && cfg.category && cfg.categoryId && cfg.mapping
  );
};

export default function GiscusComments({ term }) {
  const containerRef = useRef(null);

  const cfg = useMemo(() => {
    return {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING || 'pathname',
      theme: process.env.NEXT_PUBLIC_GISCUS_THEME || 'preferred_color_scheme',
      lang: process.env.NEXT_PUBLIC_GISCUS_LANG || 'es',
      reactionsEnabled:
        process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? '1',
      emitMetadata: process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? '0',
      inputPosition: process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION || 'bottom',
    };
  }, []);

  const enabled = hasGiscusConfig(cfg);

  useEffect(() => {
    if (!enabled) return;
    if (!containerRef.current) return;

    // Clear previous embed (important when navigating between posts).
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', cfg.repo);
    script.setAttribute('data-repo-id', cfg.repoId);
    script.setAttribute('data-category', cfg.category);
    script.setAttribute('data-category-id', cfg.categoryId);
    script.setAttribute('data-mapping', cfg.mapping);

    // If mapping uses `specific-term`, allow passing `term`.
    if (term) script.setAttribute('data-term', term);

    script.setAttribute('data-theme', cfg.theme);
    script.setAttribute('data-lang', cfg.lang);
    script.setAttribute('data-reactions-enabled', String(cfg.reactionsEnabled));
    script.setAttribute('data-emit-metadata', String(cfg.emitMetadata));
    script.setAttribute('data-input-position', cfg.inputPosition);

    containerRef.current.appendChild(script);
  }, [enabled, cfg, term]);

  if (!enabled) {
    return (
      <div className="w-full rounded-3xl border border-gray-800/10 bg-white/10 p-6 text-gray-600 dark:text-gray-300">
        <p className="font-bold text-gray-900 dark:text-white">
          Comentarios (Giscus) no configurados.
        </p>
        <p className="mt-2 text-sm">
          Agrega variables de entorno para habilitarlo:
          <span className="block mt-1 font-mono text-xs opacity-70">
            NEXT_PUBLIC_GISCUS_REPO, NEXT_PUBLIC_GISCUS_REPO_ID, NEXT_PUBLIC_GISCUS_CATEGORY, NEXT_PUBLIC_GISCUS_CATEGORY_ID
          </span>
        </p>
      </div>
    );
  }

  return <div ref={containerRef} className="giscus" />;
}

