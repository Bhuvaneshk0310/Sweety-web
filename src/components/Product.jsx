import React from "react";
import a from "../assets/img/a.png";
import b from "../assets/img/b.png";
import cc from "../assets/img/cc.png";
import d from "../assets/img/d.png";
import e from "../assets/img/e.png";
import g from "../assets/img/g.png";
import DishesCard from "../layouts/DishesCard";

const Product = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Product
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={a} title="Sweety Dish" price="₹210.99" />
        <DishesCard img={b} title="Tasty Dish" price="₹412.99" />
        <DishesCard img={cc} title="Tasty Dish" price="₹510.99" />
        <DishesCard img={d} title="Tasty Dish" price="₹311.99" />
        <DishesCard img={e} title="Tasty Dish" price="₹310.99" />
        <DishesCard img={g} title="Tasty Dish" price="₹112.99" />
      </div>
    </div>
  );
};

export default Product;
