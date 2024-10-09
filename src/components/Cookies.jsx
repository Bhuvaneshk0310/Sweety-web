import React from 'react'
import DishesCard from "../layouts/DishesCard";
import Cookies1 from "../assets/img/Cookies1.jpg";
import Cookies2 from "../assets/img/Cookies2.jpg";
import Cookies4 from "../assets/img/Cookies4.jpg";

const Cookies = () => {
  return (
    <div>
       <div>


<div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
  <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
   Cookies
  </h1>

  <div className=" flex flex-wrap gap-8 justify-center">
    <DishesCard img={Cookies1} title="Delicious Dish" price="₹316.99" />
    <DishesCard img={Cookies2} title="Delicious Dish" price="₹618.99" />
    <DishesCard img={Cookies4} title="Delicious Dish" price="₹514.99" />
   
  </div>
</div>

</div>
    </div>
  )
}

export default Cookies
