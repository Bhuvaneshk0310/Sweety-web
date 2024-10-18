import React, { useState } from "react";
import contract2 from "../assets/img/contract1.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                setStatus("There was a problem sending your message.");
            }
        } catch (error) {
            setStatus("Error: " + error.message);
        }
    };

    return (
        <section 
            className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat" 
            style={{ 
                backgroundImage: `url(${contract2})`,
            }} 
            data-scroll-index="7"
        >
            <div className="bg-gradient-to-r from--600 to-blue-500 bg-opacity-90 w-full h-full py-24 flex items-center justify-center">
                <div className="container mx-auto px-6 lg:px-32">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-1/2 text-white space-y-5">
                            <h2 className="text-3xl lg:text-4xl font-semibold">Have Any Questions?</h2>
                            <p className="text-lg">
                                Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <i className="fas fa-mobile-alt text-2xl mr-4"></i>
                                    <h4 className="text-xl">+11223344550</h4>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-at text-2xl mr-4"></i>
                                    <h4 className="text-xl">info@example.com</h4>
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                                    <h4 className="text-xl">1243 Street, New Chandigarh, INDIA</h4>
                                </li>
                            </ul>
                            {status && <p className="text-lg text-yellow-300">{status}</p>}
                        </div>

                        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8 mt-8 lg:mt-0">
                            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="form-name" value="contactForm" />
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
                                        placeholder="Enter Your Name *"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
                                        placeholder="Enter Your Email *"
                                        required
                                    />
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
                                        placeholder="Enter Your Message *"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button className="bg-red-400 text-white py-3 px-6 rounded-lg hover:bg-red-500 transition duration-200">
                                        Send Us <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


// import React from 'react';
// import contract2 from "../assets/img/contract1.jpg";

// const Contact = () => {
//   return (
//     <section 
//       className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat" 
//       style={{ 
//         backgroundImage: `url(${contract2})`,
//        }} 
//       data-scroll-index="7"
//     >
//       <div className="bg-gradient-to-r from--600 to-blue-500 bg-opacity-90 w-full h-full py-24 flex items-center justify-center">
//         <div className="container mx-auto px-6 lg:px-32">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
            
//             {/* Contact Info */}
//             <div className="w-full lg:w-1/2 text-white space-y-5">
//               <h2 className="text-3xl lg:text-4xl font-semibold">Have Any Questions?</h2>
//               <p className="text-lg">
//                 Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design.
//               </p>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <i className="fas fa-mobile-alt text-2xl mr-4"></i>
//                   <h4 className="text-xl">+11223344550</h4>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fas fa-at text-2xl mr-4"></i>
//                   <h4 className="text-xl">info@example.com</h4>
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
//                   <h4 className="text-xl">1243 Street, New Chandigarh, INDIA</h4>
//                 </li>
//               </ul>
//             </div>

           
//             <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8 mt-8 lg:mt-0">
//               <form id="contact-form" method="POST" className="space-y-6">
//                 <input type="hidden" name="form-name" value="contactForm" />
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
//                     placeholder="Enter Your Name *"
//                     required
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
//                     placeholder="Enter Your Email *"
//                     required
//                   />
//                   <textarea
//                     rows="4"
//                     name="message"
//                     className="w-full border-b-2 border-gray-300 py-3 px-4 focus:border-red-400 focus:outline-none"
//                     placeholder="Enter Your Message *"
//                     required
//                   ></textarea>
//                 </div>
//                 <div>
//                   <button className="bg-red-400 text-white py-3 px-6 rounded-lg hover:bg-red-500 transition duration-200">
//                     Send Us <i className="fas fa-arrow-right ml-2"></i>
//                   </button>
//                 </div>
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
