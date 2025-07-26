import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Residential', path: '/residential' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Deep Cleaning', path: '/deep-cleaning' },
    { name: 'Post Construction', path: '/post-construction' },
    { name: 'Maintenance', path: '/maintenance' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Celebration</h1>
              <p className="text-sm text-blue-600 font-medium">Cleaning</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        isActive(service.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/booking" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/booking') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Book Now
            </Link>
            
            <Link 
              to="/get-hired" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/get-hired') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Get Hired
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
            
            <Link 
              to="/booking" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link 
                to="/" 
                className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Services</p>
                <div className="mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-2 py-1 text-sm rounded-md transition-colors ${
                        isActive(service.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/booking" 
                className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive('/booking') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              
              <Link 
                to="/get-hired" 
                className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive('/get-hired') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Hired
              </Link>
              
              <Link 
                to="/blog" 
                className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contact" 
                className={`block px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-2">
                <Link 
                  to="/booking" 
                  className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;