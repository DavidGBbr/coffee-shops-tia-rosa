import { IMenuItem } from "@/types/MenuItem";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";

const Home = () => {
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto text-center">
        {/*Banner*/}
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
              Aqui, o café é a nossa paixão e a conexão com o mundo está sempre
              à sua disposição.
            </p>
            <a
              href="#"
              className="bg-primary py-4 px-8 text-terciary font-bold uppercase text-xs rounded hover:bg-terciary hover:text-primary"
            >
              Visite-nos
            </a>
          </div>
        </section>

        {/*Sobre nós */}
        <section className="p-8">
          <h1 className="font-semibold text-4xl text-left uppercase text-primary mb-8">
            Sobre nós
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Nossa história</h2>
              <p className="text-gray-600">
                Na Coffee Shops Tia Rosa, nossa história é tão rica quanto nosso
                café. Fundada com paixão e amor pelo café, somos mais do que
                apenas uma cafeteria; somos uma extensão da comunidade que
                servimos.
              </p>
            </div>

            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">A Tradição do Café</h2>
              <p className="text-gray-600">
                Hoje, honramos a tradição do café todos os dias. Selecionamos
                cuidadosamente os melhores grãos, torramos com maestria e
                preparamos cada xícara com carinho. Nossa equipe dedicada é
                apaixonada por criar a bebida perfeita, e cada cliente é tratado
                como um amigo de longa data.
              </p>
            </div>

            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">
                Um Espaço para a Comunidade
              </h2>
              <p className="text-gray-600">
                Além de servir café excepcional, a Coffee Shops Tia Rosa é um
                lugar de encontro para amigos, colegas de trabalho e famílias.
                Nosso ambiente acolhedor e nossos espaços convidativos são o
                cenário perfeito para momentos especiais e conversas profundas.
                Aqui, todos são bem-vindos.
              </p>
            </div>

            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
              <p className="text-gray-600">
                Na Coffee Shops Tia Rosa, nossa missão é fornecer a você não
                apenas um ótimo café, mas também um ambiente acolhedor e
                conectado. Venha nos visitar e faça parte da nossa comunidade de
                amantes de café e pessoas conectadas. Esperamos vê-lo em breve!
              </p>
            </div>

            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Venha nos Visitar</h2>
              <p className="text-gray-600">
                Estamos ansiosos para recebê-lo na Coffee Shops Tia Rosa.
                Experimente o sabor da tradição, aconchego e hospitalidade em
                cada visita. Junte-se a nós para celebrar o amor pelo café e
                pela comunidade.
                <br />
                Seja parte da nossa história. Venha tomar uma xícara de café com
                a gente.
              </p>
            </div>

            <div className="bg-terciary p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">
                Wi-Fi de Alta Velocidade
              </h2>
              <p className="text-gray-600">
                Sabemos como é importante estar sempre conectado. Desfrute da
                nossa conexão Wi-Fi de alta velocidade e mantenha-se atualizado
                enquanto aproveita o seu café.
              </p>
              <div className="mt-4">
                <Image
                  src="/images/qrcode-wifi.jpg"
                  alt="Wi-fi Grátis"
                  width={125}
                  height={125}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/*Menu*/}
        <section>
          <h1 className="font-semibold m-8 uppercase text-primary text-4xl text-left underline">
            Menu
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </section>

        <section></section>
      </div>
    </div>
  );
};

export default Home;
