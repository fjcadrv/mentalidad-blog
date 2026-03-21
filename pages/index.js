import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { formatPostDate } from '../utils/date-utils';
import { SesgoBadge, ParBadge, CategoriaBadge } from '../components/PostBadges';

export default function Index({ posts, globalData }) {
  const featuredPost = posts.find((p) => p.data?.featured) || posts[0];
  const featuredFilePath = featuredPost?.filePath;
  const otherPosts = featuredFilePath
    ? posts.filter((p) => p.filePath !== featuredFilePath)
    : posts;

  return (
    <Layout>
      <SEO
        title={globalData.name}
        description={globalData.blogTitle}
        type="website"
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1>

        {/* Post destacado */}
        {featuredPost && (
          <section className="mb-10">
            <Link
              as={`/posts/${featuredPost.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              className="block rounded-3xl border border-gray-800/10 bg-white/10 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden transition hover:bg-white/20 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 dark:bg-black/30"
            >
              {/* Imagen de portada */}
              {featuredPost.data.coverImage && (
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={featuredPost.data.coverImage}
                    alt={featuredPost.data.title}
                    className="w-full h-full object-cover opacity-80"
                    onError={(e) => { e.target.parentNode.style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="flex flex-col gap-4 p-8">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {featuredPost.data.categoria && <CategoriaBadge categoria={featuredPost.data.categoria} />}
                  {featuredPost.data.par && <ParBadge par={featuredPost.data.par} />}
                  {featuredPost.data.sesgo && (
                    <SesgoBadge sesgo={featuredPost.data.sesgo} probabilidad={featuredPost.data.probabilidad} />
                  )}
                </div>

                {featuredPost.data.date && (
                  <p className="font-bold uppercase opacity-60 text-sm">
                    {formatPostDate(featuredPost.data.date) ?? featuredPost.data.date}
                  </p>
                )}
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {featuredPost.data.title}
                </h2>
                {(featuredPost.data.description || featuredPost.data.excerpt) && (
                  <p className="text-lg opacity-70 leading-relaxed">
                    {featuredPost.data.description || featuredPost.data.excerpt}
                  </p>
                )}
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-semibold opacity-80">
                    Leer el análisis
                  </span>
                  <ArrowIcon className="text-primary" />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Grid de posts */}
        <section>
          {otherPosts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {otherPosts.map((post) => {
                const excerpt = post.data.description || post.data.excerpt || '';
                const slug = post.filePath.replace(/\.mdx?$/, '');
                return (
                  <Link
                    key={post.filePath}
                    as={`/posts/${slug}`}
                    href={`/posts/[slug]`}
                    className="group block rounded-3xl border border-gray-800/10 bg-white/10 backdrop-blur-lg overflow-hidden transition hover:bg-white/20 hover:border-gray-800/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 dark:bg-black/30"
                  >
                    {/* Imagen de portada */}
                    {post.data.coverImage && (
                      <div className="w-full h-36 overflow-hidden">
                        <img
                          src={post.data.coverImage}
                          alt={post.data.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                          onError={(e) => { e.target.parentNode.style.display = 'none'; }}
                        />
                      </div>
                    )}
                    <div className="flex flex-col h-full p-6">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.data.categoria && <CategoriaBadge categoria={post.data.categoria} />}
                        {post.data.par && <ParBadge par={post.data.par} />}
                        {post.data.sesgo && (
                          <SesgoBadge sesgo={post.data.sesgo} probabilidad={post.data.probabilidad} />
                        )}
                      </div>

                      {post.data.date && (
                        <p className="mb-2 font-bold uppercase opacity-60 text-xs">
                          {formatPostDate(post.data.date) ?? post.data.date}
                        </p>
                      )}
                      <h2 className="text-xl group-hover:opacity-95 transition font-semibold">
                        {post.data.title}
                      </h2>
                      {excerpt && (
                        <p className="mt-2 text-sm opacity-70 leading-relaxed">
                          {excerpt}
                        </p>
                      )}
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm font-semibold opacity-80">
                          Ver detalle
                        </span>
                        <ArrowIcon className="transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
      <NewsletterForm />
      <Footer copyrightText={globalData.footerText} social={globalData.social} showSocialFollow={true} />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();
  return { props: { posts, globalData } };
}
