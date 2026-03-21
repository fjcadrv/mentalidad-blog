import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function SobreMi({ globalData }) {
  return (
    <Layout>
      <SEO
        title={`Sobre mí - ${globalData.name}`}
        description="Conoce a Francisco Camacho, trader e inversor con más de 8 años en los mercados financieros Forex y cripto."
      />
      <Header name={globalData.name} />

      <main className="w-full px-6 md:px-0 pb-16">

        {/* Foto + nombre */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-36 h-36 rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center mb-5">
            {/* Reemplaza /images/foto-perfil.jpg con tu foto real */}
            <img
              src="/images/foto-perfil.jpg"
              alt="Francisco Camacho"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>`;
              }}
            />
          </div>
          <h2 className="text-3xl font-semibold text-white">Francisco Camacho</h2>
          <p className="mt-1 text-sm font-bold uppercase opacity-50 tracking-widest dark:text-white">
            Trader · Educador · Analista
          </p>
        </div>

        {/* Frase principal */}
        <div className="mb-8 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            "Invierte en ti."
          </p>
          <p className="mt-3 text-base opacity-60 dark:text-white">
            El mercado puede darte dinero, pero solo tú puedes darte conocimiento.
          </p>
        </div>

        {/* Mi historia */}
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-xs font-bold uppercase opacity-50 tracking-widest mb-4 dark:text-white">
            Mi historia
          </h3>
          <div className="space-y-4 text-base opacity-80 leading-relaxed dark:text-white">
            <p>
              Desde 2017 navego los mercados financieros — primero Forex, luego cripto — aprendiendo
              que el mayor activo que un trader puede tener no es el capital, sino la mentalidad.
            </p>
            <p>
              A lo largo de estos más de 8 años he pasado por todas las etapas: los errores costosos,
              las rachas ganadoras, la disciplina construida a golpe de experiencia. Todo ese camino
              me llevó a crear <strong>Mentalidad & Mercado FX</strong> — un espacio para compartir
              análisis, contexto macro y la psicología detrás de cada decisión.
            </p>
            <p>
              Mi enfoque combina el análisis técnico, el contexto macroeconómico y la gestión
              emocional. Porque los mercados no solo se leen con gráficos — también se leen con
              la cabeza fría.
            </p>
          </div>
        </div>

        {/* Lo que encontrarás aquí */}
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
          <h3 className="text-xs font-bold uppercase opacity-50 tracking-widest mb-5 dark:text-white">
            Lo que encontrarás aquí
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: '📊', titulo: 'Análisis de Mercado', desc: 'Lecturas técnicas y macro de los principales pares Forex y cripto.' },
              { emoji: '🧠', titulo: 'Psicología del Trader', desc: 'Mentalidad, disciplina y los errores que no te cuentan en los cursos.' },
              { emoji: '📰', titulo: 'Contexto & Noticias', desc: 'El trasfondo económico que mueve los mercados cada semana.' },
            ].map((item) => (
              <div key={item.titulo} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-3xl mb-3">{item.emoji}</span>
                <p className="font-semibold text-white mb-1">{item.titulo}</p>
                <p className="text-sm opacity-60 dark:text-white leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-sm opacity-50 uppercase tracking-widest mb-3 dark:text-white">
            ¿Listo para empezar?
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-lg hover:bg-white/20 transition shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            Ver análisis recientes →
          </a>
        </div>

      </main>

      <Footer copyrightText={globalData.footerText} social={globalData.social} showSocialFollow={true} />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
