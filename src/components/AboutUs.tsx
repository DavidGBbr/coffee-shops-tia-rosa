import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="p-4" id="about">
      <h1 className="font-semibold text-4xl text-left uppercase text-primary mb-8">
        Sobre nós
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Nossa história</h2>
          <p className="text-gray-600">
            Na Coffee Shops Tia Rosa, nossa história é tão rica quanto nosso
            café. Fundada com paixão e amor pelo café, somos mais do que apenas
            uma cafeteria; somos uma extensão da comunidade que servimos.
          </p>
        </div>

        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">A Tradição do Café</h2>
          <p className="text-gray-600">
            Hoje, honramos a tradição do café todos os dias. Selecionamos
            cuidadosamente os melhores grãos, torramos com maestria e preparamos
            cada xícara com carinho. Nossa equipe dedicada é apaixonada por
            criar a bebida perfeita, e cada cliente é tratado como um amigo de
            longa data.
          </p>
        </div>

        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Um Espaço para a Comunidade
          </h2>
          <p className="text-gray-600">
            Além de servir café excepcional, a Coffee Shops Tia Rosa é um lugar
            de encontro para amigos, colegas de trabalho e famílias. Nosso
            ambiente acolhedor e nossos espaços convidativos são o cenário
            perfeito para momentos especiais e conversas profundas. Aqui, todos
            são bem-vindos.
          </p>
        </div>

        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
          <p className="text-gray-600">
            Na Coffee Shops Tia Rosa, nossa missão é fornecer a você não apenas
            um ótimo café, mas também um ambiente acolhedor e conectado. Venha
            nos visitar e faça parte da nossa comunidade de amantes de café e
            pessoas conectadas. Esperamos vê-lo em breve!
          </p>
        </div>

        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Venha nos Visitar</h2>
          <p className="text-gray-600">
            Estamos ansiosos para recebê-lo na Coffee Shops Tia Rosa.
            Experimente o sabor da tradição, aconchego e hospitalidade em cada
            visita. Junte-se a nós para celebrar o amor pelo café e pela
            comunidade.
            <br />
            Seja parte da nossa história. Venha tomar uma xícara de café com a
            gente.
          </p>
        </div>

        <div className="bg-terciary p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Wi-Fi de Alta Velocidade
          </h2>
          <p className="text-gray-600">
            Sabemos como é importante estar sempre conectado. Desfrute da nossa
            conexão Wi-Fi de alta velocidade e mantenha-se atualizado enquanto
            aproveita o seu café.
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
  );
};

export default AboutUs;
