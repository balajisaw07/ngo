import React from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const { blogPosts } = useContent();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-heritage-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Heritage <span className="text-heritage-gold">Blog</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover insights, stories, and expertise from the world of heritage preservation and cultural conservation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-heritage-navy mb-4">No Blog Posts Yet</h3>
              <p className="text-gray-600">Blog posts will appear here once they are published by the admin.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Featured Post */}
              {blogPosts.length > 0 && (
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-heritage-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {blogPosts[0].author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(blogPosts[0].date)}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {blogPosts[0].readTime} min read
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-heritage-navy font-serif mb-4 hover:text-heritage-gold transition-colors duration-200">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <button className="inline-flex items-center text-heritage-gold font-semibold hover:text-heritage-navy transition-colors duration-200">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-heritage-navy font-serif mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(1, 4).map((post) => (
                      <div key={post.id} className="flex space-x-4 group cursor-pointer">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-semibold text-heritage-navy group-hover:text-heritage-gold transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{formatDate(post.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-heritage-navy font-serif mb-6">Categories</h3>
                  <div className="space-y-2">
                    {['Heritage Restoration', 'Cultural Preservation', 'Conservation Techniques', 'Case Studies', 'Industry News'].map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-heritage-gold hover:text-white transition-colors duration-200"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          {blogPosts.length > 1 && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-heritage-navy font-serif mb-8 text-center">All Posts</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-heritage-navy mb-3 font-serif group-hover:text-heritage-gold transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <button className="inline-flex items-center text-heritage-gold font-semibold hover:text-heritage-navy transition-colors duration-200">
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;