import React, { useState } from 'react';
import { Calendar, MapPin, Clock, DollarSign, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    frequency: '',
    homeSize: '',
    rooms: '',
    bathrooms: '',
    addOns: [],
    date: '',
    time: '',
    address: '',
    city: '',
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialInstructions: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const serviceTypes = [
    { id: 'residential', name: 'Residential Cleaning', basePrice: 80 },
    { id: 'commercial', name: 'Commercial Cleaning', basePrice: 120 },
    { id: 'deep', name: 'Deep Cleaning', basePrice: 200 },
    { id: 'post-construction', name: 'Post Construction', basePrice: 300 },
    { id: 'maintenance', name: 'Maintenance Cleaning', basePrice: 70 }
  ];

  const frequencies = [
    { id: 'one-time', name: 'One-time', multiplier: 1 },
    { id: 'weekly', name: 'Weekly', multiplier: 0.85 },
    { id: 'bi-weekly', name: 'Bi-weekly', multiplier: 0.9 },
    { id: 'monthly', name: 'Monthly', multiplier: 0.95 }
  ];

  const homeSizes = [
    { id: 'small', name: 'Small (< 1,000 sq ft)', multiplier: 0.8 },
    { id: 'medium', name: 'Medium (1,000-2,000 sq ft)', multiplier: 1 },
    { id: 'large', name: 'Large (2,000-3,000 sq ft)', multiplier: 1.3 },
    { id: 'extra-large', name: 'Extra Large (> 3,000 sq ft)', multiplier: 1.6 }
  ];

  const addOns = [
    { id: 'inside-fridge', name: 'Inside Refrigerator', price: 25 },
    { id: 'inside-oven', name: 'Inside Oven', price: 30 },
    { id: 'garage', name: 'Garage Cleaning', price: 40 },
    { id: 'basement', name: 'Basement Cleaning', price: 35 },
    { id: 'windows', name: 'Interior Windows', price: 50 },
    { id: 'cabinets', name: 'Inside Cabinets', price: 60 }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const calculatePrice = () => {
    const service = serviceTypes.find(s => s.id === bookingData.serviceType);
    const frequency = frequencies.find(f => f.id === bookingData.frequency);
    const homeSize = homeSizes.find(h => h.id === bookingData.homeSize);
    
    if (!service || !frequency || !homeSize) return 0;

    let basePrice = service.basePrice * homeSize.multiplier * frequency.multiplier;
    
    // Add room/bathroom multipliers
    const roomMultiplier = Math.max(1, parseInt(bookingData.rooms) * 0.1);
    const bathroomMultiplier = Math.max(1, parseInt(bookingData.bathrooms) * 0.15);
    basePrice *= (1 + roomMultiplier + bathroomMultiplier);

    // Add add-ons
    const addOnTotal = bookingData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);

    return Math.round(basePrice + addOnTotal);
  };

  React.useEffect(() => {
    setEstimatedPrice(calculatePrice());
  }, [bookingData]);

  const handleInputChange = (field: string, value: string | string[]) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddOnChange = (addOnId: string) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Booking submitted successfully! We\'ll contact you within 24 hours to confirm your appointment.');
    
    // Reset form
    setStep(1);
    setBookingData({
      serviceType: '',
      frequency: '',
      homeSize: '',
      rooms: '',
      bathrooms: '',
      addOns: [],
      date: '',
      time: '',
      address: '',
      city: '',
      zipCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialInstructions: ''
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Cleaning Service</h1>
          <p className="text-xl opacity-90">
            Get your personalized quote in just a few simple steps
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`flex-1 h-1 mx-4 ${
                    step > stepNum ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service Details</span>
            <span>Schedule</span>
            <span>Location</span>
            <span>Contact Info</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              
              {/* Step 1: Service Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Service Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceTypes.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleInputChange('serviceType', service.id)}
                          className={`p-4 border rounded-lg text-left transition-colors ${
                            bookingData.serviceType === service.id
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className="text-sm text-gray-500">Starting at ${service.basePrice}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Cleaning Frequency *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {frequencies.map((freq) => (
                        <button
                          key={freq.id}
                          type="button"
                          onClick={() => handleInputChange('frequency', freq.id)}
                          className={`p-3 border rounded-lg text-center transition-colors ${
                            bookingData.frequency === freq.id
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="font-medium">{freq.name}</div>
                          {freq.multiplier < 1 && (
                            <div className="text-xs text-green-600">
                              {Math.round((1 - freq.multiplier) * 100)}% off
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Home Size *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {homeSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => handleInputChange('homeSize', size.id)}
                          className={`p-4 border rounded-lg text-left transition-colors ${
                            bookingData.homeSize === size.id
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {size.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Bedrooms *
                      </label>
                      <select
                        id="rooms"
                        value={bookingData.rooms}
                        onChange={(e) => handleInputChange('rooms', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Bathrooms *
                      </label>
                      <select
                        id="bathrooms"
                        value={bookingData.bathrooms}
                        onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Add-On Services (Optional)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {addOns.map((addOn) => (
                        <label key={addOn.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={bookingData.addOns.includes(addOn.id)}
                            onChange={() => handleAddOnChange(addOn.id)}
                            className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{addOn.name}</div>
                            <div className="text-sm text-gray-500">+${addOn.price}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Service</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={bookingData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        value={bookingData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-900">Scheduling Notes</span>
                    </div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• We recommend booking at least 48 hours in advance</li>
                      <li>• Our team will arrive within a 2-hour window of your selected time</li>
                      <li>• Same-day booking may be available - call us directly</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 3: Location */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Location</h2>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={bookingData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="123 Main Street"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={bookingData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your City"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        value={bookingData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="12345"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="font-medium text-gray-900">Service Area</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      We currently serve the greater metropolitan area within a 25-mile radius. 
                      Additional travel fees may apply for locations outside our standard service area.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Info */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={bookingData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        value={bookingData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      id="specialInstructions"
                      value={bookingData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Any special instructions, access codes, pet information, or areas of focus..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && (!bookingData.serviceType || !bookingData.frequency || !bookingData.homeSize || !bookingData.rooms || !bookingData.bathrooms)) ||
                      (step === 2 && (!bookingData.date || !bookingData.time)) ||
                      (step === 3 && (!bookingData.address || !bookingData.city || !bookingData.zipCode))
                    }
                    className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Price Estimate
              </h3>
              
              {bookingData.serviceType && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Base Service:</span>
                    <span>{serviceTypes.find(s => s.id === bookingData.serviceType)?.name}</span>
                  </div>
                  
                  {bookingData.frequency && (
                    <div className="flex justify-between text-sm">
                      <span>Frequency:</span>
                      <span>{frequencies.find(f => f.id === bookingData.frequency)?.name}</span>
                    </div>
                  )}
                  
                  {bookingData.homeSize && (
                    <div className="flex justify-between text-sm">
                      <span>Home Size:</span>
                      <span>{homeSizes.find(h => h.id === bookingData.homeSize)?.name}</span>
                    </div>
                  )}
                  
                  {bookingData.addOns.length > 0 && (
                    <div className="border-t pt-2">
                      <div className="text-sm font-medium mb-1">Add-ons:</div>
                      {bookingData.addOns.map(addOnId => {
                        const addOn = addOns.find(a => a.id === addOnId);
                        return addOn ? (
                          <div key={addOnId} className="flex justify-between text-sm text-gray-600">
                            <span>• {addOn.name}</span>
                            <span>+${addOn.price}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              )}
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Estimated Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${estimatedPrice}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Final price may vary based on actual conditions
                </p>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Free in-home estimate</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Fully insured & bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;