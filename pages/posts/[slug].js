import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomImage from '../../components/CustomImage';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import NewsletterForm from '../../components/NewsletterForm';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { SocialShareButtons } from '../../components/SocialButtons';
import { formatPostDate } from '../../utils/date-utils';
import { SesgoBadge, ParBadge, CategoriaBadge } from '../../components/PostBadges';
import GiscusComments from '../../components/Comments/GiscusComments';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  img: CustomImage,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  const pageUrl = globalData?.siteUrl
    ? `${globalData.siteUrl}/posts/${slug}`
    : '';

  const summary = frontMatter.description || frontMatter.excerpt || '';
  const coverImage = frontMatter.coverImage || frontMatter.image || '';
  const resolvedImage =
    coverImage && globalData?.siteUrl && !coverImage.startsWith('http')
      ? `${globalData.siteUrl}${coverImage}`
      : coverImage || undefined;

  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={summary}
        url={pageUrl || undefined}
        image={resolvedImage}
        type="article"
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          {/* Imagen de portada */}
          {(frontMatter.coverImage || frontMatter.image) && (
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6">
              <img
                src={frontMatter.coverImage || frontMatter.image}
                alt={frontMatter.title}
                className="w-full h-full object-cover opacity-90"
                onError={(e) => { e.target.parentNode.style.display = 'none'; }}
              />
            </div>
          )}

          {/* Badges de sesgo y par */}
          {(frontMatter.sesgo || frontMatter.par || frontMatter.categoria) && (
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {frontMatter.categoria && <CategoriaBadge categoria={frontMatter.categoria} size="lg" />}
              {frontMatter.par && <ParBadge par={frontMatter.par} size="lg" />}
              {frontMatter.sesgo && (
                <SesgoBadge sesgo={frontMatter.sesgo} probabilidad={frontMatter.probabilidad} size="lg" />
              )}
            </div>
          )}

          <h1 className="mb-8 text-2xl text-center md:text-3xl dark:text-white font-semibold">
            {frontMatter.title}
          </h1>
          <p className="text-center text-sm text-gray-400 mb-4">
            {formatPostDate(frontMatter.date)}
          </p>


          {summary && (
            <p className="mb-4 text-xl">
              {summary}
            </p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-invert">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid mt-12 md:grid-cols-2 lg:-mx-24">
          {prevPost && (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-gray-800/10 bg-white/10 md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg last:rounded-b-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Previous
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {prevPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto transform rotate-180 md:mr-0" />
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="flex flex-col px-10 py-8 text-center transition border border-t-0 border-b-0 border-gray-800/10 bg-white/10 md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg dark:bg-black/30 hover:bg-white/20 dark:hover:bg-black/50 dark:border-white/10 first:border-t first:rounded-t-lg md:border-t last:border-b"
            >
              <p className="mb-4 text-gray-500 uppercase dark:text-white dark:opacity-60">
                Next
              </p>
              <h4 className="mb-6 text-2xl text-gray-700 dark:text-white">
                {nextPost.title}
              </h4>
              <ArrowIcon className="mx-auto mt-auto md:ml-0" />
            </Link>
          )}
        </div>

        <section className="mt-12 w-full">
          <div className="mb-4 text-center">
            <p className="text-xs font-bold uppercase opacity-60">Comentarios</p>
            <h2 className="mt-2 text-2xl font-semibold dark:text-white">
              ¿Qué opinas de este escenario?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Déjame tu lectura del mercado y tu plan de acción.
            </p>
          </div>
          <GiscusComments term={slug} />
        </section>
      </article>
      <div className="w-full flex flex-col items-center gap-3 mt-10 mb-4">
        <p className="text-center text-xs font-bold uppercase opacity-60 dark:text-white">
          Compartir este artículo
        </p>
        <SocialShareButtons
          pageUrl={pageUrl}
          title={frontMatter.title}
        />
      </div>
      <NewsletterForm />
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
      slug: params.slug,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
