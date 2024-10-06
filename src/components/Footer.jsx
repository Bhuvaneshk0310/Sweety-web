import React from 'react';
import logo from "../assets/img/logo.png";
import Pinterest_logo from '../assets/img/Pinterest_logo.png'; 
import Instagram_logo from '../assets/img/Instagram_logo.png'; 
import Whatapp_logo from '../assets/img/Whatapp_logo.png';

const Footer = () => {
    return (
        <div>
            {/* Newsletter Section */}
            <div className="newsletter text-center py-12 bg-gray-100">
                <h1 className="text-3xl font-semibold mb-3">Get Exclusive Offer on Your Email</h1>
                <p className="mb-6 text-gray-700">Subscribe to our newsletter and stay updated</p>
                <div className="flex justify-center">
                    <div className="flex w-3/4 sm:w-1/2 lg:w-2/5">
                        <input
                            type="email"
                            className="form-input w-full px-4 py-3 rounded-l-lg focus:outline-none"
                            placeholder="Your Email"
                            aria-label="Email Address"
                        />
                        <button
                            className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 focus:outline-none"
                            type="button"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col justify-center items-center gap-12 py-10">
                <div className="flex items-center mt-8 gap-5">
                    <img src={logo} alt="Logo" />
                    <p className="text-4xl font-bold text-gray-800">Sweets</p>
                </div>
                <ul className="flex list-none gap-12 text-gray-800 text-lg">
                    <li className="cursor-pointer">Company</li>
                    <li className="cursor-pointer">Products</li>
                    <li className="cursor-pointer">Offices</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
                <div className="flex gap-5">
                    <div className="p-2">
                        <img className="h-10" src={Instagram_logo} alt="Instagram" />
                    </div>
                    <div className="p-2">
                        <img className="h-10" src={Pinterest_logo} alt="Pinterest" />
                    </div>
                    <div className="p-2">
                        <img className="h-10" src={Whatapp_logo} alt="WhatsApp" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8 w-full mb-8 text-gray-700 text-lg">
                    <hr className="w-4/5 border-none h-1 rounded bg-gray-300" />
                    <p>Copyright &copy; 2024 - All rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
