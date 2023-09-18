import { IMenuItem } from "@/types/MenuItem";
import React from "react";

const MenuItem = ({ name, description, price, imageSrc }: IMenuItem) => {
  return (
    <div className="flex flex-col items-center bg-terciary border border-terciary rounded-lg shadow md:flex-row md:max-w-x hover:scale-95 cursor-pointer transition-all">
      <img
        src={imageSrc}
        alt={name}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
          {name}
        </h5>
        <p className="mb-3 font-normal text-primary">{description}</p>
        <p className="text-green-600 text-lg font-semibold">
          R$
          {price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
