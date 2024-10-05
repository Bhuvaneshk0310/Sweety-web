import React from "react";
import img from "../assets/img/b3.jpg";
import Button from "../layouts/Button";
import './About.css';
const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
    <img 
  className="about min-w-[450px] min-h-[350px] max-w-[400px] max-h-[400px] object-cover mb-5 mr-5 " 
  src={img} 
  alt="img" 
/>


      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
