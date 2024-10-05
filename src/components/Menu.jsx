import React from "react";
import DishesCard from "../layouts/DishesCard";
import b14 from "../assets/img/b14.jpg";
import b15 from "../assets/img/b15.jpg";
import b16 from "../assets/img/b16.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={b14} title="Delicious Dish" price="$16.99" />
        <DishesCard img={b15} title="Delicious Dish" price="$18.99" />
        <DishesCard img={b16} title="Delicious Dish" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
