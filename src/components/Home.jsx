import React from "react";
import Button from "../layouts/Button";
import Product from "./Product";
import Cake from "./Cake";
import Cookies from "./Cookies";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/bb6.jpg')] bg-cover bg-no-repeat">
        <div className="w-full lg:w-2/3 space-y-5">
          <h1 className="text-white font-semibold text-6xl">
            Welcome to the Sweetest Place on the Web!
          </h1>
          <p className="text-white">
            “Our sweets don’t just satisfy cravings, they create moments. Hear from our happy customers. Celebrate the season with our limited-edition sweets. Fresh flavors, festive designs, and a touch of holiday magic in every bite."
          </p>
          <div className="lg:pl-44">
            <Button title="Order Now" />
          </div>
        </div>
      </div>
      {/* Assign IDs to your components for scrolling */}
     
      <div id="Product"><Product /></div>
      <div id="Cake"><Cake /></div>
      <div id="Cookies"><Cookies /></div>
      <div id="About"><About /></div>
      <div id="Menu"><Menu /></div>
      <div id="Contact"><Contact /></div>
      <div id="Review"><Review /></div>
    </div>
  );
};

export default Home;
