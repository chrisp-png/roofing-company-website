import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogContent from '../components/blog/BlogContent';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, Tag, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import ArticleSchema from '../components/schema/ArticleSchema';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const postUrl = `https://chrisp-png-roofing-c-gxj0.bolt.host/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={`${post.title} | All Phase Construction USA`}
        description={post.excerpt}
      />
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        datePublished={post.publishedAt}
        dateModified={post.publishedAt}
        authorName="All Phase Construction USA"
        authorJobTitle="Licensed Roofing Contractor"
        url={postUrl}
        keywords={post.keywords}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Blog", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/blog" },
          { name: post.title, url: postUrl }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <div className="bg-neutral-950 border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600/10 border border-red-500/30 rounded-full">
                <Tag className="w-3.5 h-3.5 text-red-500" />
                <span className="text-sm font-semibold text-red-500">{post.category}</span>
              </div>
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-600/10 border border-yellow-500/30 rounded-full text-sm font-semibold text-yellow-500">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-8 pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-600/5 border border-red-500/20 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {post.cityFocus ? `Serving ${post.cityFocus}` : 'Serving All of South Florida'}
                </h2>
                <p className="text-neutral-300 mb-4">
                  All Phase Construction USA is a dual-licensed roofing contractor serving Broward and Palm
                  Beach Counties with 25+ years of experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a
                    href="tel:754-227-5605"
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    754-227-5605
                  </a>
                  <a
                    href="mailto:info@allphaseusa.com"
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@allphaseusa.com
                  </a>
                </div>
                <p className="text-xs text-neutral-500 mt-3">
                  FL Licenses: CGC1526236 (General Contractor) • CCC1331464 (Roofing Contractor)
                </p>
              </div>
            </div>
          </div>

          <BlogContent slug={post.slug} />

          <div className="mt-16 pt-8 border-t border-neutral-800">
            <h3 className="text-xl font-bold text-white mb-2">Related Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-sm text-neutral-300"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-gradient-to-br from-neutral-950 to-black border-t border-neutral-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black border border-red-500/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Ready to Get Your Roof Cost Estimate?
              </h2>
              <p className="text-xl text-neutral-300 mb-8 text-center leading-relaxed">
                Use our interactive calculator to get an instant estimate, or schedule a free inspection
                and wind mitigation assessment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/roof-cost-calculator"
                  className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50 text-center"
                  aria-label="Calculate your roof replacement cost in South Florida"
                >
                  Roof Cost Calculator
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-red-600 text-red-500 text-lg font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200 text-center"
                  aria-label="Schedule free roof inspection in Broward or Palm Beach County"
                >
                  Schedule an Inspection
                </Link>
              </div>

              <div className="border-t border-neutral-800 pt-6 text-center">
                <p className="text-neutral-400 mb-3">All Phase Construction USA</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>590 Goolsby Blvd, Deerfield Beach, FL 33442</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-500" />
                    <a href="tel:754-227-5605" className="hover:text-red-500 transition-colors">
                      754-227-5605
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 border-t border-neutral-800 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-black border border-neutral-800 rounded-xl p-5 hover:border-red-500 transition-all duration-300"
                    aria-label={`Read article: ${relatedPost.title}`}
                  >
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-600/10 border border-red-500/30 rounded-full mb-3">
                      <span className="text-xs font-semibold text-red-500">{relatedPost.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-neutral-400">{relatedPost.readTime}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
