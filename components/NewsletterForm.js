import { useEffect } from 'react';

export default function NewsletterForm() {
  useEffect(() => {
    // Carga el script de Beehiiv solo una vez
    if (document.querySelector('script[src*="beehiiv"]')) return;
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-8 my-10">
      <div className="text-center mb-6">
        <p className="text-xs font-bold uppercase tracking-widest opacity-50 dark:text-white mb-2">
          Newsletter
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Análisis directo a tu correo
        </h2>
        <p className="mt-2 text-sm opacity-60 dark:text-white leading-relaxed">
          Macro, técnico y psicología del trader — cada semana, sin spam.
        </p>
      </div>

      <div className="flex justify-center">
        <iframe
          src="https://subscribe-forms.beehiiv.com/de391564-0302-4927-a2cd-0e63ece5bfdc"
          className="beehiiv-embed"
          data-test-id="beehiiv-embed"
          frameBorder="0"
          scrolling="no"
          style={{
            width: '100%',
            maxWidth: '560px',
            height: '207px',
            margin: '0',
            borderRadius: '0px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        />
      </div>
    </div>
  );
}
