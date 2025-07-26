import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, Calendar, Shield } from 'lucide-react';

const ResidentialCleaning = () => {
  const services = [
    'Kitchen deep cleaning and sanitization',
    'Bathroom cleaning and disinfection',
    'Living room and bedroom cleaning',
    'Floor cleaning (hardwood, tile, carpet)',
    'Window cleaning (interior)',
    'Dusting of all surfaces',
    'Trash removal and disposal',
    'Appliance cleaning (exterior)',
    'Light fixture cleaning',
    'Baseboards and trim cleaning'
  ];

  const packages = [
    {
      name: 'Basic Clean',
      price: '$80-120',
      frequency: 'One-time or Weekly',
      features: [
        'General dusting and vacuuming',
        'Kitchen and bathroom cleaning',
        'Trash removal',
        'Basic floor cleaning'
      ]
    },
    {
      name: 'Standard Clean',
      price: '$120-180',
      frequency: 'Bi-weekly recommended',
      features: [
        'Everything in Basic Clean',
        'Interior window cleaning',
        'Appliance exterior cleaning',
        'Detailed bathroom sanitization',
        'Light fixture cleaning'
      ]
    },
    {
      name: 'Premium Clean',
      price: '$180-250',
      frequency: 'Monthly deep clean',
      features: [
        'Everything in Standard Clean',
        'Inside oven and refrigerator cleaning',
        'Cabinet interior cleaning',
        'Baseboards and trim',
        'Detailed dusting of all items'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Home className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Residential Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional home cleaning services that give you more time to enjoy the things you love most.
            </p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Schedule Your Clean
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Home Cleaning Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our residential cleaning services are designed to keep your home spotless and comfortable. We handle every detail so you can focus on what matters most to you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4239045/pexels-photo-4239045.jpeg" 
                alt="Professional home cleaning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Fully Insured</p>
                  <p className="text-sm opacity-90">& Bonded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Cleaning Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the cleaning package that best fits your needs and budget. All prices vary based on home size and specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.frequency}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/booking"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors text-center block ${
                    index === 1
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Our simple 4-step process makes getting your home cleaned easy and convenient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Book Online',
                description: 'Schedule your cleaning service online or give us a call.'
              },
              {
                step: '2',
                title: 'We Arrive',
                description: 'Our professional team arrives on time with all supplies.'
              },
              {
                step: '3',
                title: 'We Clean',
                description: 'Thorough cleaning of your home according to your package.'
              },
              {
                step: '4',
                title: 'You Relax',
                description: 'Come home to a spotless house and enjoy your free time.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Cleaner Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your residential cleaning service today and experience the difference professional cleaning makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialCleaning;