import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <img className="nav-img" src={logo} alt="img" />
          </span>
          <h1 className="text-xl font-semibold">Sweets</h1>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <ScrollLink to="Home" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer">
            Home
          </ScrollLink>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <ScrollLink to="Product" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer">
                Product
              </ScrollLink>
              <BiChevronDown className="cursor-pointer" size={25} />
            </div>

            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
              <li>
                <ScrollLink to="Cake" spy={true} smooth={true} duration={400} className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                  Cake
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="Cookies" spy={true} smooth={true} duration={400} className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                  Cookies
                </ScrollLink>
              </li>
            </ul>
          </div>

          <ScrollLink to="About" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer">
            About
          </ScrollLink>

          <ScrollLink to="Menu" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer">
           Offer
          </ScrollLink>
          <ScrollLink to="Contact" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Contact
        </ScrollLink>
          <ScrollLink to="Review" spy={true} smooth={true} duration={400} className="hover:text-brightColor transition-all cursor-pointer">
            Reviews
          </ScrollLink>

          <Link to="/login" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Login
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          {menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} />}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <ScrollLink to="Home" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Home
        </ScrollLink>
        <ScrollLink to="Product" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Product
        </ScrollLink>
        <ScrollLink to="About" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          About
        </ScrollLink>
        <ScrollLink to="Menu" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Offer
        </ScrollLink>
        <ScrollLink to="Contact" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Contact
        </ScrollLink>
        <ScrollLink to="Review" spy={true} smooth={true} duration={100} className="hover:text-brightColor transition-all cursor-pointer" onClick={closeMenu}>
          Reviews
        </ScrollLink>

        <Link to="/login" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={closeMenu}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import logo from "../assets/img/logo.png";
// import Button from "../layouts/Button";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
// import './Navbar.css';




// const Navbar = () => {
//   const [menu, setMenu] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   return (
//     <div className=" fixed w-full">
//       <div>
//         <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
//           <div className=" flex flex-row items-center cursor-pointer">
//             <span>
//               <img className="nav-img"
//             src={logo} 
//   alt="img" 
// />
              
//             </span>
//             <h1 className=" text-xl font-semibold">Sweets</h1>
//           </div>

//           <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Home
//             </Link>

//             <div className="relative group">
//               <div className=" flex items-center gap-1">
//                 <Link
//                   to="dishes"
//                   spy={true}
//                   smooth={true}
//                   duration={500}
//                   className="hover:text-brightColor transition-all cursor-pointer"
//                 >
//                   Product
//                 </Link>

//                 <BiChevronDown className="cursor-pointer" size={25} />
//               </div>

//               <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
//                 <li>
//                   <Link
//                     to="Product"
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
//                   >
//                     Sweet
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="Cake"
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
//                   >
//                     Cake
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="Cookies"
//                     spy={true}
//                     smooth={true}
//                     duration={500}
//                     className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
//                   >
//                     Cookies
//                   </Link>
//                 </li>
                
//               </ul>
//             </div>

//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               About
//             </Link>

//             <Link
//               to="menu"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Offer
//             </Link>

//             <Link
//               to="review"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Reviews
//             </Link>
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Contact
//             </Link>
//             <Link
//               to="login"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               <Button title="Login" />
//             </Link>
           
            
//           </nav>

//           <div className="md:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={25} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenuUnfold size={25} onClick={handleChange} />
//             )}
//           </div>
//         </div>
//         <div
//           className={` ${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="Product"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Product
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             About
//           </Link>
//           <Link
//             to="menu"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Offer
//           </Link>
//           <Link
//             to="review"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Reviews
//           </Link>
//           <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Contact
//             </Link>

         
//           <Link
//             to="login"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             <Button title="login" />
//           </Link>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
