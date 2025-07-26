import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Celebration</h3>
                <p className="text-blue-400 text-sm font-medium">Cleaning</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional cleaning services for homes and businesses. We make your space sparkle with our expert cleaning solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/residential" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link to="/deep-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/post-construction" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Post Construction
                </Link>
              </li>
              <li>
                <Link to="/maintenance" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Maintenance Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/get-hired" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@celebrationcleaning.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Clean Street<br />
                  Your City, ST 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Celebration Cleaning. All rights reserved. | Professional cleaning services you can trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;