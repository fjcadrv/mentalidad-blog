export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Mentalidad & Mercado FX';

  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Análisis Forex | Macro, Técnico y Psicología de Trading';

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Mentalidad & Mercado FX © 2026 | Trading conlleva riesgo. Este contenido es educativo y no constituye asesoría financiera.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
