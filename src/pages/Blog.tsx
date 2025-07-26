import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Ultimate Spring Cleaning Checklist: Room by Room Guide',
    excerpt: 'Spring cleaning doesn\'t have to be overwhelming. Follow our comprehensive room-by-room checklist to tackle your entire home efficiently and effectively.',
    image: 'https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    category: 'Cleaning Tips',
    readTime: '8 min read'
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Eco-Friendly Cleaning Products That Actually Work',
      excerpt: 'Discover environmentally safe cleaning products that deliver professional results without harmful chemicals.',
      image: 'https://images.pexels.com/photos/4239093/pexels-photo-4239093.jpeg',
      author: 'Mike Chen',
      date: '2025-01-12',
      category: 'Green Cleaning',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'How Often Should You Deep Clean Different Areas of Your Home?',
      excerpt: 'Learn the optimal cleaning schedule for every room to maintain a healthy and beautiful living space.',
      image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      category: 'Home Maintenance',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Commercial Cleaning: Why Professional Service Matters',
      excerpt: 'Explore the benefits of professional commercial cleaning and how it impacts your business success.',
      image: 'https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg',
      author: 'David Park',
      date: '2025-01-08',
      category: 'Business',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Post-Construction Cleanup: What You Need to Know',
      excerpt: 'Essential information about post-construction cleaning and why it requires specialized expertise.',
      image: 'https://images.pexels.com/photos/5824862/pexels-photo-5824862.jpeg',
      author: 'Lisa Wang',
      date: '2025-01-05',
      category: 'Construction',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Maintaining a Clean Home with Pets: Tips and Tricks',
      excerpt: 'Pet-friendly cleaning strategies that keep your home fresh and safe for your furry family members.',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg',
      author: 'Jennifer Brown',
      date: '2025-01-03',
      category: 'Pet-Friendly',
      readTime: '6 min read'
    },
    {
      id: 7,
      title: 'The Psychology of Clean Spaces: How Cleanliness Affects Wellbeing',
      excerpt: 'Discover the surprising ways a clean environment impacts your mental health and productivity.',
      image: 'https://images.pexels.com/photos/4239041/pexels-photo-4239041.jpeg',
      author: 'Dr. Rachel Green',
      date: '2025-01-01',
      category: 'Wellness',
      readTime: '8 min read'
    }
  ];

  const categories = [
    'All Posts',
    'Cleaning Tips',
    'Green Cleaning',
    'Home Maintenance',
    'Business',
    'Construction',
    'Pet-Friendly',
    'Wellness'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <BookOpen className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cleaning Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert tips, industry insights, and helpful guides to keep your spaces spotless and healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                    <Calendar className="h-5 w-5 text-gray-400 ml-4" />
                    <span className="text-gray-600">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <Calendar className="h-4 w-4 ml-2" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group">
                      Read
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Cleaning Tips
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest cleaning tips, industry insights, and exclusive offers.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Professional Cleaning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Put our expertise to work for you. Book your cleaning service today and see the difference professional care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Service
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;