import React, { useState } from 'react';
import { Users, Heart, DollarSign, Clock, CheckCircle, Upload } from 'lucide-react';

const GetHired = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    availability: '',
    transportation: '',
    references: '',
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your application! We\'ll review it and get back to you within 48 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      availability: '',
      transportation: '',
      references: '',
      coverLetter: ''
    });
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: 'Competitive Pay',
      description: '$18-25/hour based on experience, plus performance bonuses and tips.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: 'Flexible Schedule',
      description: 'Choose your hours and work around your life commitments.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Great Benefits',
      description: 'Health insurance, paid time off, and professional development opportunities.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Team Environment',
      description: 'Join a supportive team that values your contribution and growth.'
    }
  ];

  const requirements = [
    'Must be 18 years or older',
    'Reliable transportation',
    'Ability to lift up to 25 pounds',
    'Attention to detail',
    'Excellent communication skills',
    'Professional attitude',
    'Background check required',
    'Previous cleaning experience preferred (but not required)',
    'Flexible schedule availability',
    'Team player mentality'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Users className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Build a rewarding career with Celebration Cleaning. We're looking for dedicated individuals who take pride in their work.
            </p>
            <a
              href="#application"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Apply Today
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Celebration Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members so they can provide the best service to our clients.
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

      {/* Job Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We're Looking For
            </h2>
            <p className="text-xl text-gray-600">
              We welcome both experienced cleaners and those new to the industry who are eager to learn.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Job Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive benefits and opportunities for growth in a supportive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compensation Package</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• $18-25/hour starting wage</li>
                <li>• Performance bonuses</li>
                <li>• Tips from satisfied clients</li>
                <li>• Annual wage reviews</li>
                <li>• Overtime opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Health insurance options</li>
                <li>• Paid time off</li>
                <li>• Flexible scheduling</li>
                <li>• Professional uniforms</li>
                <li>• All supplies provided</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Opportunities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Paid training programs</li>
                <li>• Team lead positions</li>
                <li>• Continuing education</li>
                <li>• Career advancement</li>
                <li>• Skill development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the application below and we'll get back to you within 48 hours.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Cleaning Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="none">No experience</option>
                    <option value="some">Some experience (1-2 years)</option>
                    <option value="experienced">Experienced (3-5 years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="transportation" className="block text-sm font-medium text-gray-700 mb-2">
                    Reliable Transportation *
                  </label>
                  <select
                    id="transportation"
                    name="transportation"
                    required
                    value={formData.transportation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes, I have reliable transportation</option>
                    <option value="no">No, I need transportation assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  required
                  rows={3}
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your availability (days, hours, any restrictions)..."
                />
              </div>

              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                  References
                </label>
                <textarea
                  id="references"
                  name="references"
                  rows={3}
                  value={formData.references}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide at least 2 professional references with contact information..."
                />
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Yourself *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  required
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Why do you want to work with Celebration Cleaning? What makes you a great fit for our team?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Application Review
              </h3>
              <p className="text-gray-600">
                We'll review your application within 48 hours and contact you if you're a good fit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interview Process
              </h3>
              <p className="text-gray-600">
                Phone interview followed by an in-person meeting to discuss the role and expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Training & Start
              </h3>
              <p className="text-gray-600">
                Complete our paid training program and start your career with Celebration Cleaning!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetHired;