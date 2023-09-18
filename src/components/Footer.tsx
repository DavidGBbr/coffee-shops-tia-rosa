import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Horário de Funcionamento
            </h3>
            <p className="text-sm">
              Segunda a Sexta: 7:00 AM - 9:00 PM
              <br />
              Sábado e Domingo: 8:00 AM - 8:00 PM
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <p className="text-sm">
              Endereço: Rua da Cafeteria, 123
              <br />
              Telefone: (123) 456-7890
              <br />
              Email: contato@cafetiarosa.com
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="#"
                className="text-3xl hover:text-secondary"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-secondary"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-secondary"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/david-brigido/"
                className="text-3xl hover:text-secondary"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Coffee Shops Tia Rosa. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
