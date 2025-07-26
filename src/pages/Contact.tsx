import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568'],
      description: 'Call us anytime for immediate assistance'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@celebrationcleaning.com', 'quotes@celebrationcleaning.com'],
      description: 'Send us an email and we\'ll respond within 4 hours'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: ['123 Clean Street', 'Your City, ST 12345'],
      description: 'Visit our office for in-person consultations'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon-Fri: 7:00 AM - 7:00 PM', 'Sat-Sun: 8:00 AM - 5:00 PM'],
      description: 'We\'re here when you need us most'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 48 hours in advance, though we often have same-day availability. For regular cleaning services, we can usually accommodate next-day scheduling.'
    },
    {
      question: 'Do I need to be home during the cleaning?',
      answer: 'No, you don\'t need to be home. Many of our clients provide us with access instructions and go about their day. We\'re fully insured and bonded for your peace of mind.'
    },
    {
      question: 'What if I\'m not satisfied with the cleaning?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy with our service, we\'ll return within 24 hours to make it right at no additional cost.'
    },
    {
      question: 'Do you provide cleaning supplies?',
      answer: 'Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly, professional-grade products. If you prefer specific products, just let us know.'
    },
    {
      question: 'How do you determine pricing?',
      answer: 'Pricing is based on factors like home size, type of cleaning, frequency, and specific requirements. We provide transparent estimates with no hidden fees.'
    },
    {
      question: 'Are you insured and bonded?',
      answer: 'Yes, we are fully licensed, insured, and bonded. All our team members undergo thorough background checks and are trained professionals.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <MessageCircle className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the best cleaning service in town? We're here to answer your questions and provide personalized quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us - choose what works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-emerald-100 text-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm title="Send Us a Message" />
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Service Area Coverage</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Service Area
                </h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the greater metropolitan area and surrounding communities within a 25-mile radius of our headquarters.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Downtown and city center</p>
                  <p>• All suburban neighborhoods</p>
                  <p>• Commercial districts</p>
                  <p>• Industrial areas</p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Additional travel fees may apply for locations outside our standard service area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to the most common questions about our services.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            For urgent cleaning needs or emergencies, call us directly for immediate support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (555) 123-4567
            </a>
            <span className="text-emerald-200">or</span>
            <a
              href="mailto:emergency@celebrationcleaning.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Emergency
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Available 24/7 for emergency cleaning situations
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;