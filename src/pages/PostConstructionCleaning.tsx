import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const PostConstructionCleaning = () => {
  const services = [
    'Construction dust and debris removal',
    'Paint splatter and adhesive removal',
    'Window cleaning (interior and exterior)',
    'Floor cleaning and protection',
    'Fixture and appliance cleaning',
    'HVAC system cleaning',
    'Light switch and outlet cleaning',
    'Bathroom deep cleaning and sanitization',
    'Kitchen appliance detailing',
    'Carpet cleaning and deodorizing',
    'Trash and construction material disposal',
    'Final walkthrough and touch-ups'
  ];

  const phases = [
    {
      phase: 'Rough Clean',
      timing: 'During construction',
      description: 'Initial cleanup of debris, dust, and construction materials to prepare for next phase.',
      price: '$0.10-0.20/sq ft'
    },
    {
      phase: 'Light Clean',
      timing: 'Before final inspection',
      description: 'Detailed cleaning of all surfaces, fixtures, and systems before final touches.',
      price: '$0.20-0.30/sq ft'
    },
    {
      phase: 'Final Clean',
      timing: 'Move-in ready',
      description: 'Complete deep cleaning to make the space perfectly clean and ready for occupancy.',
      price: '$0.30-0.50/sq ft'
    }
  ];

  const challenges = [
    {
      challenge: 'Fine Dust Particles',
      solution: 'Specialized HEPA filtration equipment and microfiber cloths'
    },
    {
      challenge: 'Paint and Adhesive Residue',
      solution: 'Professional-grade solvents and scraping tools'
    },
    {
      challenge: 'Construction Debris',
      solution: 'Proper disposal methods and debris removal equipment'
    },
    {
      challenge: 'HVAC System Contamination',
      solution: 'Duct cleaning and filter replacement services'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <HardHat className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Post Construction Cleaning
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Specialized cleaning services to transform your construction site into a pristine, move-in ready space.
            </p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Get Construction Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Post-Construction Cleaning */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Post-Construction Cleaning Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Construction and renovation projects leave behind more than just beautiful results - they also leave dust, debris, and residue that regular cleaning can't handle.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Health & Safety</h4>
                    <p className="text-gray-600">Construction dust can contain harmful particles that affect air quality and health.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <Shield className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Protect Your Investment</h4>
                    <p className="text-gray-600">Proper cleaning protects new finishes and prevents damage from construction residue.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Move-In Ready</h4>
                    <p className="text-gray-600">Transform your space from construction zone to comfortable, clean environment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5824880/pexels-photo-5824880.jpeg" 
                alt="Post construction cleaning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <HardHat className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-semibold">Specialized</p>
                  <p className="text-sm opacity-90">Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three-Phase Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures thorough cleaning at every stage of your construction project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-orange-600 text-white p-4">
                  <h3 className="text-xl font-bold text-center">{phase.phase}</h3>
                  <p className="text-center text-orange-100 text-sm">{phase.timing}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{phase.price}</div>
                    <p className="text-sm text-gray-500">Starting price per sq ft</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Construction Cleanup
            </h2>
            <p className="text-xl text-gray-600">
              Our specialized team handles every aspect of post-construction cleaning with professional equipment and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-500">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Construction Cleaning Challenges
            </h2>
            <p className="text-xl text-gray-600">
              We have the expertise and equipment to handle the unique challenges of post-construction cleanup.
            </p>
          </div>
          
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                      Challenge: {item.challenge}
                    </h3>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Our Solution:
                    </h4>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Safety */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professional Equipment & Safety
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Equipment</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• HEPA filtration vacuums</li>
                <li>• Industrial-grade cleaning solutions</li>
                <li>• Pressure washing equipment</li>
                <li>• Debris removal containers</li>
                <li>• Professional scraping tools</li>
                <li>• Air purification systems</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Protocols</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Personal protective equipment (PPE)</li>
                <li>• Proper waste disposal methods</li>
                <li>• Hazardous material handling</li>
                <li>• Air quality monitoring</li>
                <li>• Safety training certification</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HardHat className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Construction Site?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experienced team handle the cleanup so you can enjoy your beautiful new space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Cleanup
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Discuss Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostConstructionCleaning;