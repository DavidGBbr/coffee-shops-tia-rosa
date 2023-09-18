import React from "react";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center h-auto text-terciary py-52 px-10 object-fill mb-8 rounded"
      style={{
        backgroundImage: "url(/images/friend-coffe.jpg)",
      }}
    >
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold mb-4">
          Bem-vindo à Coffee Shops Tia Rosa!
        </h1>
        <p className="text-2xl mb-10 leading-none">
          Aqui, o café é a nossa paixão e a conexão com o mundo está sempre à
          sua disposição.
        </p>
        <a
          href="#"
          className="bg-primary py-4 px-8 text-terciary font-bold uppercase text-xs rounded hover:bg-terciary hover:text-primary"
        >
          Visite-nos
        </a>
      </div>
    </section>
  );
};

export default Banner;
