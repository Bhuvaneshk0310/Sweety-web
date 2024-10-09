import React from 'react'
import DishesCard from "../layouts/DishesCard";
import cake1 from "../assets/img/cake1.jpg";
import cake2 from "../assets/img/cake2.jpg";
import cake3 from "../assets/img/cake3.jpg";

const Cake = () => {
  return (
    <div>


    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
       Cakes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={cake1} title="Premium Black Forest" price="₹916.99" />
        <DishesCard img={cake2} title="Vanilla Cake" price="₹618.99" />
        <DishesCard img={cake3} title="Chocolate Cake" price="₹514.99" />
       
      </div>
    </div>
   
    </div>
  )
}

export default Cake
