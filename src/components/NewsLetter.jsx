import React from 'react';

const NewsLetter = () => {
  return (
    <div className="newsletter text-center py-12 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-3">Get Exclusive Offer on Your Email</h1>
      <p className="mb-6 text-gray-700">Subscribe to our newsletter and stay updated</p>
      
      <div className="flex justify-center">
        <div className="flex w-3/4 sm:w-1/2 lg:w-2/5">
          {/* Email Input */}
          <input
            type="email"
            className="form-input w-full px-4 py-3 rounded-l-lg focus:outline-none"
            placeholder="Your Email"
            aria-label="Email Address"
          />
          
          {/* Subscribe Button */}
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 focus:outline-none"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
