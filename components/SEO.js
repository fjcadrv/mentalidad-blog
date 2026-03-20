import Head from 'next/head';

export default function SEO({
  title,
  description,
  url,
  image,
  type,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description ? <meta name="description" content={description} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:type" content={type || 'website'} />
      {image ? <meta property="og:image" content={image} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
    </Head>
  );
}
