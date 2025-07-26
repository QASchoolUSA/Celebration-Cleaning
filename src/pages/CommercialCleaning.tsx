import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Clock, CheckCircle } from 'lucide-react';

const CommercialCleaning = () => {
  const services = [
    'Office cleaning and sanitization',
    'Retail space maintenance',
    'Medical facility cleaning',
    'Restaurant and kitchen cleaning',
    'Warehouse cleaning',
    'Restroom sanitization',
    'Floor care (carpet, hardwood, tile)',
    'Window cleaning (interior/exterior)',
    'Trash removal and recycling',
    'COVID-19 disinfection protocols'
  ];

  const industries = [
    {
      name: 'Offices',
      description: 'Professional office cleaning for businesses of all sizes.',
      image: 'https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg'
    },
    {
      name: 'Retail',
      description: 'Keep your retail space welcoming and spotless for customers.',
      image: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg'
    },
    {
      name: 'Medical',
      description: 'Specialized cleaning for medical facilities and clinics.',
      image: 'https://images.pexels.com/photos/4386441/pexels-photo-4386441.jpeg'
    },
    {
      name: 'Restaurants',
      description: 'Deep cleaning and sanitization for food service establishments.',
      image: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Building2 className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commercial Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional commercial cleaning services that keep your business looking its best and your employees healthy.
            </p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Get Commercial Quote
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
                Comprehensive Business Cleaning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create a clean, professional environment that impresses clients and keeps your team productive. Our commercial cleaning services are tailored to meet the unique needs of your business.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg" 
                alt="Professional commercial cleaning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Professional</p>
                  <p className="text-sm opacity-90">Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different businesses have different cleaning needs. Our specialized services cater to various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Commercial Services?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to providing reliable, professional cleaning services that support your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-12 w-12 text-blue-500" />,
                title: 'Flexible Scheduling',
                description: 'We work around your business hours - evenings, weekends, or whenever convenient for you.'
              },
              {
                icon: <Users className="h-12 w-12 text-green-500" />,
                title: 'Trained Professionals',
                description: 'Our team is professionally trained, background-checked, and fully insured for your peace of mind.'
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-purple-500" />,
                title: 'Quality Guaranteed',
                description: 'We stand behind our work with a satisfaction guarantee and regular quality inspections.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Custom Pricing for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every business is unique, and so are our pricing solutions. We offer competitive rates based on your specific needs, space size, and cleaning frequency.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Factors That Determine Your Quote:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Square footage of your facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Type of business/industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Frequency of service needed</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Specific services required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Time of day for cleaning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Special requirements or equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and custom quote for your commercial cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialCleaning;