import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto text-center">
        <div
          className="bg-cover bg-center h-auto text-white py-52 px-10 object-fill mb-8"
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
              className="bg-primary py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-terciary hover:text-primary"
            >
              Visite-nos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seção 1: Descubra o Sabor da Tradição */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Descubra o Sabor da Tradição
            </h2>
            <p className="text-gray-600 mb-4">
              Na Coffee Shops Tia Rosa, você experimentará o verdadeiro sabor do
              café. Nossos grãos são selecionados com cuidado e preparados com
              amor para proporcionar a você uma experiência inigualável.
            </p>
          </div>

          {/* Seção 2: Wi-Fi de Alta Velocidade */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Wi-Fi de Alta Velocidade
            </h2>
            <p className="text-gray-600 mb-4">
              Sabemos como é importante estar sempre conectado. Desfrute da
              nossa conexão Wi-Fi de alta velocidade e mantenha-se atualizado
              enquanto aproveita o seu café.
            </p>
            <Image
              src="/images/qrcode-wifi.jpg"
              alt="Wi-fi Grátis"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>

          {/* Seção 3: Seções Acolhedoras */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Seções Acolhedoras</h2>
            <p className="text-gray-600 mb-4">
              Nossa cafeteria oferece seções aconchegantes para atender a todos
              os gostos. Escolha entre mesas espaçosas para reuniões de
              trabalho, sofás confortáveis para um momento de relaxamento ou
              bancos ao ar livre para desfrutar de um dia ensolarado.
            </p>
          </div>
        </div>

        {/* Seção 4: Descubra o Seu Espaço Perfeito */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-semibold mb-2">
            Descubra o Seu Espaço Perfeito
          </h2>
          <p className="text-gray-600 mb-4">
            Área de Trabalho: Precisa de um local tranquilo para trabalhar?
            Nossa área de trabalho é perfeita para produtividade máxima.
            <br />
            Área de Convívio: Encontre seus amigos ou faça novas amizades em
            nossa área de convívio descontraída.
            <br />
            Área ao Ar Livre: Aprecie o ar fresco e a paisagem enquanto desfruta
            do seu café ao ar livre.
          </p>
        </div>

        {/* Seção 5: Missão */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
          <p className="text-gray-600 mb-4">
            Na Coffee Shops Tia Rosa, nossa missão é fornecer a você não apenas
            um ótimo café, mas também um ambiente acolhedor e conectado. Venha
            nos visitar e faça parte da nossa comunidade de amantes de café e
            pessoas conectadas.
            <br />
            Esperamos vê-lo em breve!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
