import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import blogData from '../data/blogData.json';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData.posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.posts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} - inShare Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <div className="min-h-screen bg-background-dark py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-3xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Excerpt */}
            <div className="bg-primary/20 border-l-4 border-accent p-6 rounded-r-lg mb-8">
              <p className="text-white/90 text-lg italic">
                {post.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line">
                {post.content}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-start gap-3 mb-12 pb-12 border-b border-white/10">
              <Tag className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-accent text-sm px-3 py-1 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-primary/30 rounded-lg p-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">{post.author}</h3>
                  <p className="text-white/60 text-sm">Content Specialist at inShare</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-white text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-primary/30 rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white text-sm font-bold mb-2 line-clamp-2 hover:text-accent transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-white/50 text-xs">{relatedPost.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 text-center border border-accent/30">
              <h3 className="text-white text-2xl font-bold mb-4">
                Ready to Transform Your Document Sharing?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Start tracking engagement, automating follow-ups, and converting more leads with inShare.
              </p>
              <button
                onClick={() => navigate('/request-demo')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-primary text-base font-bold rounded-lg hover:bg-accent/80 transition-colors"
              >
                Request Demo
              </button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
