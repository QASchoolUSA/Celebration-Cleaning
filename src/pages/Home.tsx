import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Clock, Shield, Award } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'Keep your home spotless with our professional residential cleaning services.',
      image: 'https://images.pexels.com/photos/4239045/pexels-photo-4239045.jpeg',
      link: '/residential'
    },
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for offices, retail spaces, and businesses.',
      image: 'https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg',
      link: '/commercial'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough, detailed cleaning for every corner of your space.',
      image: 'https://images.pexels.com/photos/4107124/pexels-photo-4107124.jpeg',
      link: '/deep-cleaning'
    },
    {
      title: 'Post Construction',
      description: 'Specialized cleaning after construction or renovation projects.',
      image: 'https://images.pexels.com/photos/5824880/pexels-photo-5824880.jpeg',
      link: '/post-construction'
    },
    {
      title: 'Maintenance Cleaning',
      description: 'Regular cleaning schedules to keep your space consistently clean.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg',
      link: '/maintenance'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Experienced Team',
      description: 'Professional cleaners with years of experience.'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: 'Flexible Scheduling',
      description: 'We work around your busy schedule.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      title: 'Eco-Friendly',
      description: 'Safe, green cleaning products for your family.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Celebration Cleaning transformed my home! Their attention to detail is incredible, and the team is always professional and reliable.'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'Best commercial cleaning service in town. Our office has never looked better, and our clients always comment on how clean it is.'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'After our home renovation, Celebration Cleaning made our house move-in ready. They handled all the construction dust perfectly!'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning
              <span className="block text-yellow-300">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial spaces, we provide exceptional cleaning services that make your space sparkle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Celebration Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional cleaning services with the highest standards of professionalism.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Homes Cleaned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today for a free quote and let us make your space sparkle!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;