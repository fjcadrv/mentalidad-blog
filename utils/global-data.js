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

  // Used for absolute share links (e.g. WhatsApp, Facebook sharer).
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? decodeURI(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, '')
    : '';

  // Configure these URLs via environment variables.
  const social = {
    // Sigue / conecta
    facebook: process.env.SOCIAL_FACEBOOK_URL
      ? decodeURI(process.env.SOCIAL_FACEBOOK_URL)
      : '',
    x: process.env.SOCIAL_X_URL
      ? decodeURI(process.env.SOCIAL_X_URL)
      : 'https://x.com/mentalidadymdo',
    linkedin: process.env.SOCIAL_LINKEDIN_URL
      ? decodeURI(process.env.SOCIAL_LINKEDIN_URL)
      : '',
    whatsapp: process.env.SOCIAL_WHATSAPP_URL
      ? decodeURI(process.env.SOCIAL_WHATSAPP_URL)
      : '',
    telegram: process.env.SOCIAL_TELEGRAM_URL
      ? decodeURI(process.env.SOCIAL_TELEGRAM_URL)
      : '',
    instagram: process.env.SOCIAL_INSTAGRAM_URL
      ? decodeURI(process.env.SOCIAL_INSTAGRAM_URL)
      : '',
    youtube: process.env.SOCIAL_YOUTUBE_URL
      ? decodeURI(process.env.SOCIAL_YOUTUBE_URL)
      : 'https://www.youtube.com/@mentalidadmercadofx',
    tiktok: process.env.SOCIAL_TIKTOK_URL
      ? decodeURI(process.env.SOCIAL_TIKTOK_URL)
      : 'https://www.tiktok.com/@mentalidadmercadofx',
  };

  return {
    name,
    blogTitle,
    footerText,
    siteUrl,
    social,
  };
};
