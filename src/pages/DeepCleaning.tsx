import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, Clock, Star } from 'lucide-react';

const DeepCleaning = () => {
  const services = [
    'Inside appliance cleaning (oven, refrigerator, microwave)',
    'Cabinet interior and exterior cleaning',
    'Baseboards, trim, and crown molding',
    'Light fixtures and ceiling fans',
    'Window sills and frames',
    'Door frames and handles',
    'Switch plates and outlet covers',
    'Detailed bathroom sanitization',
    'Grout cleaning and restoration',
    'Mattress and upholstery cleaning',
    'Carpet deep cleaning and deodorizing',
    'Closet organization and cleaning'
  ];

  const beforeAfter = [
    {
      area: 'Kitchen',
      before: 'Grease buildup, dirty appliances, stained surfaces',
      after: 'Sparkling appliances, sanitized surfaces, fresh smell'
    },
    {
      area: 'Bathroom',
      before: 'Soap scum, mildew, hard water stains',
      after: 'Pristine tiles, spotless fixtures, sanitized surfaces'
    },
    {
      area: 'Living Areas',
      before: 'Dust accumulation, stained carpets, cluttered spaces',
      after: 'Fresh carpets, dust-free surfaces, organized space'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Zap className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Deep Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Thorough, detailed cleaning that goes beyond the surface to make your space truly pristine and fresh.
            </p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Book Deep Clean
            </Link>
          </div>
        </div>
      </section>

      {/* What is Deep Cleaning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Deep Cleaning?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Deep cleaning goes far beyond regular cleaning. It's a comprehensive, detailed cleaning process that addresses areas and items typically not covered in routine cleaning services.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Perfect for spring cleaning, move-in/move-out situations, or when you want to reset your space to its absolute cleanest state.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Clock className="h-8 w-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Investment</h4>
                    <p className="text-gray-600">Takes 2-3x longer than regular cleaning</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Star className="h-8 w-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Attention to Detail</h4>
                    <p className="text-gray-600">Every nook, cranny, and surface is addressed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4107124/pexels-photo-4107124.jpeg" 
                alt="Deep cleaning in progress"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Deep Clean</p>
                  <p className="text-sm opacity-90">Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Deep Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep cleaning service covers every detail to ensure your space is thoroughly cleaned and sanitized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Deep Clean Difference
            </h2>
            <p className="text-xl text-gray-600">
              See how our deep cleaning transforms your space from ordinary to extraordinary.
            </p>
          </div>
          
          <div className="space-y-8">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {item.area}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-red-600 mb-3">Before Deep Clean</h4>
                      <p className="text-gray-600 bg-red-50 p-4 rounded-lg">
                        {item.before}
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-green-600 mb-3">After Deep Clean</h4>
                      <p className="text-gray-600 bg-green-50 p-4 rounded-lg">
                        {item.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deep Cleaning Investment
            </h2>
            <p className="text-xl text-gray-600">
              Our deep cleaning service is priced based on the size of your space and specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Spaces</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$200-300</div>
              <p className="text-gray-600 mb-4">1-2 bedrooms, 1 bathroom</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Up to 1,000 sq ft</li>
                <li>✓ 4-6 hours of cleaning</li>
                <li>✓ All deep clean services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-purple-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Medium Homes</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$300-450</div>
              <p className="text-gray-600 mb-4">2-3 bedrooms, 2 bathrooms</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 1,000-2,000 sq ft</li>
                <li>✓ 6-8 hours of cleaning</li>
                <li>✓ All deep clean services</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Large Homes</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$450+</div>
              <p className="text-gray-600 mb-4">4+ bedrooms, 3+ bathrooms</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ 2,000+ sq ft</li>
                <li>✓ 8+ hours of cleaning</li>
                <li>✓ All deep clean services</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              * Prices may vary based on condition of the space and specific requirements
            </p>
            <Link
              to="/booking"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            When Should You Book Deep Cleaning?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Moving into a new home',
              'Spring cleaning season',
              'Before or after hosting events',
              'Post-construction or renovation',
              'After illness or allergies',
              'Preparing to sell your home',
              'It\'s been 6+ months since last deep clean',
              'When regular cleaning isn\'t enough'
            ].map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for the Ultimate Clean?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the satisfaction of a truly deep-cleaned space. Book your deep cleaning service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Deep Clean
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeepCleaning;