
   import React from 'react';

const Contact = () => {
  return (
    <div
      className="section-bg bg-cover bg-left relative "
      style={{ backgroundImage: 'url(https://i.ibb.co/9p3Cnk9/slider-2.jpg)' }}
    >
      <div className="overlay bg-gradient-to-r from-blue-700 to-indigo-700 w-full h-full relative py-28">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 px-4 flex items-center">
              <div className="contact-info space-y-8">
                <h2 className="contact-title text-3xl font-semibold text-white">Have Any Questions?</h2>
                <p className="text-gray-300">
                  Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example.
                </p>
                <ul className="contact-info space-y-6">
                  <li className="flex items-center space-x-4">
                    <div className="info-left text-pink-400">
                      <i className="fas fa-mobile-alt text-2xl"></i>
                    </div>
                    <div className="info-right">
                      <h4 className="text-white text-lg">+11223344550</h4>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="info-left text-pink-400">
                      <i className="fas fa-at text-2xl"></i>
                    </div>
                    <div className="info-right">
                      <h4 className="text-white text-lg">info@example.com</h4>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="info-left text-pink-400">
                      <i className="fas fa-map-marker-alt text-2xl"></i>
                    </div>
                    <div className="info-right">
                      <h4 className="text-white text-lg">1243 Street, New Chandigarh, INDIA</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 px-4 flex items-center">
              <div className="contact-form bg-white shadow-lg p-10 rounded-lg">
                <form id="contact-form" method="POST">
                  <div className="space-y-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control w-full p-4 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500"
                        placeholder="Enter Your Name *"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control w-full p-4 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500"
                        placeholder="Enter Your Email *"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        rows="4"
                        name="message"
                        className="form-control w-full p-4 border-b-2 border-gray-300 focus:outline-none focus:border-pink-500"
                        placeholder="Enter Your Message *"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition"
                        type="submit"
                      >
                        Send Us <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

