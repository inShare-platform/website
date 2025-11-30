import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import blogData from '../data/blogData.json';

const BlogList = () => {
  const { posts } = blogData;

  return (
    <>
      <Helmet>
        <title>Blog - inShare | Content Tracker, CRM Marketing Automation & Lead Generation</title>
        <meta name="description" content="Explore expert insights on content tracker, CRM marketing automation, automated sales CRM software, lead generation services, cold email marketing, and AI digital marketing strategies." />
        <meta name="keywords" content="content tracker, crm marketing automation, crm automation, automated sales crm software, lead generation services, sales follow up email, cold email marketing software, dynamic forms, email outreach, sales prospecting tools, b2b content marketing, b2b digital marketing, ai digital marketing, whatsapp marketing software, competitor analysis tool" />
      </Helmet>

      <div className="min-h-screen bg-background-dark py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl md:text-5xl font-black mb-4">
              inShare Blog
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              Expert insights on content tracking, CRM automation, lead generation, and AI-powered marketing strategies
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-primary/30 rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Image */}
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-white text-xl font-bold mb-3 hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-accent text-xs px-2 py-1 bg-accent/10 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
