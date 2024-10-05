import React from 'react';
import logo from "../assets/img/logo.png";
import Pinterest_logo from '../assets/img/Pinterest_logo.png'; 
import Instagram_logo from '../assets/img/Instagram_logo.png'; 
import Whatapp_logo from '../assets/img/Whatapp_logo.png';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-12 py-10'>
            <div className='flex items-center mt-8 gap-5'>
                <img src={logo} alt="Logo" />
                <p className='text-4xl font-bold text-gray-800'>Sweets</p>
            </div>
            <ul className='flex list-none gap-12 text-gray-800 text-lg'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='flex gap-5'>
                <div className="p-2 bg-gray-100 border border-gray-300 rounded">
                    <img className='h-10' src={Instagram_logo} alt="Instagram" />
                </div>
                <div className="p-2 bg-gray-100 border border-gray-300 rounded">
                    <img className='h-10' src={Pinterest_logo} alt="Pinterest" />
                </div>
                <div className="p-2 bg-gray-100 border border-gray-300 rounded">
                    <img className='h-10' src={Whatapp_logo} alt="WhatsApp" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 w-full mb-8 text-gray-700 text-lg">
                <hr className="w-4/5 border-none h-1 rounded bg-gray-300" />
                <p>Copyright &copy; 2024 - All rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
