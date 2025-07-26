import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Clock, Repeat } from 'lucide-react';

const MaintenanceCleaning = () => {
  const frequencies = [
    {
      frequency: 'Weekly',
      ideal: 'Busy families, high-traffic homes',
      discount: '15%',
      benefits: ['Always clean home', 'Reduces allergens', 'More free time', 'Consistent results']
    },
    {
      frequency: 'Bi-Weekly',
      ideal: 'Most popular choice',
      discount: '10%',
      benefits: ['Perfect balance', 'Cost-effective', 'Manageable maintenance', 'Professional results']
    },
    {
      frequency: 'Monthly',
      ideal: 'Lighter cleaning needs',
      discount: '5%',
      benefits: ['Budget-friendly', 'Regular upkeep', 'Seasonal deep cleans', 'Flexible scheduling']
    }
  ];

  const services = [
    'Consistent cleaning schedule',
    'Same cleaning team each visit',
    'All basic cleaning services',
    'Seasonal deep cleaning tasks',
    'Supply restocking service',
    'Priority booking for additional services',
    'Customizable cleaning checklists',
    'Quality assurance checks',
    'Flexible scheduling options',
    'Automatic billing and reminders'
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: 'Save Time',
      description: 'Reclaim hours of your week for things you actually enjoy doing.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      title: 'Consistent Quality',
      description: 'Professional cleaning every time with our trained and experienced team.'
    },
    {
      icon: <Repeat className="h-8 w-8 text-purple-500" />,
      title: 'Reliable Service',
      description: 'Same day, same time, same high standards - you can count on us.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: 'Flexible Scheduling',
      description: 'Easy to adjust, pause, or modify your cleaning schedule as needed.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Calendar className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maintenance Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Regular, reliable cleaning services that keep your space consistently clean and comfortable.
            </p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-teal-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Regular Service
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Maintenance Cleaning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Regular Maintenance Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent cleaning services provide more than just a clean space - they provide peace of mind and extra time for what matters most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequency Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Cleaning Frequency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the cleaning schedule that fits your lifestyle and budget. All regular clients receive special discounts!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frequencies.map((option, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${index === 1 ? 'border-2 border-teal-500 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.frequency}</h3>
                    <p className="text-gray-600 mb-2">{option.ideal}</p>
                    <div className="text-lg font-semibold text-teal-600">Save {option.discount}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {option.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/booking"
                    className={`w-full mt-6 py-3 px-6 rounded-lg font-medium transition-colors text-center block ${
                      index === 1
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Select {option.frequency}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included in Maintenance Cleaning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our maintenance cleaning service includes everything you need to keep your space consistently clean and comfortable.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg" 
                alt="Regular maintenance cleaning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <Repeat className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Consistent</p>
                  <p className="text-sm opacity-90">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Simple, straightforward pricing with no hidden fees. The more frequently you schedule, the more you save!
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Weekly Service</h3>
                <p className="text-2xl font-bold text-green-600">15% OFF</p>
                <p className="text-sm text-gray-600">Regular rate</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Bi-Weekly Service</h3>
                <p className="text-2xl font-bold text-blue-600">10% OFF</p>
                <p className="text-sm text-gray-600">Regular rate</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Monthly Service</h3>
                <p className="text-2xl font-bold text-purple-600">5% OFF</p>
                <p className="text-sm text-gray-600">Regular rate</p>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Benefits:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">No contract required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Free rescheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Same team each visit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Priority customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Regular Service Works
            </h2>
            <p className="text-xl text-gray-600">
              Starting your maintenance cleaning service is simple and convenient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Frequency',
                description: 'Select weekly, bi-weekly, or monthly cleaning schedule.'
              },
              {
                step: '2',
                title: 'Schedule First Clean',
                description: 'Book your initial cleaning and meet your dedicated team.'
              },
              {
                step: '3',
                title: 'Set Preferences',
                description: 'Customize your cleaning checklist and preferences.'
              },
              {
                step: '4',
                title: 'Enjoy Consistency',
                description: 'Relax knowing your space will always be professionally cleaned.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Consistently Clean Spaces?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your regular cleaning service today and enjoy more free time while maintaining a spotless space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Service
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceCleaning;