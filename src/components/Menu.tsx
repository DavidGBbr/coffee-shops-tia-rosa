import { IMenuItem } from "@/types/MenuItem";
import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems: IMenuItem[] = [
    {
      name: "Café Expresso",
      description: "Um clássico intenso e encorpado para os amantes do café",
      price: 11.5,
      imageSrc: "/images/coffee-express.jpg",
    },
    {
      name: "Cappuccino Cremoso",
      description:
        "Uma mistura perfeita de café, leite e espuma de leite com um toque de cacau.",
      price: 15.9,
      imageSrc: "/images/cappuccino.jpg",
    },
    {
      name: "Mocha Delícia",
      description:
        "Uma combinação irresistível de café, chocolate e creme chantilly.",
      price: 16.9,
      imageSrc: "/images/mocha.jpg",
    },
    {
      name: "Smoothie de Frutas",
      description: "Um mix refrescante de frutas frescas e iogurte.",
      price: 19.9,
      imageSrc: "/images/smothie.jpg",
    },
    {
      name: "Croissant",
      description: "Nosso croissant tradicional, amanteigado e crocante.",
      price: 14.99,
      imageSrc: "/images/croissant.jpg",
    },
    {
      name: "Sanduíche Especial do Chef",
      description:
        "Uma criação única do nosso chef, surpreendente a cada mordida.",
      price: 23.9,
      imageSrc: "/images/sanduiche.jpg",
    },
  ];
  return (
    <section id="menu">
      <h1 className="font-semibold m-8 uppercase text-primary text-4xl text-left underline">
        Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 p-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
