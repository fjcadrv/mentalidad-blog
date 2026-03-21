import { useEffect, useMemo, useRef } from 'react';

export default function GiscusComments({ term }) {
  const containerRef = useRef(null);

  const cfg = useMemo(() => {
    return {
      repo:         process.env.NEXT_PUBLIC_GISCUS_REPO         || 'fjcadrv/mentalidad-blog',
      repoId:       process.env.NEXT_PUBLIC_GISCUS_REPO_ID      || 'R_kgDORr4H1w',
      category:     process.env.NEXT_PUBLIC_GISCUS_CATEGORY     || 'Announcements',
      categoryId:   process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID  || 'DIC_kwDORr4H184C49YM',
      mapping:      process.env.NEXT_PUBLIC_GISCUS_MAPPING       || 'pathname',
      theme:        process.env.NEXT_PUBLIC_GISCUS_THEME         || 'preferred_color_scheme',
      lang:         process.env.NEXT_PUBLIC_GISCUS_LANG          || 'es',
      reactionsEnabled: process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? '1',
      emitMetadata:     process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA     ?? '0',
      inputPosition:    process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION    || 'bottom',
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpia embed anterior (importante al navegar entre posts)
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo',              cfg.repo);
    script.setAttribute('data-repo-id',           cfg.repoId);
    script.setAttribute('data-category',          cfg.category);
    script.setAttribute('data-category-id',       cfg.categoryId);
    script.setAttribute('data-mapping',           cfg.mapping);
    if (term) script.setAttribute('data-term',    term);
    script.setAttribute('data-theme',             cfg.theme);
    script.setAttribute('data-lang',              cfg.lang);
    script.setAttribute('data-reactions-enabled', String(cfg.reactionsEnabled));
    script.setAttribute('data-emit-metadata',     String(cfg.emitMetadata));
    script.setAttribute('data-input-position',    cfg.inputPosition);
    script.setAttribute('data-strict',            '0');

    containerRef.current.appendChild(script);
  }, [cfg, term]);

  return <div ref={containerRef} className="giscus w-full" />;
}
